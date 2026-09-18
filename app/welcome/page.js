import AuthLayout from '@/components/AuthLayout';
import { WelcomePanel } from '@/components/AuthForms';

export const metadata = { title: 'Welcome — LOKOAX' };

export default function WelcomePage(){
  return <AuthLayout title="Your learning space is ready." subtitle="Continue into LOKOAX with a secure account, clear learning path and progress that stays connected."><WelcomePanel /></AuthLayout>;
}
