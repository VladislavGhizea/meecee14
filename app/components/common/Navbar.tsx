"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonNavigation from "../buttons/ButtonNavigation";

interface NavbarProps {
  handleNavigation: (category: string) => void;
  page: string;
}
const containerStyles = {
  selectedLeft:
    "bg-giallo60 h-12 w-fit rounded-full self-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pl-2 pr-[inherit]",
  selectedRight:
    "bg-giallo60 h-12 w-fit rounded-full self-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pr-2 pl-[inherit]",
  defaultLeft: "h-12 w-fit rounded-full self-center pl-2 pr-[inherit]",
  defaultRight: "h-12 w-fit rounded-full self-center pr-2 pl-[inherit]",
};
const Navbar: React.FC<NavbarProps> = ({ handleNavigation, page }) => {
  return (
    <div className="navbar px-5 h-16 w-[22rem] flex flex-row content-center justify-between bg-rosso70 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset] mx-auto">
      <ButtonNavigation
        classNameContainer={
          containerStyles[page === "home" ? "selectedLeft" : "defaultLeft"]
        }
        isTextAfter
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
      <div className="h-3/4 w-px bg-black mx-auto rounded-full self-center"></div>
      <ButtonNavigation
        onClick={() => handleNavigation("match")}
        classNameContainer={
          containerStyles[page === "match" ? "selectedRight" : "defaultRight"]
        }
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
