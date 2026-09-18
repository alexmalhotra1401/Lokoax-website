'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, LockKeyhole, UserRound, CheckCircle2 } from 'lucide-react';

function Field({ label, type = 'text', name, placeholder, icon: Icon, required = true, value, onChange, autoComplete }) {
  const [show, setShow] = useState(false);
  const password = type === 'password';
  return (
    <label className="form-field">
      <span>{label}</span>
      <div className="input-shell">
        {Icon && <Icon size={18} />}
        <input
          type={password ? (show ? 'text' : 'password') : type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
        />
        {password && <button className="input-action" type="button" onClick={() => setShow((v) => !v)} aria-label={show ? 'Hide password' : 'Show password'}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>}
      </div>
    </label>
  );
}

function useQuery() {
  const [params, setParams] = useState({});
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setParams(Object.fromEntries(p.entries()));
  }, []);
  return params;
}

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(true);

  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') || '').trim();
    const password = String(data.get('password') || '');
    if (!email.includes('@') || password.length < 6) {
      setError('Enter a valid email address and password.');
      return;
    }
    router.push('/welcome?state=login');
  }

  return (
    <form className="auth-form" onSubmit={submit}>
      <div className="auth-heading"><h1>Welcome back</h1><p>Kindly provide the details below to proceed with signing in.</p></div>
      {error && <div className="form-alert error">{error}</div>}
      <Field label="Email address" name="email" type="email" placeholder="Enter your email" icon={Mail} autoComplete="email" />
      <Field label="Password" name="password" type="password" placeholder="Enter your password" icon={LockKeyhole} autoComplete="current-password" />
      <div className="form-meta">
        <label className="check-label"><input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /> Remember me</label>
        <Link href="/forgot-password">Forgot password?</Link>
      </div>
      <button className="button button-primary button-block auth-submit" type="submit">Sign in</button>
      <p className="auth-switch">Don’t have an account? <Link href="/signup?plan=free">Sign up</Link></p>
    </form>
  );
}

export function SignupForm() {
  const router = useRouter();
  const params = useQuery();
  const [error, setError] = useState('');
  const plan = params.plan === 'premium' ? 'Premium' : 'Free';
  const billing = params.billing === 'annual' ? 'Annual billing' : 'Monthly billing';

  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const password = String(data.get('password') || '');
    const confirm = String(data.get('confirm') || '');
    if (password.length < 8) return setError('Use at least 8 characters for your password.');
    if (password !== confirm) return setError('Passwords do not match.');
    const email = encodeURIComponent(String(data.get('email') || ''));
    router.push(`/verify-email?email=${email}&plan=${plan.toLowerCase()}${plan === 'Premium' ? `&billing=${params.billing || 'monthly'}` : ''}`);
  }

  return (
    <form className="auth-form" onSubmit={submit}>
      <div className="auth-heading"><h1>Create your account</h1><p>Set up your learner profile and start with the plan that fits you.</p></div>
      <div className={`selected-plan ${plan === 'Premium' ? 'premium' : ''}`}>
        <div><small>Selected plan</small><strong>{plan}</strong></div>
        <span>{plan === 'Premium' ? billing : 'Start with core learning'}</span>
      </div>
      {error && <div className="form-alert error">{error}</div>}
      <Field label="Full name" name="name" placeholder="Enter your full name" icon={UserRound} autoComplete="name" />
      <Field label="Email address" name="email" type="email" placeholder="Enter your email" icon={Mail} autoComplete="email" />
      <Field label="Password" name="password" type="password" placeholder="Create a password" icon={LockKeyhole} autoComplete="new-password" />
      <Field label="Confirm password" name="confirm" type="password" placeholder="Confirm your password" icon={LockKeyhole} autoComplete="new-password" />
      <p className="password-note">Use at least 8 characters. For a real launch, password rules should be enforced by the authentication provider.</p>
      <button className="button button-primary button-block auth-submit" type="submit">Create account</button>
      <p className="auth-switch">Already have an account? <Link href="/login">Sign in</Link></p>
    </form>
  );
}

export function ForgotPasswordForm() {
  const [sent, setSent] = useState(false);
  function submit(e) { e.preventDefault(); setSent(true); }
  return (
    <form className="auth-form" onSubmit={submit}>
      <div className="auth-heading"><h1>Forgot password?</h1><p>Enter your email and we’ll prepare the reset flow.</p></div>
      {sent && <div className="form-alert success">If this email exists, a reset link would be sent by your authentication service.</div>}
      <Field label="Email address" name="email" type="email" placeholder="Enter your email" icon={Mail} autoComplete="email" />
      <button className="button button-primary button-block auth-submit" type="submit">Request reset link</button>
      <p className="auth-switch"><Link href="/login">← Back to sign in</Link></p>
    </form>
  );
}

export function VerifyEmailForm() {
  const router = useRouter();
  const params = useQuery();
  const [digits, setDigits] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  function update(index, value) {
    const digit = value.replace(/\D/g, '').slice(-1);
    setDigits((old) => old.map((item, i) => i === index ? digit : item));
    if (digit && index < 5) document.getElementById(`otp-${index + 1}`)?.focus();
  }
  function submit(e) {
    e.preventDefault();
    if (digits.join('').length !== 6) return setError('Enter the complete 6-digit verification code.');
    router.push(`/welcome?state=signup&plan=${params.plan || 'free'}`);
  }

  return (
    <form className="auth-form" onSubmit={submit}>
      <div className="auth-heading"><h1>Verify your email</h1><p>Enter the 6-digit code sent to <strong>{params.email || 'your email address'}</strong>.</p></div>
      {error && <div className="form-alert error">{error}</div>}
      <div className="otp-row">
        {digits.map((digit, index) => <input id={`otp-${index}`} key={index} value={digit} onChange={(e) => update(index, e.target.value)} inputMode="numeric" maxLength={1} aria-label={`Digit ${index + 1}`} />)}
      </div>
      <button className="button button-primary button-block auth-submit" type="submit">Verify email</button>
      <p className="auth-switch">Didn’t receive it? <button type="button" className="text-button">Resend code</button></p>
    </form>
  );
}

export function WelcomePanel() {
  const params = useQuery();
  const signup = params.state === 'signup';
  const plan = params.plan === 'premium' ? 'Premium' : 'Free';
  return (
    <div className="auth-form welcome-panel">
      <div className="success-icon"><CheckCircle2 size={40} /></div>
      <div className="auth-heading centered">
        <h1>{signup ? 'Welcome to LOKOAX' : 'Signed in successfully'}</h1>
        <p>{signup ? `Your ${plan} learning profile is ready to continue.` : 'Your account flow is connected and ready for backend authentication.'}</p>
      </div>
      <Link className="button button-primary button-block auth-submit" href="/">Go to homepage</Link>
      <Link className="button button-secondary button-block" href="/#subjects">Explore subjects</Link>
    </div>
  );
}
