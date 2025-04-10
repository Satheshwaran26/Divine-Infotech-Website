"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["AI Tools", "Solutions", "Automation", "Innovation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative bg-[#080808]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <div className="container mx-auto text-center pt-[120px] px-4 relative z-10">
          <h3 className="mb-4 text-gray-200 font-extralight text-sm border border-[#343434] px-4 py-2 rounded-full inline-block">
            ✨ Explore the Capital Product
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-200 w-11/12 sm:w-10/12 mb-6 mx-auto text-center">
            Next-Generation
            <span className="text-orange-400 font-light ml-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            for Smarter Business
          </h1>
          <p className="sm:text-md text-[#767676] font-light mb-2 w-11/12 sm:w-9/12 mx-auto">
            Transform the way you do business with our <br />
            AI-powered SaaS platform. Our cutting-edge technology.
          </p>

          {/* Product Selector and Go Button */}
          <div className="flex flex-wrap justify-center gap-4 py-6">
            {/* Get Started Button */}
            <button
              onClick={() => alert("Get Started clicked!")}
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 px-4 py-2 text-base sm:text-lg flex items-center font-extralight transition-colors border-[#212020] border rounded-lg"
            >
              Get Started
            </button>

            {/* View More Button */}
            <button
              onClick={() => alert("View More clicked!")}
              className="font-extralight border-[#212020] border text-gray-200 px-6 py-2 text-base sm:text-lg rounded-lg flex items-center transition-colors"
            >
              View More
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 text-[#767676] text-sm sm:text-base mb-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-orange-500 " />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-orange-500" />
              14-days free trial
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-orange-500" />
              Generate in seconds using AI
            </div>
          </div>
        </div>

        {/* Floating 3D Images */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Floating 3D cube"
            height={50}
            src="/images/ss.png"
            width={80}
            className="absolute animate-float top-10 sm:top-20 left-10 sm:left-40"
          />
          <Image
            alt="Floating 3D oval"
            height={70}
            src="/images/sc.png"
            width={70}
            className="absolute animate-rotate top-5 sm:top-10 right-10 sm:right-40"
          />
          <Image
            alt="Floating 3D sphere"
            height={50}
            src="/images/scc.png"
            width={50}
            className="absolute animate-float bottom-2 sm:bottom-5 left-10 sm:left-60"
          />
          <Image
            alt="Floating 3D cube"
            height={70}
            src="/images/ss.png"
            width={70}
            className="absolute animate-float bottom-2 sm:bottom-5 right-10 sm:right-60"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;