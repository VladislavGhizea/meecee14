import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MenuIcon = () => {
  return (
    <motion.div>
      <motion.div
        whileTap={{ x: 10 }}
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
