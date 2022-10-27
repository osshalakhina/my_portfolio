import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import one from "../assets/illustrations/one.jpg";
import two from "../assets/illustrations/two.jpg";
import three from "../assets/illustrations/three.jpg";
import four from "../assets/illustrations/four.jpg";
import five from "../assets/illustrations/five.jpg";
import six from "../assets/illustrations/six.jpg";

const Illustrations = () => {
  const portfolios = [
    {
      id: 1,
      src: one,
      title: "Go Gophers",
    },
    {
      id: 2,
      src: two,
      title: "Icons",
    },
    {
      id: 3,
      src: three,
      title: "Characters",
    },
    {
      id: 4,
      src: four,
      title: "People",
    },
    {
      id: 5,
      src: five,
      title: "Art work",
    },
    {
      id: 6,
      src: six,
      title: "Сaricatures and portraits",
    },
  ];

  return (
    <div
      name="illustrations"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen h-full pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Illustrations
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Zoom>
                <img
                  src={src}
                  alt="illustartion"
                  className="rounded-md duration-200 hover:scale-105"
                />
              </Zoom>
              <div className="flex items-center justify-center">
                <div className="px-2 py-3 m-2 duration-200 hover:scale-105">
                  <p>{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
