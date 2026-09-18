import AuthLayout from '@/components/AuthLayout';
import { ForgotPasswordForm } from '@/components/AuthForms';

export const metadata = { title: 'Forgot password — LOKOAX' };

export default function ForgotPasswordPage(){
  return <AuthLayout title="Get back to learning without friction." subtitle="The reset experience is ready to connect to your production authentication provider."><ForgotPasswordForm /></AuthLayout>;
}
