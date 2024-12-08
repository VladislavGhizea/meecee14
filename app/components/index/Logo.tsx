import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [-35, 0, 35, 0, -35] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "backInOut",
        stiffness: 200,
      }}
      className="flex justify-center"
    >
      <div
        className=" w-32 h-32 rounded-full bg-nero30 grid justify-center content-center self-end"
        ref={constraintRef}
      >
        <motion.div
          drag
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.2}
          dragConstraints={constraintRef}
          dragSnapToOrigin={true}
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
  );
};

export default Logo;
