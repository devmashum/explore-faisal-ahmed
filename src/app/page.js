import Footer from '@/pages/footer/footer';
import Header from '@/pages/header/header';
import Hero from '@/pages/header/hero';

import MobileHeader from '@/pages/header/mobileHeader';
import Projects from '@/pages/projects/projects';
import TechStack from '@/pages/tech/tech';


const HomePage = () => {
  return (
    <div>
    <Hero></Hero>
 
    <div className='hidden lg:block'><Header></Header></div>
     <MobileHeader></MobileHeader>
          <div className='lg:block hidden md:hidden'><TechStack></TechStack></div>
     <Projects></Projects>
     <Footer></Footer>
   

    </div>
  );
};

export default HomePage;