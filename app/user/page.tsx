"use client";
import BackgroundDiv from "../components/buttons/rootBackground";
import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import ButtonSmall from "../components/buttons/ButtonSmall";
import { useRouter } from "next/navigation";

const inputs: string[] = [
  "Username",
  "Email",
  "Password",
  "Nome",
  "Cognome",
  "Codice Fiscale",
  "Indirizzo",
  "CAP",
  "Città",
];

export default function Page() {
  const router = useRouter();

  return (
    <BackgroundDiv color="#F6EEE1">
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-12"
      >
        <div className="w-32 h-32 rounded-full bg-nero30 grid justify-center content-center self-end">
          <Image alt="" src={"/logo.png"} width={104} height={104} />
        </div>
      </motion.div>
      <motion.div className="inputs-container grid grid-cols-1 grid-flow-row justify-items-center">
        {inputs.map((input, index) => (
          <div className="" key={index}>
            <h2 className="">{input}</h2>
            <div className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 placeholder:text-nero" />
          </div>
        ))}
      </motion.div>
      <motion.div className="button-container grid grid-cols-2 grid-rows-1 justify-items-center">
        <ButtonSmall
          classname="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          onClick={() => {
            router.push("/signup");
          }}
        >
          <Image alt="" src={"/arrowLeft.svg"} width={32} height={32} />
        </ButtonSmall>
        <ButtonSmall
          classname="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          onClick={() => {
            router.push("/home");
          }}
        >
          <Image alt="" src={"/arrowRight.svg"} width={32} height={32} />
        </ButtonSmall>
      </motion.div>
    </BackgroundDiv>
  );
}
