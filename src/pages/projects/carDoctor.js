import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img from '../../assets/car-doctor.png';

const CarDoctor = () => {
    return (
        <div>
         <div className='mt-10'>
      <div className=''>
        <div className='card bg-base-100 shadow-xl rounded-3xl'>
          <div className='flex justify-between'>
          <h2 className='hidden lg:block'>
              <span className='font-bold '>Project Name:</span> Car Doctor
            </h2>
            <div className='flex gap-3'>
              <Link href="https://github.com/devmashum/car-doctor-client" target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Client</h2>
                  <FaGithub />
                </div>
              </Link>
              <Link href="https://github.com/devmashum/carDoctor-server" target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Server </h2>
                  <FaGithub />
                </div>
              </Link>
              <Link href="https://car-doctor-2b00a.web.app/" target='_blank'>
                <div className='flex gap-1 justify-center items-center'>
                  <h2 className='font-bold'>Live </h2>
                  <FaExternalLinkAlt />
                </div>
              </Link>
            </div>
          </div>
          <Link href="https://car-doctor-2b00a.web.app/" target='_blank'>
            <figure>
              <Image className='w-full mx-auto lg:h-[400px] mt-5' src={img} alt='Apex' width={800} />
            </figure>
          </Link>
          <div className='lg:p-10 p-3 grid grid-cols-3 lg:grid-cols-5 gap-5 text-center'>
           
            <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black'>React</h2>
            <h2 className='border border-xl border-black'>DaisyUi</h2>
            <h2 className='border border-xl border-black'>MongoDB</h2>
            <h2 className='border border-xl border-black'>Firebase</h2>
            <h2 className='border border-xl border-black'>JWT</h2>
          </div>
          <div className='w-9/12 mx-auto text-center'>
              <button className='lg:px-20 px-2 py-2 btn btn-primary bg-slate-400 text-white lg:text-xl rounded-xl mt-5 lg:mb-2'>Project Details</button>
              </div>
              <br />
              <br />
        </div>
      </div>
      {/* <div className='lg:w-[50%] mt-5 lg:mt-0 lg:mr-10'>
      <h2 className='block lg:hidden'>
              <span className='font-bold '>Project Name:</span> Car Doctor
            </h2>
        <h3 className='font-extrabold'>Project Details: </h3>
        <h4 className="text-slate-900 my-3 text-justify text-base">
            Car Doctor is an online platform providing car repair services to customers. Customers can book a service by specifying the service name and preferred date. In the shop section, customers can explore and purchase available products. Additionally, a contact page is included to facilitate easy communication with the company. <br />
<br/>
<b>Functionality:</b>
<br />
<b>User Authentication: </b> <br />
Firebase is employed for user registration, login/logout functionality. <br />
<b>Security:</b>  <br />The website is secured using Json Web Token (JWT) to ensure a safe user experience. <br />
<b>DataStore:</b> <br />MongoDB is utilized to store all relevant data, ensuring efficient data management.</h4>
           </div> */}
    </div>
        </div>
    );
};

export default CarDoctor;