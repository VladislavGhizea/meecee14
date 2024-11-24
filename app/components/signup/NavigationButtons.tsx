import { motion } from "motion/react";
import React from "react";
import ButtonSmall from "../buttons/ButtonSmall";
import { useStoreSignup } from "@/app/store";
import Image from "next/image";

const NavigationButtons = () => {
  const { index, setIndex } = useStoreSignup();
  return (
    <motion.div
      className="button-container grid grid-cols-2 grid-rows-1 justify-items-center mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ButtonSmall
        classname="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        <Image alt="" src={"/arrowLeft.svg"} width={32} height={32} />
      </ButtonSmall>
      <ButtonSmall
        classname="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        <Image alt="" src={"/arrowRight.svg"} width={32} height={32} />
      </ButtonSmall>
    </motion.div>
  );
};

export default NavigationButtons;
