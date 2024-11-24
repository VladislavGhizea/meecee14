import React, { useMemo } from "react";
import { useStoreSignup } from "@/app/store";
import { motion } from "motion/react";
const ProgressBar = () => {
  const { progress } = useStoreSignup();
  const progressPercentage = useMemo(
    () => Math.round((progress / 9) * 100),
    [progress]
  );
  return (
    <div className="progress-bar justify-center">
      <p className="text-center mt-3">
        Profilo completato al {progressPercentage}%
      </p>
      <div className="mx-12 mb-5 bg-[#E3E5E5] rounded-full h-1">
        <motion.div
          className="bg-verde h-1 rounded-full"
          style={{ width: `${progressPercentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
