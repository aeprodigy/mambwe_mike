import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import SecondPage from './SecondPage';
import img1 from "./img1.jpeg";
import { useState } from 'react';


//IMPORTS ARE DONE ABOVE THIS LINE


function App() {
  const [darkMode, setDarkMode]= useState(false);
   

  //return starts here
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App bg-white px-10 md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold dark:text-teal-300">
              {"<Mambwe/>"}
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl sm:text-xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  target="_blank"
                  href="https://www.linkedin.com/in/mike-mambwe/"
                >
                  Resume'
                </a>
              </li>
            </ul>
          </nav>
          {/**THE NAVBAR ENDS RIGHT HERE**/}
          {/**THE HERO STARTS HERE**/}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-teal-500 md:text-6xl">
              Mike Mambwe
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-800 dark:text-gray-200">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              I'm a Software developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I am focused on building responsive full-stack web
              applications and Mobile Applications
            </p>
          </div>
          {/**BUTTONS START HERE**/}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/MikeMambwe" target="_blank">
              <AiFillTwitterCircle className="dark:text-white" />
            </a>

            <a href="https://www.linkedin.com/in/mike-mambwe/" target="_blank">
              <AiFillLinkedin className="dark:text-white" />
            </a>

            <a href="https://github.com/aeprodigy" target="_blank">
              <AiFillGithub className="dark:text-white" />
            </a>
          </div>
          {/*ICONS END RIGHT HERE*/}
        </section>
        {/*Second page */}

        <section>
          <div className="min-h-screen">
            {/*Image starts HERE*/}
            <div className="bg-gradient-to-b from-teal-500 rounded-full w-80  h-80 overflow-hidden mx-auto ">
              {/*<Image src={mikePic} layout="fill objectFit="cover" />" */}
              <h1 className=" text-2xl text-center py-5 ">
                Image Missing here
              </h1>
            </div>
            <div>
              <h3 className="text-2xl text-center pt-8 dark:text-white">
                Services I offer
              </h3>
              <p className="leading-8  text-md text-center text-gray-500 dark:text-white">
                Since I started my development journey as Software developer, I
                have developed these
                <span className="text-teal-500 font-bold"> agencies </span>
                consulted for{" "}
                <span className="text-teal-500 font-bold">Startups </span>
                and collaborated with talented people to create digital Products
                for both business and consumer use.
              </p>
              <p className="text-md pt-8 text-center text-2xl leading-8 text-gray-500 dark:text-white">
                I offer from wide range of services, including brand design and
                Programming
              </p>
            </div>

            {/*Image cars more of them */}
            <div className="lg:flex gap-10 ">
              {/*Card one */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                {/* first image <Image src={design} width={100} height={100} */}
                <h3 className="text-2xl text-bold pt-8 pb-2 ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-500 font-bold">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1">Adobe Photoshop</p>
                <p className="text-gray-800 py-1">Adobe Illustrator</p>
                <p className="text-gray-800 py-1">Adobe Xd</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              {/*Card TWO */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                {/* first image <Image src={design} width={100} height={100} */}
                <h3 className="text-2xl text-bold pt-8 pb-2 ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-500 font-bold">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1">Adobe Photoshop</p>
                <p className="text-gray-800 py-1">Adobe Illustrator</p>
                <p className="text-gray-800 py-1">Adobe Xd</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              {/*Card THREE */}
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                {/* first image <Image src={design} width={100} height={100} */}
                <h3 className="text-2xl text-bold pt-8 pb-2 ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-500 font-bold">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1">Adobe Photoshop</p>
                <p className="text-gray-800 py-1">Adobe Illustrator</p>
                <p className="text-gray-800 py-1">Adobe Xd</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            </div>
          </div>
        </section>
        {/*We set the DARK AND LIGHT MODES */}
        {/*Portfolio Section */}
        <section>
          <div className="h-screen dark:text-white">
            <h3 className="text-2xl py-10">Portfolio</h3>
            <p className="leading-8 text-md text-gray-500 dark:text-white">
              Since I started my development journey as Software developer, I
              have developed these
              <span className="text-red-500 font-bold"> agencies </span>
              consulted for{" "}
              <span className="text-red-500 font-bold">Startups </span>
              and collaborated with talented people to create digital Products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from wide range of services, including brand design and
              Programming
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/2 flex-1 bg-emerald-300">
              <img
                src={img1}
                alt=""
                width={"100%"}
                className=" object-cover h-100 w-100"
                height={"100%"}
                layout="responsive"
              />
            </div>

            <div className="basis-1/2 flex-1 bg-emerald-300">
              <img
                src={img1}
                alt=""
                width={"100%"}
                className=" object-cover h-100 w-100"
                height={"100%"}
                layout="responsive"
              />
            </div>

            <div className="basis-1/2 flex-1 bg-emerald-300">
              <img
                src={img1}
                alt=""
                width={"100%"}
                className=" object-cover h-100 w-100"
                height={"100%"}
                layout="responsive"
              />
            </div>

            <div className="basis-1/2 flex-1 bg-emerald-300 ">
              <img
                src={img1}
                alt=""
                width={"100%"}
                className=" object-cover h-100 w-100"
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
