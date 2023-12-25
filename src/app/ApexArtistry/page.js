import Image from 'next/image';
import React from 'react';

import Apex from '../../assets/apexArtistry.png'

const ApexArtistry = () => {
    return (
        <div>
            <Image className='w-full  lg:h-[600px]' src={Apex} width={800} alt='Apex'/>

            <div className='p-5'>
          <div className='flex gap-3'>
            <div><h3 className='text-slate-900 text-xl lg:text-2xl'>Project Title: </h3></div>
            <div><h2 className="text-slate-900 font-bold text-xl lg:text-2xl">
            Apex Artistry</h2>
            </div>
            </div>
            <h3 className="text-slate-900 text-base font-bold mt-3">Project Details:</h3>
            <h4 className="text-slate-900 my-3  text-justify text-base">
          
<p>ApexArtistry is a dynamic, responsive platform enabling users to support artists through donations. Users aspiring to be creators can request admin approval to submit artworks for contests. Winners receive prizes, while non-winners receive donated amounts after platform charges.</p> <br />

<b>Functionality:</b> <br />
To test the functionality, please log in with the following credentials: <br />
- As a User: user@gmail.com <br />
- As a Creator: creator@gmail.com <br/>
- As an Admin: admin@gmail.com <br/>
Password (same for all users): 123456
<br />
<br />
<b>Dashboard:</b> I have created a dashboard for three types of users. <br/>
<br />
1. Normal User: A normal user can select an art and donate using the Card Payment method. In the normal user dashboard, users can check their profile, cart, donated contests, and payment history. <br/>
<br />
2. Creator: A creator can add art by clicking Add Contest. They can check their submitted contests and verify whether they won a contest or not. If they also donated for an art, they can check their payment history. <br/>
<br />
3. Admin: An admin can manage all users, including making a normal user a creator. If necessary, the admin can delete a user. They can also declare a creator as a winner. The admin has access to the support section, displaying all contact data.
<br /> <br />
<b>User Authentication:</b> For user registration, user login/logout system, I have utilized Firebase. <br />
<b>Security:</b> I have secured this website using Json Web Token (JWT). <br/>

<b>Payment:</b> The most popular payment method, Stripe, is implemented for the payment process. <br/>
<b>DataStore:</b> To store all data, I have used MongoDB.



 
            </h4>
            <div className="grid grid-cols-3 gap-5">
            <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JavaScript</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">React</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Tailwind</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">DaisyUi</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">MongoDb</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">Firebase</button>
              <button className="btn btn-sm px-10 hover:bg-blue-700 bg-blue-500 btn-outline text-white">JWT</button>
            </div>
          </div>
        </div>
    );
};

export default ApexArtistry;