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
         <h1 className='text-[50px] leading-none'>Über mich</h1>
            
<p className='mt-2'>Mein Name ist Faisal Mashum. Ich bin ein Front-End-Webentwickler. Ich liebe es, meine Kreativität einzusetzen, um etwas Neues zu schaffen. Deshalb arbeite ich gerne mit HTML, CSS, JavaScript, React, Next.js, Tailwind und MongoDB. Im Laufe der letzten Jahre habe ich eigenständig Wissen in verschiedenen Bereichen der Webentwicklung gesammelt. Zudem habe ich an zwei Webentwickler-Bootcamps teilgenommen, um mein Wissen im Bereich der Webtechnologie weiter auszubauen und mich weiter zu entwickeln. Mein ultimatives Ziel ist es schöne benutzerfreundliche Webseiten zu erstellen. 🚀
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