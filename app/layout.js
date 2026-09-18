import './globals.css';

export const metadata = {
  title: 'LOKOAX — Learn Smarter',
  description: 'Structured learning, purposeful practice and progress tracking for students.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
