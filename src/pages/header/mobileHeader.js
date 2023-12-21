import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import img from '../../assets/Bewerbungsfoto.jpg'
import html from '../../assets/icon/HTML.png'
import css from '../../assets/icon/css.png'
import JS from '../../assets/icon/JavaScript.png'
import MongoDB from '../../assets/icon/mongo.png'
import tailwind from '../../assets/icon/tailwind.png'
import fireBase from '../../assets/icon/firebase.png'


const MobileHeader = () => {
    return (
        <div className='lg:hidden block p-5 bg-slate-100'>
                    <div>
                    <Image className='rounded-xl relative  mt-2 ' src={img} alt='Portfolio'></Image>
            <div className='grid grid-cols-3 gap-5 ml-5 text-center absolute -mt-10'>
          <a href="https://www.linkedin.com/in/faisal-ahmed-mashum/" target='_blank'><LinkedInIcon/></a> 
        <a href="https://github.com/devmashum" target='_blank'><GitHubIcon/></a>   
        <a href="mailto:dev.mashum@gmail.com"><EmailIcon/>
                    </a>
          </div>

          

          <div className='lg:hidden absolute md:-mt-[360px] -mt-[360px]    md:ml-[670px]'>
        <Image className='mb-2 ml-2' src={html} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={css} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={JS} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={tailwind} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={fireBase} width={40} alt='react_logo'/>
<Image className='ml-2' src={MongoDB} width={40} alt='react_logo'/>
        </div>
                    </div>
     <br />
   <div className='mt-3'>
   <div className="text-5xl  font-display  ">Faisal Ahmed</div>
<h4 className='text-xl font-semibold my-2'>Frontend Developer based in Berlin</h4>
<p className=' text-base font-semibold'>Crafting outstanding and user-friendly digital experiences for the web is my passion.</p>
<p className='mt-2 text-justify'>I am a front-end web developer. I love using my creativity to make something new. That is why I enjoy working with React.js, Tailwind, JavaScript, and other web technologies. Over the last year, I have gathered knowledge in various parts of web development on my own. I have also attended two web developer bootcamps to further extend my knowledge in the web technology field. My ultimate goal is to become an awesome full-stack web developer who can create beautiful UIs and also handle the back-end smoothly. 🚀
</p>
   </div>
          
        </div>
    );
};

export default MobileHeader;