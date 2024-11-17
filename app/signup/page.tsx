"use client";
{
  /* modificare perché bakcgroudndiv non è un hook */
}
import BackgroundDiv from "../hooks/useBackground";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
export default function Page() {
  const [progress, setProgress] = useState(2);
  return (
    <BackgroundDiv color="#F6EEE1">
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className=" flex justify-center mt-12"
      >
        <div className=" w-32 h-32 rounded-full bg-nero30 grid justify-center content-center self-end">
          <Image alt="" src={"/logo.png"} width={104} height={104} />
        </div>
      </motion.div>
      <div className="progress-bar justify-center">
        <p className=" text-center mt-3">
          profilo completato al {progress * 11} %
        </p>

        <div className=" ml-12 mr-12 bg-[#E3E5E5] rounded-full h-1">
          <div
            className="bg-verde h-1 rounded-full"
            style={{ width: `${progress * 11}%` }}
          ></div>
        </div>
      </div>
    </BackgroundDiv>
  );
}
