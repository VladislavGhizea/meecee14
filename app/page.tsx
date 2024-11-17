"use client";
import Image from "next/image";
import BackgroundDiv from "./hooks/useBackground";
import { motion } from "motion/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  ButtonInput,
  ButtonSmall,
} from "./components/home/indexButtons";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleMenuClick = () => {};
  const handleEyeClick = () => {};
  const handleBackClick = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const handleForwardClick = () => {};
  const handleRegisterClick = () => {
    router.push("/signup");
  };
  const handleLoginClick = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  return (
    <BackgroundDiv color="#334B35">
      {/* div sfondo */}
      <motion.div initial={{ x: 100 }} animate={{ x: 0 }}>
        {/* muovere in componenti i loghi */}
        <Image
          src={"/menu-01.svg"}
          alt={""}
          width={32}
          height={32}
          className=" relative top-8 ml-8 justify-self-start mb-28"
        />
      </motion.div>
      {/* header */}
      <div className="grid grid-cols-1 grid-rows-2 justify-items-center">
        {/* div grid */}
        <div className="logo-container">
          <motion.div
            initial={{ scale: 0.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className=" flex justify-center"
          >
            <div className=" w-32 h-32 rounded-full bg-nero30 grid justify-center content-center self-end">
              <Image alt="" src={"/logo.png"} width={104} height={104} />
            </div>
          </motion.div>
          <div className="brand_name-container">
            <Image
              alt=""
              src={"/brand.svg"}
              width={1344}
              height={512}
              className=" w-[336px] h-[128px]"
            />
            <h2 className=" text-center mb-20 text-white text-xl font-medium font-montserrat -mt-3">
              MOTTO DI UNA RIGA
            </h2>
          </div>
        </div>
        {/* TO DO: rendere i pulsanti versatili, trasferendo quindi i classname non versatili tipo i margini */}
        <div className="buttons-container text-center">
          {isLoginOpen ? (
            <>
              <ButtonInput text="Username" />
              <div className="grid grid-cols-1 grid-rows-2">
                <ButtonInput text="Password" type="password" />
                <div className="grid grid-cols-3 grid-rows-1 w-full">
                  {/* indietro, occhio, avanti */}
                  <ButtonSmall
                    onClick={handleBackClick}
                    classname=" justify-self-center relative right-4"
                  >
                    <ChevronLeftIcon />
                  </ButtonSmall>
                  <ButtonSmall classname=" justify-self-center">
                    <EyeSlashIcon />
                  </ButtonSmall>
                  <ButtonSmall classname=" justify-self-center relative left-4">
                    <ChevronRightIcon />
                  </ButtonSmall>
                </div>
              </div>
            </>
          ) : (
            <>
              <Button text="Accedi" onClick={handleLoginClick} />
              <Button text="Registrati" onClick={handleRegisterClick} />
            </>
          )}
        </div>
      </div>
      <h4 className=" text-white text-xl font-medium font-montserrat flex justify-center">
        {" "}
        &#169; MEECEE 2024
      </h4>
    </BackgroundDiv>
  );
}
