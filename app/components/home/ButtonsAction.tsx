import React from "react";
import Image from "next/image";
import ButtonAction from "../buttons/ButtonAction";

const ButtonsAction = () => {
  return (
    <div className={`buttonsAction z-10`}>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 mt-6 mx-7 items-center">
        <ButtonAction className=" w-16 h-16 border-4">
          <Image alt="" src={"rematch.svg"} width={36} height={36} />
        </ButtonAction>
        <ButtonAction className=" justify-self-end w-16 h-16 border-4">
          <Image alt="" src={"star.svg"} width={40} height={40} />
        </ButtonAction>
      </div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 justify-items-center items-center mb-3 mx-[5rem]">
        <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-[6px]">
          <Image alt="" src={"cancel.svg"} width={56} height={56} />
        </ButtonAction>
        <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-[6px]">
          <Image alt="" src={"heart.svg"} width={64} height={64} />
        </ButtonAction>
      </div>
    </div>
  );
};

export default ButtonsAction;
