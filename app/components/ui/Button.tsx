"use client";
import React from "react";
import { motion } from "motion/react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className=" h-16 w-52 bg-giallo drop-shadow-md rounded-2xl mb-9 flex items-center justify-center text-3xl font-medium"
    >
      {text}
    </motion.div>
  );
};

export default Button;
