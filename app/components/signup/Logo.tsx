import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import React from "react";

const Logo = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
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
  );
};

export default Logo;
