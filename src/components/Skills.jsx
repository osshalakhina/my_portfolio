import React from "react";

import html from "../assets/exp/html.png";
import css from "../assets/exp/css.png";
import javascript from "../assets/exp/javascript.png";
import reactImage from "../assets/exp/react.png";
import github from "../assets/exp/github.png";
import tailwind from "../assets/exp/tailwind.png";
import illustrator from "../assets/exp/illustrator.png";
import photoshop from "../assets/exp/photoshop.png";
import figma from "../assets/exp/figma.png";
import bootstrap from "../assets/exp/bootstrap.png";
import uiux from "../assets/exp/uiux.png";
import elementor from "../assets/exp/elementor.png";
import xd from "../assets/exp/xd.png";
import flash from "../assets/exp/flash.png";
import nodejs from "../assets/exp/nodejs.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: illustrator,
      title: "Adobe Illustrator",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: photoshop,
      title: "Adobe Photoshop",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-green-300",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
