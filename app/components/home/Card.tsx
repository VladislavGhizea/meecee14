import React, {useRef,useState} from "react";
import { motion } from "framer-motion";

interface CardProps {
  isDescriptionOpen: boolean;
  handleDescription: () => void;
}


const Card: React.FC<CardProps> = ({
  isDescriptionOpen,
  handleDescription,
}) => {
    const [initialPosition, setInitialPosition] = useState<{ x: number; y: number } | null>(null);
 const containerRef = useRef<HTMLDivElement>(null);
const handleDragEnd = (event: MouseEvent) => {
  if (initialPosition) {
    const deltaX = event.clientX - initialPosition.x;
if (deltaX>250) console.log("match"); else if (deltaX<-250) console.log("no match");
    setInitialPosition(null);
  }
};
const handleDragStart = (event: MouseEvent) => {
  setInitialPosition({ x: event.clientX, y: event.clientY });
};
  return (
    <div
      className={` bg-verde flex justify-center content-center ml-auto mr-auto w-[20.5rem] h-[30rem]
      rounded-3xl relative grow-0 pb-3 `}
    >
      <motion.div
        className="bg-panna w-24 h-[1.5rem] z-10 absolute mt-4 rounded-full"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className=" flex flex-col" ref={containerRef}>
        <motion.img
          src="/images.jpg"
          className={`object-cover bg-red-800 w-[17.5rem] ${
            isDescriptionOpen ? "h-40" : "h-[23rem]"
          } mt-[1.75rem] rounded-[2rem] mb-4`}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            height: isDescriptionOpen ? "10rem" : "23rem",
          }}
          drag
          whileDrag={{ scale: 1.2 }}
          dragElastic = {0.2}
          dragSnapToOrigin = {true}
          dragConstraints={containerRef}
          onDragStart={handleDragStart}
          onDragEnd= {handleDragEnd}
        />
        <motion.div
          className={` flex bg-rosso relative]`}
          onClick={handleDescription}
          initial={{ scale: 2, opacity: 0, width: "17.5rem", height: "3rem" }}
          animate={{
            scale: 1,
            opacity: 1,
            width: isDescriptionOpen
              ? ["17.5rem", "3rem", "17.5rem"]
              : "17.5rem",
            height: isDescriptionOpen ? ["19rem", "3rem", "19rem"] : "3rem",
            borderRadius: isDescriptionOpen
              ? ["5000px", "60px", "40px"]
              : ["40px", "100px", "9999px"],
            alignSelf: isDescriptionOpen ? "center" : ["center", "auto"],
            top: isDescriptionOpen ? ["0", "25%", "0"] : "0",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.p
            className="z-10 mx-3 my-3 filter-none"
            animate={{
              width: isDescriptionOpen
                ? ["17.5rem", "3rem", "17.5rem"]
                : "17.5rem",
            }}
          >
            Fuffi, 3 anni
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
