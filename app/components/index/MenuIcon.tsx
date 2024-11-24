import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MenuIcon = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Image
          src={"/menu-01.svg"}
          alt={""}
          width={32}
          height={32}
          className=" relative top-8 ml-8 justify-self-start mb-28"
        />
      </motion.div>
    </motion.div>
  );
};

export default MenuIcon;
