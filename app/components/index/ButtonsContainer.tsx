import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonInput, ButtonSmall } from "../buttons/indexButtons";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

interface ButtonsContainerProps {
  isLoginOpen: boolean;
  handleLoginClick: () => void;
  handleRegisterClick: () => void;
}

const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
  isLoginOpen,
  handleLoginClick,
  handleRegisterClick,
}) => {
  const handleBackClick = () => {
    handleLoginClick();
  };

  return (
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
  );
};

export default ButtonsContainer;
