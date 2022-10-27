import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
      title: "Designs for Datawiz.io",
      href: "https://www.slideshare.net/VolodymyrNepiuk/datawizio-our-mi",
    },
    {
      id: 2,
      src: two,
      title: "Designs for KartoonArt",
      href: "http://happyfarm.com.ua/bi/residents/kartoonart/",
    },
    {
      id: 3,
      src: three,
      title: "Application mockups",
      href: "https://youtube.com/shorts/TGM0LZnRbLc?feature=share",
    },
    {
      id: 4,
      src: four,
      title: "Designs for Promax Group",
      href: "http://www.promax.group/en",
    },
    {
      id: 5,
      src: five,
      title: "Designs for :Printl",
      href: "https://www.youtube.com/watch?v=Hik8Czp_CZ8",
    },
    {
      id: 6,
      src: six,
      title: "Site for dogs kennel (Elementor)",
      href: "https://musograzioso.com/?page_id=150",
    },
  ];

  return (
    <div
      name="design"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Design
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <Zoom>
                <img
                  src={src}
                  alt="my work"
                  className="rounded-md duration-200 hover:scale-105"
                />
              </Zoom>
              <div className="flex items-center justify-center">
                <form action={href}>
                  <button className="px-2 py-3 m-2 duration-200 hover:scale-105">
                    <p>{title}</p>
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

export default Design;
