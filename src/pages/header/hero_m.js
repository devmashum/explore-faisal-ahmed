import React from 'react';
import heroImg1 from '../../assets/FA.png'


const style = {
    backgroundImage: `url(${heroImg1.src})`
  };

const Hero_m = () => {
    return (
        <div>
                   <div className="hero min-h-screen lg:hidden block  relative" style={style}>
                
  <div className="hero-overlay bg-opacity-60 "></div>
  {/* <div><h3 className="lg:text-7xl text-4xl font-display text-center pt-60 px-5 lg:pt-80 mb-3 text-white  font-bold">{'>>'} Faisal Ahmed {'<<'}</h3></div>
 <h3 className='text-center text-2xl lg:text-3xl text-white font-bold'>Junior React Developer</h3>
 <h3 className='text-center text-white text-xl '>Die Gestaltung herausragender und benutzerfreundlicher digitaler Erlebnisse im Web ist meine Leidenschaft.</h3> */}
</div>
        </div>
   
    );
};

export default Hero_m;