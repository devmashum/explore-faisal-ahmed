import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import img from '../../assets/Bewerbungsfoto.jpg'

const MobileHeader = () => {
    return (
        <div className='lg:hidden block p-5 bg-slate-100'>
            <h3 className='text-3xl '>MY NAME IS <br />
<span className='font-bold'>FAISAL AHMED...</span></h3>
<h4 className='text-xl font-semibold my-2'>Frontend Developer based in Berlin</h4>
<p className=' text-base font-semibold'>Crafting outstanding and user-friendly digital experiences for the web is my passion.</p>
<p className='mt-2'>I am a front-end web developer. I love using my creativity to make something new. That's why I enjoy working with React.js, Tailwind, JavaScript, and other web technologies. Over the last year, I have gathered knowledge in various parts of web development on my own. I have also attended two web developer bootcamps to further extend my knowledge in the web technology field. My ultimate goal is to become an awesome full-stack web developer who can create beautiful UIs and also handle the back-end smoothly. 🚀
</p>

            <Image className='rounded-xl relative mt-5' src={img} alt='Portfolio'></Image>
            <div className='grid grid-cols-3 gap-5 ml-5 text-center absolute -mt-10'>
          <a href="https://www.linkedin.com/in/faisal-ahmed-mashum/" target='_blank'><LinkedInIcon/></a> 
        <a href="https://github.com/devmashum" target='_blank'><GitHubIcon/></a>   
        <a href="mailto:dev.mashum@gmail.com"><EmailIcon/>
                    </a>
          </div>
         
        
        </div>
    );
};

export default MobileHeader;