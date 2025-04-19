import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { div } from "framer-motion/client";

function Contact() {
  return (
    <div id="contact" className="bg-white w-full">
      <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]">
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
            contact us
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-[40px] font-bold"
          >
            reach us for any query
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-yellow-500"></div>
          <p className="text-3xl italic text-gray-600 mt-[60px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            quam.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col justify-center items-center gap-4 w-full"
          >
            <motion.input
              type="text"
              name=""
              id=""
              placeholder="Enter Fullname"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <motion.input
              type="text"
              name=""
              id=""
              placeholder="Enter E-mail"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <motion.input
              type="text"
              name=""
              id=""
              placeholder="Enter Mobile Number"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <motion.textarea
              name=""
              placeholder="Enter Your Message"
              rows="4"
              className="px-3 py-5 border-[2px] border-black text-black rounded-lg w-full"
            />
            <motion.button
              variants={zoomInVariants}
              className="bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full transition-colors duration-300 ease-in-out"
            >
              SUBMIT
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
