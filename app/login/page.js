import AuthLayout from '@/components/AuthLayout';
import { LoginForm } from '@/components/AuthForms';

export const metadata = { title: 'Login — LOKOAX' };

export default function LoginPage(){
  return <AuthLayout title="Build learning habits with confidence." subtitle="A focused workspace for lessons, practice, progress and membership access."><LoginForm /></AuthLayout>;
}
