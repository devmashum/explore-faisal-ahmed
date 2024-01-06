import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import imgKioko from "../../assets/Kioko Sushi GmbH.png";
import Link from "next/link";

const Kioko = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="">
          <div className="card bg-base-100 shadow-xl rounded-3xl">
            <div className="flex justify-between">
              <h2>
                <span className="font-bold">Projektname:</span> Kioko Sushi
              </h2>
              <div className="flex gap-3">
                <a href="https://kioko-sushi.de/" target="_blank">
                  <div className="flex gap-1 justify-center items-center">
                    <h2 className="font-bold">Live </h2>
                    <FaExternalLinkAlt />
                  </div>
                </a>
              </div>
            </div>
            <a href="https://kioko-sushi.de/" target="_blank">
              <figure>
                <Image
                  className="mx-auto w-full lg:h-[350px] mt-5"
                  src={imgKioko}
                  alt="Kioko Sushi GmbH"
                  width={800}
                />
              </figure>
            </a>
            <div className="lg:p-10 p-3 grid grid-cols-3 gap-3 lg:grid-cols-3 text-center mx-auto">
              <h2 className="border border-xl border-black text-xs lg:text-base">
                HTML
              </h2>
              <h2 className="border border-xl border-black text-xs lg:text-base">
                CSS
              </h2>
              <h2 className="border border-xl border-black text-xs lg:text-base">
                WORDPRESS
              </h2>
            </div>
            <div className="w-9/12 mx-auto text-center">
              <Link href="/Kioko" target="_blank">
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
        {/* <div className='lg:w-[50%] mt-5 lg:mt-0 lg:mr-10'>
          <h3 className='font-extrabold'>Project Details: </h3>
          <h4 className="text-slate-900 my-3 text-justify text-base">
            <b>Dine-In Reservations:</b> <br />
            Customers can effortlessly reserve a table through this user-friendly website. They simply need to select their preferred date and time, and specify the number of guests they will be bringing.
            <br /> <br />
            <b>Online Ordering:</b> <br />
            For added convenience, customers can order their food for home delivery or takeaway directly through the website. The online ordering feature enables customers to explore an extensive menu, place an order, and choose whether they want their meal delivered or prepared for takeaway.
          </h4>
        </div> */}
      </div>
    </div>
  );
};

export default Kioko;
