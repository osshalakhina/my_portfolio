import React from "react";

import Masa from "../assets/diploms/MASA.jpg";
import Certificate_1 from "../assets/diploms/Certificate_1.jpg";
import Certificate_2 from "../assets/diploms/Certificate_2.jpg";

const About = () => {
  const certificate = [
    {
      id: 1,
      src: Masa,
    },
    {
      id: 2,
      src: Certificate_1,
      link: "https://www.udemy.com/certificate/UC-b7f1828e-91e2-447e-a14d-dd2e014034d0/",
    },
    {
      id: 3,
      src: Certificate_2,
      link: "https://www.udemy.com/certificate/UC-a81689a5-9479-4180-af50-ccca0aa8a938/",
    },
  ];

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I am successfully completed a year course in WEB programming at
          MASA-Tlalim 2019-2020 (Israel), seven months learned "Web-programming"
          on Yandex Practicum platform (2021), finished few courses on "Udemy"
          (2021-2022), have experience in illustration and web, graphic design
        </p>
        <div className="pt-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20">
            {certificate.map(({ id, src, link }) => (
              <div
                key={id}
                className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
              >
                <a href={link}>
                  <img className="rounded-lg" src={src} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
