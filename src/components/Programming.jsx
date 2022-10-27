import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import one from "../assets/programming/one.jpg";
import two from "../assets/programming/two.jpg";
import three from "../assets/programming/three.jpg";
import four from "../assets/programming/four.jpg";
import five from "../assets/programming/five.jpg";
import six from "../assets/programming/six.jpg";

const Programming = () => {
  const portfolios = [
    {
      id: 1,
      src: one,
      demo: "https://osshalakhina.github.io/mesto/",
      code: "https://github.com/osshalakhina/mesto",
    },
    {
      id: 2,
      src: two,
      demo: "https://osshalakhina.github.io/russian-travel/",
      code: "https://github.com/osshalakhina/russian-travel",
    },
    {
      id: 3,
      src: three,
      demo: "https://osshalakhina.github.io/how-to-learn/",
      code: "https://github.com/osshalakhina/how-to-learn",
    },
    {
      id: 4,
      src: four,
      demo: "https://raw.githubusercontent.com/osshalakhina/expenses-react/main/public/Project.gif",
      code: "https://github.com/osshalakhina/expenses-react",
    },
    {
      id: 5,
      src: five,
      demo: "https://raw.githubusercontent.com/osshalakhina/challenge/main/public/preview.gif",
      code: "https://github.com/osshalakhina/challenge",
    },
    {
      id: 6,
      src: six,
      demo: "https://raw.githubusercontent.com/osshalakhina/effects-reducers-context/main/public/preview.gif",
      code: "https://github.com/osshalakhina/effects-reducers-context",
    },
  ];

  return (
    <div
      name="programming"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-full pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Programming
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, gifka }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Zoom>
                <img
                  src={src}
                  alt="my work"
                  className="rounded-md duration-200 hover:scale-105"
                />
              </Zoom>
              <div className="flex items-center justify-center">
                <form action={demo}>
                  <button className="px-6 py-2 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </form>
                <form action={code}>
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programming;
