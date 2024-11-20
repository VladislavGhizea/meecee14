"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonAction from "../components/ui/ButtonAction";
import ButtonNavigation from "../components/ui/ButtonNavigation";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
export default function Page() {
  const router = useRouter();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const handleNavigation = (category: string) => {
    if (category === "home") {
      router.push("/home");
    } else if (category === "match") {
      router.push("/match");
    }
  };
  const handleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <div>
      <div className="header flex flex-row ml-5">
        <motion.div
          className=" flex self-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image alt="" src={"/brand.svg"} width={220} height={88} />
        </motion.div>
        <div className="w-16 h-16 rounded-full bg-rosso70 grid justify-center content-center ml-auto mr-2 relative top-2 mb-4">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              alt=""
              src={"/logo.png"}
              width={56}
              height={56}
              onClick={() => {
                router.push("/user");
              }}
            />
          </motion.div>
        </div>
      </div>
      <div
        className={` bg-verde flex justify-center content-center ml-auto mr-auto w-[20.5rem] h-[30rem]
        rounded-3xl relative grow-0 pb-3 `}
      >
        <motion.div
          className="bg-panna w-24 h-[1.5rem] z-10 absolute mt-4 rounded-full"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className=" flex flex-col">
          <motion.div
            className={`bg-red-800 w-[17.5rem] ${
              isDescriptionOpen ? "h-40" : "h-[23rem]"
            } mt-[1.75rem] rounded-[2rem] mb-4`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              height: isDescriptionOpen ? "10rem" : "23rem",
            }}
          ></motion.div>
          <motion.div
            className={`flex bg-rosso relative blur-[2px]`}
            onClick={handleDescription}
            initial={{ scale: 2, opacity: 0, width: "17.5rem", height: "3rem" }}
            animate={{
              scale: 1,
              opacity: 1,
              width: isDescriptionOpen
                ? ["17.5rem", "3rem", "17.5rem"]
                : "17.5rem",
              height: isDescriptionOpen ? ["19rem", "3rem", "19rem"] : "3rem",
              borderRadius: isDescriptionOpen
                ? ["5000px", "60px", "40px"]
                : ["40px", "100px", "9999px"],
              alignSelf: isDescriptionOpen ? "center" : ["center", "auto"],
              top: isDescriptionOpen ? ["0", "25%", "0"] : "0",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut", // Cubic Bezier for easeInOut
            }}
          ></motion.div>
        </div>
      </div>
      {true && (
        <div
          className={`buttonsAction z-10
        }`}
        >
          <div className="grid grid-flow-col grid-cols-2 grid-rows-1 mt-6 mx-7 items-center">
            <ButtonAction className=" w-16 h-16 border-4">
              <Image alt="" src={"rematch.svg"} width={36} height={36} />
            </ButtonAction>
            <ButtonAction className=" justify-self-end w-16 h-16 border-4">
              <Image alt="" src={"star.svg"} width={40} height={40} />
            </ButtonAction>
          </div>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-1 justify-items-center items-center mb-3 mx-[5rem]">
            <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-[6px]">
              <Image alt="" src={"cancel.svg"} width={56} height={56} />
            </ButtonAction>
            <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-[6px]">
              <Image alt="" src={"heart.svg"} width={64} height={64} />
            </ButtonAction>
          </div>
        </div>
      )}
      <div className="navbar px-5 h-16 w-[22rem] flex flex-row content-center justify-between bg-rosso70 mx-5 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset]">
        <ButtonNavigation
          classNameContainer="bg-giallo60 h-12 w-1/2 rounded-full self-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mr-3 pl-2"
          classNameText=""
          isBefore
          category="home"
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
    </div>
  );
}
