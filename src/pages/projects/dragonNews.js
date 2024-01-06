import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import imgNews from "../../assets/dragonNews.png";

const DragonNews = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="">
          <div className="card bg-base-100 shadow-xl rounded-3xl">
            <div className="flex justify-between">
              <h2 className="hidden lg:block">
                <span className="font-bold ">Projektname:</span> Dragon News
              </h2>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/devmashum/the-dragon-news"
                  target="_blank"
                >
                  <div className="flex gap-1 justify-center items-center">
                    <h2 className="font-bold">Client</h2>
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="https://github.com/devmashum/the-dragon-news-server"
                  target="_blank"
                >
                  <div className="flex gap-1 justify-center items-center">
                    <h2 className="font-bold">Server </h2>
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="https://the-dragon-news-alpha.vercel.app/"
                  target="_blank"
                >
                  <div className="flex gap-1 justify-center items-center">
                    <h2 className="font-bold">Live </h2>
                    <FaExternalLinkAlt />
                  </div>
                </Link>
              </div>
            </div>
            <Link
              href="https://the-dragon-news-alpha.vercel.app/"
              target="_blank"
            >
              <figure>
                <Image
                  className="w-full mx-auto lg:h-[350px] mt-5"
                  src={imgNews}
                  alt="Apex"
                  width={800}
                />
              </figure>
            </Link>
            <div className="lg:p-10 p-3 grid grid-cols-3 lg:grid-cols-4 gap-5 text-center">
              <h2 className="border border-xl border-black">JavaScript</h2>
              <h2 className="border border-xl border-black">Next.js</h2>
              <h2 className="border border-xl border-black">DaisyUi</h2>
              <h2 className="border border-xl border-black">MongoDB</h2>
            </div>
            <div className="w-9/12 mx-auto text-center">
              <Link href="/DragonNews" target="_blank">
                {" "}
                <button className="lg:px-20 px-2 py-2 btn bg-[#d9d9d9]  lg:text-xl rounded-xl mt-5 lg:mb-2">
                  Projektdetails
                </button>
              </Link>
            </div>
            <br />
            <br />
          </div>
        </div>
        {/* <div className='lg:w-[50%] mt-5 lg:mt-0 lg:ml-10'>
      <h2 className='block lg:hidden'>
              <span className='font-bold '>Project Name:</span> Dragon News
            </h2>
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
       
      </div> */}
      </div>
    </div>
  );
};

export default DragonNews;
