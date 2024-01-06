import Footer from "@/pages/footer/footer";
import Hero from "@/pages/header/hero";

import MobileHeader from "@/pages/header/mobileHeader";
import OnePage from "@/pages/onePage/onePage";
import Projects from "@/pages/projects/projects";

const HomePage = () => {
  return (
    <div>
      <div className="lg:hidden block">
        <Hero></Hero>
      </div>
      <OnePage></OnePage>

      <div className="lg:hidden block">
        <MobileHeader></MobileHeader>
      </div>

      <div className="lg:hidden block">
        <Projects></Projects>
      </div>
      <div className="lg:hidden block">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
