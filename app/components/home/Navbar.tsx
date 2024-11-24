import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonNavigation from "../buttons/ButtonNavigation";

interface NavbarProps {
  handleNavigation: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleNavigation }) => {
  return (
    <div className="navbar px-5 h-16 w-[22rem] flex flex-row content-center justify-between bg-rosso70 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset] mx-auto">
      <ButtonNavigation
        classNameContainer="bg-giallo60 h-12 w-1/2 rounded-full self-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mr-3 pl-2"
        classNameText=""
        isBefore
        category="home"
        onClick={() => handleNavigation("home")}
      >
        <motion.div
          whileHover={{ rotate: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            alt=""
            src={"/paws.png"}
            width={48}
            height={48}
            className=" w-12 h-12"
          />
        </motion.div>
      </ButtonNavigation>
      <div className="h-full w-px bg-black mx-auto"></div>
      <ButtonNavigation
        onClick={() => handleNavigation("match")}
        isBefore={false}
        classNameContainer=" ml-3 h-12 w-1/2 rounded-full self-center pl-2"
        category="match"
      >
        <motion.div
          whileHover={{ rotate: -20 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            alt=""
            src={"/carrier.png"}
            width={48}
            height={48}
            className=" w-12 h-12"
          />
        </motion.div>
      </ButtonNavigation>
    </div>
  );
};

export default Navbar;
