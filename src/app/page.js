import About from '@/pages/about';
import Header from '@/pages/header/header';
import MobileHeader from '@/pages/header/mobileHeader';
import Projects from '@/pages/projects/projects';
import TechStack from '@/pages/tech/tech';


const HomePage = () => {
  return (
    <div>
    <div className='hidden lg:block'><Header></Header></div>
     <MobileHeader></MobileHeader>
     <TechStack></TechStack>
     <Projects></Projects>
   

    </div>
  );
};

export default HomePage;