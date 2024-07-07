import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/ui/ฺBackToTop";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
