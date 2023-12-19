import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img from '../../assets/apexArtistry.png';

const ApexArtistry = () => {
  return (
    <div className='lg:flex p-10'>
      <div className='lg:w-[50%]'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='flex justify-between'>
            <h2>
              <span className='font-bold'>Project Name:</span> Apex Artistry
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
              <Image src={img} alt='Apex' width={800} />
            </figure>
          </Link>
          <div className='lg:p-10 p-3 grid grid-cols-3 lg:grid-cols-5 gap-5 text-center'>
            <h2 className='border border-xl border-black px-3'>HTML</h2>
            <h2 className='border border-xl border-black px-3'>CSS</h2>
            <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black px-3'>React</h2>
            <h2 className='border border-xl border-black px-3'>DaisyUi</h2>
            <h2 className='border border-xl border-black px-3'>MongoDB</h2>
            <h2 className='border border-xl border-black px-3'>Firebase</h2>
            <h2 className='border border-xl border-black px-3'>JWT</h2>
            <h2 className='border border-xl border-black px-3'>Stripe</h2>
          </div>
        </div>
      </div>
      <div className='lg:w-[50%] mt-5 lg:mt-0 lg:ml-10'>
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
        <b>Dashboard:</b> I have created a dashboard for three types of users. <br />
        <br />
        1. Normal User: A normal user can select an art and donate using the Card Payment method.
        In the normal user dashboard, users can check their profile, cart, donated contests, and payment history.
        <br />
        <br />
        <button className='btn btn-primary bg-[#242323] text-white p-2'>Show Details</button>
      </div>
    </div>
  );
};

export default ApexArtistry;
