"use client";
import Image from "next/image";
import BackgroundDiv from "./components/ui/rootBackground";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonInput, ButtonSmall } from "./components/ui/indexButtons";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
const handleForwardClick = () => {};
const handleRegisterClick = () => {
  router.push("/signup");
};
const handleLoginClick = () => {
  setIsLoginOpen(!isLoginOpen);
};
const handleMenuClick = () => {};
const handleEyeClick = () => {};
const handleBackClick = () => {
  setIsLoginOpen(!isLoginOpen);
};
export default function Page() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <BackgroundDiv color="#334B35">
      {/* div sfondo */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* muovere in componenti i loghi */}
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
      {/* header */}
      <div className="grid grid-cols-1 grid-rows-2 justify-items-center">
        {/* div grid */}
        <div className="logo-container">
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
        {/* TO DO: rendere i pulsanti versatili, trasferendo quindi i classname non versatili tipo i margini */}
        <div className="buttons-container text-center">
          {isLoginOpen ? (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <ButtonInput text="Username" />
              <div className="grid grid-cols-1 grid-rows-2">
                <ButtonInput text="Password" type="password" />
                <div className="grid grid-cols-3 grid-rows-1 w-full">
                  {/* indietro, occhio, avanti */}
                  <ButtonSmall
                    onClick={handleBackClick}
                    classname=" justify-self-center relative right-4 bg-giallo"
                  >
                    <ChevronLeftIcon />
                  </ButtonSmall>
                  <ButtonSmall classname=" justify-self-center bg-giallo">
                    <EyeSlashIcon />
                  </ButtonSmall>
                  <ButtonSmall classname=" justify-self-center relative left-4 bg-giallo">
                    <ChevronRightIcon />
                  </ButtonSmall>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Button text="Accedi" onClick={handleLoginClick} />
              <Button text="Registrati" onClick={handleRegisterClick} />
            </motion.div>
          )}
        </div>
      </div>
      <motion.h4
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-white text-xl font-medium font-montserrat flex justify-center"
      >
        {" "}
        &#169; MEECEE 2024
      </motion.h4>
    </BackgroundDiv>
  );
}
