import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import img from '../../assets/Kioko Sushi GmbH.png';

const Kioko = () => {
  return (
    <div>
      <div className='lg:flex flex-row-reverse p-10'>
        <div className='lg:w-[50%]'>
          <div className='card bg-base-100 shadow-xl'>
            <div className='flex justify-between'>
              <h2>
                <span className='font-bold'>Project Name:</span> Kioko Sushi
              </h2>
              <div className='flex gap-3'>
                <a href="https://kioko-sushi.de/" target='_blank'>
                  <div className='flex gap-1 justify-center items-center'>
                    <h2 className='font-bold'>Live </h2>
                    <FaExternalLinkAlt />
                  </div>
                </a>
              </div>
            </div>
            <a href="https://kioko-sushi.de/" target='_blank'>
              <figure>
                <Image src={img} alt='Kioko Sushi GmbH' width={800} />
              </figure>
            </a>
            <div className='lg:p-10 p-3 grid grid-cols-3 gap-3 lg:grid-cols-5 text-center'>
              <h2 className='border border-xl border-black'>HTML</h2>
              <h2 className='border border-xl border-black'>CSS</h2>
              <h2 className='border border-xl border-black'>WORDPRESS</h2>
                            
              </div>
          </div>
        </div>
        <div className='lg:w-[50%] mt-5 lg:mt-0 lg:mr-10'>
          <h3 className='font-extrabold'>Project Details: </h3>
          <h4 className="text-slate-900 my-3 text-justify text-base">
            <b>Dine-In Reservations:</b> <br />
            Customers can effortlessly reserve a table through this user-friendly website. They simply need to select their preferred date and time, and specify the number of guests they will be bringing.
            <br /> <br />
            <b>Online Ordering:</b> <br />
            For added convenience, customers can order their food for home delivery or takeaway directly through the website. The online ordering feature enables customers to explore an extensive menu, place an order, and choose whether they want their meal delivered or prepared for takeaway.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Kioko;
