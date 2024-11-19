import React from "react";
import Image from "next/image";
import ButtonAction from "../components/ui/ButtonAction";
import ButtonNavigation from "../components/ui/ButtonNavigation";
export default function Page() {
  return (
    <div>
      <div className="header flex flex-row ml-5">
        <Image alt="" src={"/brand.svg"} width={220} height={88} />
        <div className="w-16 h-16 rounded-full bg-rosso70 grid justify-center content-center ml-auto mr-2 relative top-2 mb-4">
          <Image alt="" src={"/logo.png"} width={56} height={56} />
        </div>
      </div>
      <div className=" bg-verde flex justify-center content-center ml-auto mr-auto w-[20.5rem] h-[30rem] rounded-3xl">
        <div className=" bg-panna w-24 h-[1.5rem] z-10 absolute mt-4 rounded-full"></div>
        <div className=" flex flex-col">
          <div className=" bg-red-800 w-[17.5rem] h-[23rem] mt-[1.75rem] rounded-[2rem] mb-4"></div>
          <div className=" flex bg-rosso rounded-full blur-[2px] w-[17.5rem] h-12"></div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 mt-6 mx-7 items-center">
        <ButtonAction className=" w-16 h-16 border-4">
          <Image alt="" src={"rematch.svg"} width={36} height={36} />
        </ButtonAction>
        <ButtonAction className=" justify-self-end w-16 h-16 border-4">
          <Image alt="" src={"star.svg"} width={40} height={40} />
        </ButtonAction>
      </div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-1 justify-items-center items-center mb-3">
        <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-8">
          <Image alt="" src={"cancel.svg"} width={56} height={56} />
        </ButtonAction>
        <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-8">
          <Image alt="" src={"heart.svg"} width={64} height={64} />
        </ButtonAction>
      </div>
      <div className="navbar flex flex-row bg-rosso70 mx-5 rounded">
        <ButtonNavigation category="home"> meow </ButtonNavigation>
        <ButtonNavigation className=" ml-auto" category="match">
          meow
        </ButtonNavigation>
      </div>
    </div>
  );
}
