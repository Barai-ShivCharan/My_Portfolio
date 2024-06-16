import React from "react";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.jpg";
import mongooDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import html from "../../public/html.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongooDB,
      name: "MongooDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Nodejs",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 6,
      logo: css,
      name: "CSS",
    },
    {
      id: 7,
      logo: html,
      name: "Html",
    },
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
          <span className="underline font-semibold">Featured Projects</span>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                  alt=""
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <div>
                    {/* In below paragrah we can write  paragraph which display on portfolio picture discribe */}
                    <p className="px-2 text-grey-700"></p>
                  </div>
                  <div className="px-6 py-4 space-x-3 justify-around">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Video
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
