import React, { ChangeEvent, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { useStoreSignup } from "@/app/store";
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
const InputFields = () => {
  const router = useRouter();
  const { index, setIndex, inputValues, setInputValues, setProgress, setRole } =
    useStoreSignup();

  useEffect(() => {
    const filledInputs = inputValues.filter((value) => value !== "").length;
    setProgress(filledInputs);
  }, [inputValues, setProgress]);

  useEffect(() => {
    if (index < 0) {
      router.push("/");
    } else if (index > 3) {
      router.push("/home");
    }
  }, [index, router]);

  const handleInputChange = useCallback(
    (index: number, value: string) => {
      const prevValues = inputValues;
      const newValues = [...prevValues];
      newValues[index] = value;
      setInputValues(newValues);
      console.log(inputValues);
    },
    [setInputValues, inputValues]
  );
  const offset = (index - 1) * 3;
  return (
    <motion.div
      className="inputs-container grid grid-cols-1 grid-flow-row justify-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {index === 0 ? (
        <motion.div
          className="buttons-container grid grid-rows-2 grid-cols-1 justify-items-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 content-center"
            onClick={() => {
              setRole("owner");
              setIndex(index + 1);
            }}
          >
            Trova un gatto
          </div>
          <div
            className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 content-center"
            onClick={() => {
              setRole("user");
              setIndex(index + 1);
            }}
          >
            Trova un padrone
          </div>
        </motion.div>
      ) : (
        inputs.slice(offset, offset + 3).map((input, key) => (
          <input
            key={key + offset}
            className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 placeholder:text-nero"
            placeholder={input}
            value={inputValues[key + offset]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(key + offset, e.target.value);
            }}
          />
        ))
      )}
    </motion.div>
  );
};

export default InputFields;
