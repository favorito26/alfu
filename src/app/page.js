'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="flex flex-col items-center mx-auto my-80 relative">
      {!clicked ? (
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleClick}
        >
          <div className="flex flex-row justify-center items-center">
            <p className="text-lg">click me alefiyah</p>
            <img src="emoji.gif" alt="" className="h-8 my-auto mx-2" />
          </div>
        </button>
      ) : (
        <>
          {/* Sprinkle hearts */}
          <div className='heartContainer'>
            {Array(20).fill(0).map((_, index) => (
              <div key={index} className='heart'>💖</div>
            ))}
          </div>

          {/* Display message */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-semibold text-purple-700 mt-8"
          >
            You are the prettiest <span className="text-3xl">😊</span>
          </motion.p>
        </>
      )}
    </div>
  );
}
