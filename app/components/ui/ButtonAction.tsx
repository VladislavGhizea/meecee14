"use client";
import React from "react";
import { motion } from "motion/react";
interface ButtonActionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonAction: React.FC<ButtonActionProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={` rounded-full shadow-[0px_0px_7px_4px_rgba(0,0,0,0.25)_inset] flex justify-center content-center border-verde ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default ButtonAction;
