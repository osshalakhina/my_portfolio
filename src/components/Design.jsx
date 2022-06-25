import React from "react";

import one from "../assets/design/one.jpg";
import two from "../assets/design/two.jpg";
import three from "../assets/design/three.jpg";
import four from "../assets/design/four.jpg";
import five from "../assets/design/five.jpg";
import six from "../assets/design/six.jpg";

const Design = () => {
  const portfolios = [
    {
      id: 1,
      src: one,
      title: "Designs for Dtawiz.io",
    },
    {
      id: 2,
      src: two,
      title: "Designs for KartoonArt",
    },
    {
      id: 3,
      src: three,
      title: "Presentations",
    },
    {
      id: 4,
      src: four,
      title: "Package design",
    },
    {
      id: 5,
      src: five,
      title: "Coupon design for :Printle",
    },
    {
      id: 6,
      src: six,
      title: "Muso Grazioso kennel",
    },
  ];

  return (
    <div
      name="design"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Design
          </p>
          <p className="py-6">
            I made design of business cards, labels, presentations and web,
            created logos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-2 py-3 m-2 duration-200 hover:scale-105">
                  <p>{title}</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
