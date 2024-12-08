import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonAction from "../buttons/ButtonAction";
import { useStoreHome } from "@/app/store";
import { motion } from "framer-motion";
const ButtonsAction = () => {
  const [leftScale, setLeftScale] = useState(1);
  const [rightScale, setRightScale] = useState(1);
  const deltaX = useStoreHome((state) => state.deltaX);

  useEffect(() => {
    if (deltaX < 0) {
      setLeftScale(1 + Math.abs(deltaX / 50));
      setRightScale(1);
    } else if (deltaX > 0) {
      setRightScale(1 + deltaX / 50);
      setLeftScale(1);
    } else {
      setLeftScale(1);
      setRightScale(1);
    }
  }, [deltaX]);
  return (
    <div className={`buttonsAction z-10`}>
      <div className="grid grid-flow-col grid-cols-4 grid-rows-1 justify-items-center items-center mb-3">
        <ButtonAction className=" w-16 h-16 border-4">
          <Image alt="" src={"rematch.svg"} width={36} height={36} />
        </ButtonAction>
        <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-[6px]">
          <motion.div
            animate={{ scale: leftScale }}
            className="flex justify-center items-center"
          >
            <Image
              alt=""
              src={"cancel.svg"}
              width={512}
              height={512}
              className={(rightScale > 1 ? "z-20" : "z-0") + " w-16 h-16"}
            />
          </motion.div>
        </ButtonAction>
        <ButtonAction className=" w-[5.5rem] h-[5.5rem] border-[6px]">
          <motion.div
            animate={{ scale: rightScale }}
            className="flex justify-center items-center"
          >
            <Image
              alt=""
              src={"heart.svg"}
              width={512}
              height={512}
              className={(rightScale > 1 ? "z-20" : "z-0") + " w-[72] h-[72]"}
            />
          </motion.div>
        </ButtonAction>
        <ButtonAction className=" w-16 h-16 border-4">
          <Image alt="" src={"star.svg"} width={40} height={40} />
        </ButtonAction>
      </div>
    </div>
  );
};

export default ButtonsAction;
