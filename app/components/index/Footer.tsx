import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.h4
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      className="text-white text-xl font-medium font-montserrat flex justify-center"
    >
      {" "}
      &#169; MEECEE 2024
    </motion.h4>
  );
};

export default Footer;
