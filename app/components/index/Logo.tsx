import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [-35, 0, 35, 0, -35] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "backInOut",
        stiffness: 200,
      }}
      className="flex justify-center"
    >
      <div className=" w-32 h-32 rounded-full bg-nero30 grid justify-center content-center self-end">
        <Image alt="" src={"/logo.png"} width={104} height={104} />
      </div>
    </motion.div>
  );
};

export default Logo;
