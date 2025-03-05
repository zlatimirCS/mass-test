import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <div className={`app_layout ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
