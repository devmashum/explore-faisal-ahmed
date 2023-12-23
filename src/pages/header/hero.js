import React from 'react';
import heroImg from '../../assets/FA.png'
import Image from 'next/image';

// const style = {
//     backgroundImage: `url(${heroImg.src})`
//   };


const Hero = () => {
    return (
        <div>
       
          <Image className= 'w-full min-h-screen' src={heroImg} alt='hero'/>
          {/* <div className="hero min-w-full min-h-screen hidden lg:block bg-no-repeat " style={style}> */}
     
  <div className="hero-overlay bg-opacity-60 "></div>
  {/* <div><h3 className="lg:text-7xl text-4xl font-display text-center pt-60 px-5 lg:pt-60 text-white mb-5 font-extrabold ">{'>>'} Faisal Ahmed {'<<'}</h3></div>
  <h3 className='text-center text-4xl text-white py-3'>Junior React Developer</h3>
 <h3 className='text-center text-white text-3xl '>Die Gestaltung herausragender und benutzerfreundlicher digitaler Erlebnisse im Web ist meine Leidenschaft.</h3> */}
</div>
     
     
    );
};

export default Hero;