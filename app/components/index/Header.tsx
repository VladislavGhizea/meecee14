import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 justify-items-center">
      <div className="logo-container">
        <Logo />
        <div className="brand_name-container">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              alt=""
              src={"/brand.svg"}
              width={1344}
              height={512}
              className=" w-[336px] h-[128px]"
            />
            <h2 className=" text-center mb-20 text-white text-xl font-medium font-montserrat -mt-3">
              TROVA LA TUA ANIMA GEMELLA
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
