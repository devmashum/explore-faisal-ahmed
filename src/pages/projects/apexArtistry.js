import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img from '../../assets/apexArtistry.png';

const ApexArtistry = () => {
  return (
    <div className=''>
      <div className=''>
        <div className='card bg-base-100 shadow-xl rounded-3xl'>
          <div className='flex justify-between'>
            <h2 className='hidden lg:block'>
              <span className='font-bold '>Project Name:</span> Apex Artistry
            </h2>
            <div className='flex gap-3'>
              <Link href='https://github.com/devmashum/ApexArtisty-Client' target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Client</h2>
                  <FaGithub />
                </div>
              </Link>
              <Link href='https://github.com/devmashum/ApexArtisty-Server' target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Server </h2>
                  <FaGithub />
                </div>
              </Link>
              <Link href='https://apexartistry-47b43.web.app/' target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Live </h2>
                  <FaExternalLinkAlt />
                </div>
              </Link>
            </div>
          </div>

          
          <Link href='https://apexartistry-47b43.web.app/' target='_blank'>
            <figure>
              <Image className='w-full h-[400px] mx-auto' src={img}  alt='Apex' width={800} style="transform: translateY(0%); transition: transform 10s ease-in-out 0s;" />
            </figure>
          </Link>
          <div className='lg:p-10 grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 text-center'>
            <h2 className='border border-xl border-black text-sm lg:text-base'>HTML</h2>
            <h2 className='border border-xl border-black'>CSS</h2>
                      <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black'>React</h2>
            <h2 className='border border-xl border-black'>DaisyUi</h2>
            <h2 className='border border-xl border-black'>MongoDB</h2>
            <h2 className='border border-xl border-black'>Firebase</h2>
            <h2 className='border border-xl border-black'>JWT</h2>
            <h2 className='border border-xl border-black'>Stripe</h2>
          </div>
        </div>
      </div>
      {/* <div className='lg:w-[50%] mt-5 lg:mt-0 lg:ml-10'>
      <h2 className='lg:hidden block'>
              <span className='font-bold'>Project Name:</span> Apex Artistry
            </h2>
        <h3 className='font-extrabold'>Project Details: </h3>
        <p>
          ApexArtistry is a dynamic, responsive platform enabling users to support artists through donations.
          Users aspiring to be creators can request admin approval to submit artworks for contests.
          Winners receive prizes, while non-winners receive donated amounts after platform charges.
        </p>
        <br />
        <b>Functionality:</b> <br />
        To test the functionality, please log in with the following credentials: <br />
        - As a User: user@gmail.com <br />
        - As a Creator: creator@gmail.com <br />
        - As an Admin: admin@gmail.com <br />
        Password (same for all users): 123456
        <br />
        <br />
              
<b>User Authentication:</b> For user registration, user login/logout system, I have utilized Firebase. <br />
<b>Security:</b> I have secured this website using Json Web Token (JWT). <br/>

<b>Payment:</b> The most popular payment method, Stripe, is implemented for the payment process. <br/>
<b>DataStore:</b> To store all data, I have used MongoDB.

            <br />
        

      </div> */}
    </div>
  );
};

export default ApexArtistry;
