"use client";
import React from "react";
import { motion } from "motion/react";

interface ButtonSmallProps {
  children: React.ReactNode;
  onClick?: () => void;
  classname?: string;
}

const ButtonSmall: React.FC<ButtonSmallProps> = ({
  children,
  onClick,
  classname,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={
        " h-16 w-16 bg-giallo drop-shadow-md rounded-2xl mb-9 flex items-center justify-center text-3xl font-medium " +
        classname
      }
    >
      {children}
    </motion.div>
  );
};

export default ButtonSmall;
