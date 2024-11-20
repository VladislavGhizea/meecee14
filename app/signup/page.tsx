"use client";
import BackgroundDiv from "../components/ui/rootBackground";
import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect, useCallback, ChangeEvent, useRef } from "react";
import ButtonSmall from "../components/ui/ButtonSmall";
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
  const [progress, setProgress] = useState<number>(0);
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

  const handleInputChange = useCallback((index: number, value: string) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  }, []);
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
    <BackgroundDiv color="#F6EEE1">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-12"
      >
        <div
          ref={constraintRef}
          className="w-32 h-32 rounded-full bg-nero30 grid justify-center content-center"
        >
          <motion.div
            drag
            whileDrag={{ scale: 1.2 }}
            dragElastic={0.2}
            dragConstraints={constraintRef}
          >
            <Image
              alt=""
              src={"/logo.png"}
              width={104}
              height={104}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Barra di progresso */}
      <div className="progress-bar justify-center">
        <p className="text-center mt-3">
          Profilo completato al {Math.round((progress / inputs.length) * 100)}%
        </p>
        <div className="mx-12 mb-5 bg-[#E3E5E5] rounded-full h-1">
          <motion.div
            className="bg-verde h-1 rounded-full"
            style={{ width: `${(progress / inputs.length) * 100}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${(progress / inputs.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Campi di input */}
      <motion.div
        className="inputs-container grid grid-cols-1 grid-flow-row justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {inputs
          .slice(inputSection * 3, inputSection * 3 + 3)
          .map((input, index) => (
            <input
              key={index + inputSection * 3}
              className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 placeholder:text-nero"
              placeholder={input}
              value={inputValues[index + inputSection * 3]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(index + inputSection * 3, e.target.value)
              }
            />
          ))}
      </motion.div>

      {/* Bottoni di navigazione */}
      <motion.div
        className="button-container grid grid-cols-2 grid-rows-1 justify-items-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ButtonSmall
          classname="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          onClick={() => {
            setInputSection(inputSection - 1);
          }}
        >
          <Image alt="" src={"/arrowLeft.svg"} width={32} height={32} />
        </ButtonSmall>
        <ButtonSmall
          classname="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          onClick={() => {
            setInputSection(inputSection + 1);
          }}
        >
          <Image alt="" src={"/arrowRight.svg"} width={32} height={32} />
        </ButtonSmall>
      </motion.div>
    </BackgroundDiv>
  );
}
