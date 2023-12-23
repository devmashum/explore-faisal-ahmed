import React from 'react';
import heroImg from '../../assets/FA.png'
import Image from 'next/image';

// const style = {
//     backgroundImage: `url(${heroImg.src})`
//   };


const Hero = () => {
    return (
        <div>
       
          <Image className= 'w-full lg:min-h-screen lg:-mt-40' src={heroImg} alt='hero'/>
</div>
     
     
    );
};

export default Hero;