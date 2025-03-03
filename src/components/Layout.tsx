import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <div className={`app_layout ${geistSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
