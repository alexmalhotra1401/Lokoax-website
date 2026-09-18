import AuthLayout from '@/components/AuthLayout';
import { VerifyEmailForm } from '@/components/AuthForms';

export const metadata = { title: 'Verify email — LOKOAX' };

export default function VerifyEmailPage(){
  return <AuthLayout title="One quick step to secure your account." subtitle="Verify the learner email before continuing into the product experience."><VerifyEmailForm /></AuthLayout>;
}
