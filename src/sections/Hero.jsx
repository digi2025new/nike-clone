import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* LEFT SIDE */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-6 pt-28 text-center xl:text-left"
      >
        <motion.p
          variants={textVariant}
          className="text-xl font-montserrat text-coral-red dark:text-red-400"
        >
          Our Summer Collection
        </motion.p>

        <motion.h1
          variants={textVariant}
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span className="xl:bg-white dark:xl:bg-slate-900 xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red dark:text-red-400 inline-block mt-3">
            Nike
          </span>{" "}
          Shoes
        </motion.h1>

        <motion.p
          variants={textVariant}
          className="font-montserrat text-slate-gray dark:text-gray-300 text-lg leading-8 mt-6 mb-14 sm:max-w-sm mx-auto xl:mx-0"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your
          active life.
        </motion.p>

        <motion.div variants={textVariant} className="mx-auto xl:mx-0">
          <Button label="Shop Now" iconURL={arrowRight} />
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={containerVariant}
          className="flex justify-center xl:justify-start items-start flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat) => (
            <motion.div
              key={stat.label}
              variants={textVariant}
            >
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={imageVariant}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary dark:bg-slate-800 bg-hero bg-cover bg-center"
      >
        {/* MAIN SHOE */}
        <motion.img
          src={bigShoeImg}
          alt="shoe collection"
          className="object-contain relative z-10 w-[280px] sm:w-[380px] md:w-[480px] xl:w-[610px]"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* THUMBNAILS */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] left-1/2 max-sm:px-6 -translate-x-1/2 sm:translate-x-0">
          {shoes.map((shoe) => (
            <motion.div
              key={shoe}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
