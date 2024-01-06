import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import img from "../../assets/Bewerbungsfoto.jpg";
import html from "../../assets/icon/HTML.png";
import css from "../../assets/icon/css.png";
import JS from "../../assets/icon/JavaScript.png";
import MongoDB from "../../assets/icon/mongo.png";
import tailwind from "../../assets/icon/tailwind.png";
import fireBase from "../../assets/icon/firebase.png";

const MobileHeader = () => {
  return (
    <div className="lg:hidden block p-5 bg-slate-100">
      <div>
        <Image
          className="relative  mt-7 w-[300px] mx-auto"
          src={img}
          alt="Portfolio"
        ></Image>
        <div className="grid grid-cols-3 gap-5 ml-[138px] text-center absolute -mt-10">
          <a
            href="https://www.linkedin.com/in/faisal-ahmed-mashum/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/devmashum" target="_blank">
            <GitHubIcon />
          </a>
          <a href="mailto:dev.mashum@gmail.com">
            <EmailIcon />
          </a>
        </div>

        <div className=" flex text-center items-center justify-center mt-5">
          <Image className="mb-2 ml-2" src={html} width={40} alt="react_logo" />
          <Image className="mb-2 ml-2" src={css} width={40} alt="react_logo" />
          <Image className="mb-2 ml-2" src={JS} width={40} alt="react_logo" />
          <Image
            className="mb-2 ml-2"
            src={tailwind}
            width={40}
            alt="react_logo"
          />
          <Image
            className="mb-2 ml-2"
            src={fireBase}
            width={40}
            alt="react_logo"
          />
          <Image
            className="mb-2 ml-2"
            src={MongoDB}
            width={40}
            alt="react_logo"
          />
        </div>
        {/* <div className='lg:hidden absolute md:-mt-[360px] -mt-[360px]    md:ml-[670px]'>
        <Image className='mb-2 ml-2' src={html} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={css} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={JS} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={tailwind} width={40} alt='react_logo'/>
<Image className='mb-2 ml-2' src={fireBase} width={40} alt='react_logo'/>
<Image className='ml-2' src={MongoDB} width={40} alt='react_logo'/>
        </div> */}
      </div>
      <br />
      <div className="mt-3 text-center">
        <h3 className="text-3xl mb-5">Über mich</h3>
        {/* <h4 className='text-xl font-semibold my-2'>Frontend Developer based in Berlin</h4>
<p className=' text-base font-semibold'>Crafting outstanding and user-friendly digital experiences for the web is my passion.</p> */}
        <p className="mt-2 text-justify">
          Mein Name ist Faisal Mashum. Ich bin ein Front-End-Webentwickler. Ich
          liebe es, meine Kreativität einzusetzen, um etwas Neues zu schaffen.
          Deshalb arbeite ich gerne mit HTML, CSS, JavaScript, React, Next.js,
          Tailwind und MongoDB. Im Laufe der letzten Jahre habe ich eigenständig
          Wissen in verschiedenen Bereichen der Webentwicklung gesammelt. Zudem
          habe ich an zwei Webentwickler-Bootcamps teilgenommen, um mein Wissen
          im Bereich der Webtechnologie weiter auszubauen und mich weiter zu
          entwickeln. Mein ultimatives Ziel ist es schöne benutzerfreundliche
          Webseiten zu erstellen. 🚀
        </p>
      </div>
    </div>
  );
};

export default MobileHeader;
