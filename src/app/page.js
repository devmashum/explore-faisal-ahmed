import About from '@/pages/about';
import Header from '@/pages/header/header';
import MobileHeader from '@/pages/header/mobileHeader';
import TechStack from '@/pages/tech/tech';


const HomePage = () => {
  return (
    <div>
    <div className='hidden lg:block'><Header></Header></div>
     <MobileHeader></MobileHeader>
     <TechStack></TechStack>
   

    </div>
  );
};

export default HomePage;