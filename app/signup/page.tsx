"use client";
import BackgroundDiv from "../hooks/useBackground";
import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import ButtonSmall from "../components/ui/ButtonSmall";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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
  const [progress, setProgress] = useState<number>(2);
  const [inputSection, setInputSection] = useState<number>(0);
  const [inputValues, setInputValues] = useState<string[]>(
    Array(inputs.length).fill("")
  );

  useEffect(() => {
    const filledInputs = inputValues.filter((value) => value !== "").length;
    setProgress(filledInputs);
  }, [inputValues]);
  useEffect(() => {
    if (inputSection < 0) {
      router.push("/");
    } else if (inputSection > 2) {
      router.push("/home");
    }
  }, [inputSection, router]);
  const handleInputChange = useCallback((key: number, value: string) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[key] = value;
      return newValues;
    });
  }, []);

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
      <div className="progress-bar justify-center">
        <p className="text-center mt-3">
          profilo completato al {progress * 11} %
        </p>
        <div className="ml-12 mr-12 mb-5 bg-[#E3E5E5] rounded-full h-1">
          <motion.div
            className="bg-verde h-1 rounded-full"
            style={{ width: `${progress * 11}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress * 11}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </div>
      <motion.div className="inputs-container grid grid-cols-1 grid-flow-row justify-items-center">
        {inputs
          .slice(inputSection * 3, inputSection * 3 + 3)
          .map((input, index) => (
            <input
              key={index}
              className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 placeholder:text-nero"
              placeholder={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(index, e.target.value)
              }
            />
          ))}
      </motion.div>
      <motion.div className="button-container grid grid-cols-2 grid-rows-1 justify-items-center">
        <ButtonSmall
          classname="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          onClick={() => {
            setInputSection(inputSection - 1);
          }}
        >
          <ChevronLeftIcon strokeWidth={10} className="h-6 w-6" />
        </ButtonSmall>
        <ButtonSmall
          onClick={() => {
            setInputSection(inputSection + 1);
          }}
        >
          <ChevronRightIcon />
        </ButtonSmall>
      </motion.div>
    </BackgroundDiv>
  );
}
