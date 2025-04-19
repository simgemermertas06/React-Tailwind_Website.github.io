import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

function About() {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl uppercase"
        >
          welcome to
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold"
        >
          prime construction
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-3xl italic text-gray-50 mt-[60px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, quam.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque
          reprehenderit voluptate distinctio exercitationem magni, unde,
          similique libero accusamus debitis impedit quo natus hic placeat
          necessitatibus cumque officia vel itaque iusto quasi dolore expedita
          asperiores! Amet animi, libero ut doloremque eum suscipit rem optio
          debitis sapiente excepturi aliquid necessitatibus repudiandae,
          mollitia commodi aspernatur ea atque magni sunt quis. Cupiditate rem
          culpa modi ducimus. Fugit quae, laudantium soluta hic possimus
          similique temporibus minima molestiae veritatis tenetur corporis
          laboriosam cumque quos, odio magnam amet sed ipsum quo ipsa ratione a
          distinctio nisi! Labore illo omnis unde iure nemo quia obcaecati
          magnam ut!
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black transition-colors duration-300 ease-in-out"
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
}

export default About;
