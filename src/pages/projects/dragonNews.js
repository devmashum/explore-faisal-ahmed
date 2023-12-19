import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img from '../../assets/dragonNews.png';

const DragonNews = () => {
    return (
        <div>
              <div className='lg:flex p-10'>
      <div className='lg:w-[50%]'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='flex justify-between'>
            <h2>
              <span className='font-bold'>Project Name:</span> The Dragon News
            </h2>
            <div className='flex gap-3'>
              <Link href="https://github.com/devmashum/the-dragon-news" target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Client</h2>
                  <FaGithub />
                </div>
              </Link>
              <Link href="https://github.com/devmashum/the-dragon-news-server" target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Server </h2>
                  <FaGithub />
                </div>
              </Link>
              <Link href="https://the-dragon-news-alpha.vercel.app/" target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Live </h2>
                  <FaExternalLinkAlt />
                </div>
              </Link>
            </div>
          </div>
          <Link href="https://the-dragon-news-alpha.vercel.app/" target='_blank'>
            <figure>
              <Image src={img} alt='Apex' width={800} />
            </figure>
          </Link>
          <div className='lg:p-10 p-3 grid grid-cols-3 lg:grid-cols-5 gap-5 text-center'>
           
            <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black px-3'>React</h2>
            <h2 className='border border-xl border-black px-3'>DaisyUi</h2>
            <h2 className='border border-xl border-black px-3'>MongoDB</h2>
            <h2 className='border border-xl border-black px-3'>Firebase</h2>
            <h2 className='border border-xl border-black px-3'>JWT</h2>
          </div>
        </div>
      </div>
      <div className='lg:w-[50%] mt-5 lg:mt-0 lg:ml-10'>
        <h3 className='font-extrabold'>Project Details: </h3>
        <h4 className="text-slate-900 my-3  text-justify text-base">
              I am currently in the process of learning Next.js and Material-UI, and as part of this exploration,
              I have developed an online newspaper portal using Next.js and Material-UI, with MongoDB serving as the database.  <br /> <br />

              <b>Key Features:</b> <br />
              <b>Next.js Framework:</b> <br /> Leveraging the capabilities of Next.js for building a robust and performant React-based web application. <br />
              <b>Material-UI Integration:</b> <br /> Implementing a sleek and responsive user interface with the help of Material-UI components, ensuring a modern and intuitive design. <br />
              <b>MongoDB Database:</b> <br /> Utilizing MongoDB to store and manage the data for the online newspaper, providing scalability and flexibility. <br />

              <b>Functionalities:</b> <br />
              <b>Article Display:</b> <br /> Presenting news articles with features such as headlines, images, and summaries. <br />
              <b>Category Navigation:</b> <br /> Organizing news articles into categories for easy navigation and user convenience. <br /></h4>
        <button className='btn btn-primary bg-[#242323] text-white p-2'>Show Details</button>
      </div>
    </div>
        </div>
    );
};

export default DragonNews;