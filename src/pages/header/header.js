import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import img from '../../assets/Bewerbungsfoto.jpg'
import Image from 'next/image';

const Header = () => {
    return (
     <div className='flex items-center bg-slate-100 p-5'>
        <div className='w-[80%]'>
        <div className='mx-20 mt-20'>      
       
      <div className='flex items-center justify-center gap-10'>
      <div className='w-[70%] text-end'>
         <h1 className='text-[50px] leading-none'>MY NAME IS <br /> <span className='font-bold '>FAISAL AHMED...</span></h1>
            <h3 className=' font-semibold text-xl'>Frontend Developer based in Berlin</h3>
            <p className='text-base font-semibold'>Crafting outstanding and user-friendly digital
experiences for the web is my passion.</p>
<p className='mt-2'>I am a front-end web developer. I love using my creativity to make something new. That's why I enjoy working with React.js, Tailwind, JavaScript, and other web technologies. Over the last year, I have gathered knowledge in various parts of web development on my own. I have also attended two web developer bootcamps to further extend my knowledge in the web technology field. My ultimate goal is to become an awesome full-stack web developer who can create beautiful UIs and also handle the back-end smoothly. 🚀
</p>

           
         </div>
   
        
 
      <div className='w-[30%]'>
      <Image 
            src={img}
            alt='Header Foto'
           />
      </div>
      </div>


       </div>
        </div>
        <div className='w-20%'>
       <a href="https://www.linkedin.com/in/faisal-ahmed-mashum/" target='_blank'><LinkedInIcon/></a> <br />
        <br />
        <a href="https://github.com/devmashum" target='_blank'><GitHubIcon/></a>
        
        <br />
        <br />
        <a href="mailto:dev.mashum@gmail.com">
                              <EmailIcon/>
                    </a>
        

        </div>
     </div>
     


      
    );
};

export default Header;