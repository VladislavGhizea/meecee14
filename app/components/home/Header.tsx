import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface HeaderProps {
  router: AppRouterInstance;
}

const Header: React.FC<HeaderProps> = ({ router }) => {
  return (
    <div className="header flex flex-row ml-5">
      <motion.div
        className=" flex self-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image alt="" src={"/brand.svg"} width={220} height={88} />
      </motion.div>
      <div className="w-16 h-16 rounded-full bg-rosso70 grid justify-center content-center ml-auto mr-2 relative top-2 mb-4">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            alt=""
            src={"/logo.png"}
            width={56}
            height={56}
            onClick={() => {
              router.push("/user");
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
