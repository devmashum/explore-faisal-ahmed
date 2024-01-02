import Image from 'next/image';
import React from 'react';
import Car from '../../assets/car-doctor.png'

const CarDoctor = () => {
    return (
        <div>
      <div>
            <Image className='w-full lg:h-[600px]' src={Car} width={700} alt='Car'/>

            <div className='p-5'>
          <div className='flex gap-3'>
            <div><h3 className=' text-slate-900 text-xl lg:text-2xl'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 text-xl lg:text-2xl font-bold ">
            Car Doctor</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3 text-justify text-base">
            Car Doctor is an online platform providing car repair services to customers. Customers can book a service by specifying the service name and preferred date. In the shop section, customers can explore and purchase available products. Additionally, a contact page is included to facilitate easy communication with the company. <br />
<br/>
<b>Functionality:</b>
<br />
<b>User Authentication: </b> <br />
Firebase is employed for user registration, login/logout functionality. <br />
<b>Security:</b>  <br />The website is secured using Json Web Token (JWT) to ensure a safe user experience. <br />
<b>DataStore:</b> <br />MongoDB is utilized to store all relevant data, ensuring efficient data management.
            </h4>
            <div className='lg:p-10 grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 text-center'>
            
                      <h2 className='border border-xl border-black'>JavaScript</h2>
            <h2 className='border border-xl border-black'>React</h2>
            <h2 className='border border-xl border-black'>DaisyUi</h2>
            <h2 className='border border-xl border-black'>MongoDB</h2>
            <h2 className='border border-xl border-black'>Firebase</h2>
            <h2 className='border border-xl border-black'>JWT</h2>
            
          </div>
          </div>
        </div>
        </div>
    );
};

export default CarDoctor;