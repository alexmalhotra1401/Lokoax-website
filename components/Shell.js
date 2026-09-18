import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function Shell({ children }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
