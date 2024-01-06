import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import img from "../../assets/Bewerbungsfoto.jpg";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import imgApex from "../../assets/apexArtistry.png";
import imgCar from "../../assets/car-doctor.png";
import imgNews from "../../assets/dragonNews.png";
import imgKioko from "../../assets/Kioko Sushi GmbH.png";
import TechStack from "../tech/tech";
import Footer from "../footer/footer";

const OnePage = () => {
  return (
    <div className="hidden lg:block">
      {/* NavBar */}
      <div className="navbar bg-base-100 p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Über mich</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Faisal Mashum</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a href="#über-mich">Über mich</a>
            </li>
            <li>
              <details>
                <summary>Aktuelle Projekte</summary>
                <ul className="p-2">
                  <li>
                    <a href="#apex">Apex Artistry</a>
                  </li>
                  <li>
                    <a href="#car">Car Doctor</a>
                  </li>
                  <li>
                    <a href="#news">The Dragon News</a>
                  </li>
                  <li>
                    <a href="#kioko">Kioko Sushi</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3">
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
        </div>
      </div>
      {/*End NavBar */}
      {/* Über-mich */}
      <div
        id="über-mich"
        className="flex flex-row-reverse  items-center bg-slate-100 p-5"
      >
        <div className="w-[90%]">
          <div className="mx-20 mt-20">
            <div className="flex items-center justify-center gap-10">
              <div className="w-[30%]">
                <Image src={img} alt="Header Foto" />
              </div>

              <div className="w-[70%]">
                <h1 className="text-[50px] leading-none">Über mich</h1>

                <p className="mt-2 text-[18px]">
                  Mein Name ist Faisal Mashum. Ich bin ein
                  <span className="font-bold"> Front-End-Webentwickler</span>.
                  Ich liebe es, meine Kreativität einzusetzen, um etwas Neues zu
                  schaffen. Deshalb arbeite ich gerne mit HTML, CSS, JavaScript,
                  React, Next.js, Tailwind und MongoDB. Im Laufe der letzten
                  Jahre habe ich eigenständig Wissen in verschiedenen Bereichen
                  der Webentwicklung gesammelt. Zudem habe ich an zwei
                  Webentwickler-Bootcamps teilgenommen, um mein Wissen im
                  Bereich der Webtechnologie weiter auszubauen und mich weiter
                  zu entwickeln. Mein ultimatives Ziel ist es schöne
                  benutzerfreundliche Webseiten zu erstellen. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-20%">
          <a
            href="https://www.linkedin.com/in/faisal-ahmed-mashum/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>{" "}
          <br />
          <br />
          <a href="https://github.com/devmashum" target="_blank">
            <GitHubIcon />
          </a>
          <br />
          <br />
          <a href="mailto:dev.mashum@gmail.com">
            <EmailIcon />
          </a>
        </div> */}
      </div>
      {/* End über-mich */}
      <TechStack></TechStack>
      {/* Projekte */}
      <div>
        <h1 className="pl-10 lg:text-4xl uppercase font-semibold my-5 lg:text-center text-2xl">
          Aktuelle Projekte:
        </h1>
        <div className="lg:grid grid-cols-2 px-10 gap-10">
          {/* Apex */}
          <div id="apex" className="mt-10">
            <div className="">
              <div className="card bg-base-100 shadow-xl rounded-3xl">
                <div className="flex justify-between">
                  <h2 className="hidden lg:block">
                    <span className="font-bold ">
                      <span>Projektname:</span>
                    </span>{" "}
                    Apex Artistry
                  </h2>

                  <div className="flex gap-3">
                    <Link
                      href="https://github.com/devmashum/ApexArtisty-Client"
                      target="_blank"
                    >
                      <div className="flex gap-1 justify-center items-center">
                        <h2 className="font-bold">Client</h2>
                        <FaGithub />
                      </div>
                    </Link>
                    <Link
                      href="https://github.com/devmashum/ApexArtisty-Server"
                      target="_blank"
                    >
                      <div className="flex gap-1 justify-center items-center">
                        <h2 className="font-bold">Server </h2>
                        <FaGithub />
                      </div>
                    </Link>
                    <Link
                      href="https://apexartistry-47b43.web.app/"
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
                  href="https://apexartistry-47b43.web.app/"
                  target="_blank"
                >
                  <figure>
                    <Image
                      className="w-full lg:h-[400px] mx-auto mt-5"
                      src={imgApex}
                      alt="Apex"
                      width={800}
                      style="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"
                    />
                  </figure>
                </Link>
                <div className="lg:p-10 grid grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-2 text-center">
                  <h2 className="border border-xl border-black text-sm lg:text-base">
                    HTML
                  </h2>
                  <h2 className="border border-xl border-black">CSS</h2>
                  <h2 className="border border-xl border-black">JavaScript</h2>
                  <h2 className="border border-xl border-black">React</h2>
                  <h2 className="border border-xl border-black">DaisyUi</h2>
                  <h2 className="border border-xl border-black">MongoDB</h2>
                  <h2 className="border border-xl border-black">Firebase</h2>
                  <h2 className="border border-xl border-black">JWT</h2>
                  <h2 className="border border-xl border-black">Stripe</h2>
                </div>
                <div className="w-9/12 mx-auto text-center">
                  <Link href="/ApexArtistry" target="_blank">
                    {" "}
                    <button className="lg:px-20 px-2 py-2 btn  bg-[#d9d9d9]  lg:text-xl rounded-xl mt-5 lg:mb-2">
                      Projektdetails
                    </button>
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          {/* End Apex */}
          {/* Car Doctor */}
          <div id="car" className="mt-10">
            <div className="">
              <div className="card bg-base-100 shadow-xl rounded-3xl">
                <div className="flex justify-between">
                  <h2 className="hidden lg:block">
                    <span className="font-bold ">Projektname:</span> Car Doctor
                  </h2>
                  <div className="flex gap-3">
                    <Link
                      href="https://github.com/devmashum/car-doctor-client"
                      target="_blank"
                    >
                      <div className="flex gap-1 justify-center items-center">
                        <h2 className="font-bold">Client</h2>
                        <FaGithub />
                      </div>
                    </Link>
                    <Link
                      href="https://github.com/devmashum/carDoctor-server"
                      target="_blank"
                    >
                      <div className="flex gap-1 justify-center items-center">
                        <h2 className="font-bold">Server </h2>
                        <FaGithub />
                      </div>
                    </Link>
                    <Link
                      href="https://car-doctor-2b00a.web.app/"
                      target="_blank"
                    >
                      <div className="flex gap-1 justify-center items-center">
                        <h2 className="font-bold">Live </h2>
                        <FaExternalLinkAlt />
                      </div>
                    </Link>
                  </div>
                </div>
                <Link href="https://car-doctor-2b00a.web.app/" target="_blank">
                  <figure>
                    <Image
                      className="w-full mx-auto lg:h-[400px] mt-5"
                      src={imgCar}
                      alt="Apex"
                      width={800}
                    />
                  </figure>
                </Link>
                <div className="lg:p-10 p-3 grid grid-cols-3 lg:grid-cols-5 gap-5 text-center">
                  <h2 className="border border-xl border-black">JavaScript</h2>
                  <h2 className="border border-xl border-black">React</h2>
                  <h2 className="border border-xl border-black">DaisyUi</h2>
                  <h2 className="border border-xl border-black">MongoDB</h2>
                  <h2 className="border border-xl border-black">Firebase</h2>
                  <h2 className="border border-xl border-black">JWT</h2>
                </div>
                <div className="w-9/12 mx-auto text-center">
                  <Link href="/CarDoctor" target="_blank">
                    {" "}
                    <button className="lg:px-20 px-2 py-2 btn  bg-[#d9d9d9]  lg:text-xl rounded-xl mt-5 lg:mb-2">
                      Projektdetails
                    </button>
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          {/*End Car Doctor */}

          {/* Dragon News */}
          <div id="news" className="mt-10">
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
                    <button className="lg:px-20 px-2 py-2 btn  bg-[#d9d9d9]  lg:text-xl rounded-xl mt-5 lg:mb-2">
                      Projektdetails
                    </button>
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          {/*End Dragon News */}
          {/* Kioko */}
          <div id="kioko" className="mt-10">
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
                    <button className="lg:px-20 px-2 py-2 btn  bg-[#d9d9d9]  lg:text-xl rounded-xl mt-5 lg:mb-2">
                      Projektdetails
                    </button>
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          {/*End Kioko  */}
        </div>
      </div>
      {/* End Projekte */}
      <div id="kontakt">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OnePage;
