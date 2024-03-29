import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center h-full pr-6">
          <h2 className="text-3xl sm:text-7xl font-bold text-white py-4">
            Hi! I'm <br />
            Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am creative and always eager to learn, specialize and develop
            myself as much as possible. When I am facing a goal I will invest
            the best to achieve it.
          </p>
          <div>
            <Link
              to="programming"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Programming portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="mx-auto w-2/3 md:w-10/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
