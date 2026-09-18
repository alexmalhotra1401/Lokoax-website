import AuthLayout from '@/components/AuthLayout';
import { SignupForm } from '@/components/AuthForms';

export const metadata = { title: 'Create account — LOKOAX' };

export default function SignupPage(){
  return <AuthLayout title="Start with a clear learning path." subtitle="Create one learner account, choose a plan and keep lessons, practice and progress connected."><SignupForm /></AuthLayout>;
}
