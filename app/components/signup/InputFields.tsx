import React, { ChangeEvent, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useStoreSignup } from "@/app/store";
import { useRouter } from "next/navigation";
import { signupUser, loginUser } from "@/app/api";
const inputs: string[] = [
  "Username",
  "Password",
  "Email",
  "Nome",
  "Cognome",
  "Codice Fiscale",
  "Indirizzo",
  "CAP",
  "Città",
];

const InputFields = () => {
  const router = useRouter();
  const {
    index,
    setIndex,
    inputValues,
    setInputValues,
    setProgress,
    setRole,
    role,
  } = useStoreSignup();

  useEffect(() => {
    const filledInputs = inputValues.filter((value) => value !== "").length;
    setProgress(filledInputs);
  }, [inputValues, setProgress]);

  useEffect(() => {
    if (index < 0) {
      router.push("/");
    } else if (index > 3) {
      const submitUserDetails = async () => {
        try {
          const userDetails = {
            role: role,
            username: inputValues[1],
            password: inputValues[2],
            email: inputValues[3],
            firstName: inputValues[4],
            lastName: inputValues[5],
            fiscalCode: inputValues[6],
            address: inputValues[7],
            postalCode: inputValues[8],
            city: inputValues[9],
          };
          await signupUser(userDetails);
          await loginUser(inputValues[1], inputValues[2]);
          router.push("/home");
        } catch (error) {
          console.error("Failed to add user:", error);
        }
      };
      submitUserDetails();
    }
  }, [index, inputValues, role, router]);

  const handleInputChange = useCallback(
    (index: number, value: string) => {
      const newValues = [...inputValues];
      newValues[index] = value;
      setInputValues(newValues);
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
          <button
            className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 content-center"
            onClick={() => {
              setRole("owner");
              setIndex(index + 1);
            }}
          >
            Trova un gatto
          </button>
          <button
            className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 content-center"
            onClick={() => {
              setRole("user");
              setIndex(index + 1);
            }}
          >
            Trova un padrone
          </button>
        </motion.div>
      ) : (
        inputs
          .slice(offset, offset + 3)
          .map((input, key) => (
            <input
              key={key + offset}
              className="pl-4 w-[19rem] rounded-full bg-giallo h-8 mb-6 placeholder:text-nero"
              placeholder={input}
              value={inputValues[key + offset]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(key + offset, e.target.value)
              }
              aria-label={input}
            />
          ))
      )}
    </motion.div>
  );
};

export default InputFields;
