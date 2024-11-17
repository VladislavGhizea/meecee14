"use client";
import React from "react";
import { motion } from "motion/react";

interface InputButtonProps {
  text: string;
  type?: string;
  onClick?: () => void;
}

const InputButton: React.FC<InputButtonProps> = ({ text, onClick, type }) => {
  return (
    <motion.input
      type={type ? type : "text"}
      placeholder={text}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className=" placeholder-nero h-16 w-52 bg-giallo drop-shadow-md rounded-2xl mb-9 flex items-center justify-center placeholder:text-3xl text-3xl placeholder:font-medium font-medium placeholder:text-center text-center"
    ></motion.input>
  );
};

export default InputButton;
