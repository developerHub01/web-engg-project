import Footer from "../_components/Footer";
import Header from "../_components/Header";


export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
