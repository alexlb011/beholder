import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Category } from "../../Interfaces/Category";
import "./styles.css";
export const CardCategory: React.FC<{ CardData: Category }> = ({
  CardData,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className={`Card relative n cursor-pointer w-3/4  ${hovered} ?`}
          onMouseOver={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          initial={{ scale: 0 }}
          animate={{ scale: hovered ? 1.1 : 1 }}
        >
          <div className="text-center flex flex-col items-center">
            <motion.h1
              className="p-4 text-white/90 "
              animate={{ y: hovered ? 80 : 10, opacity: hovered ? 0 : 1 }}
            >
              {CardData.Category_name}
            </motion.h1>
            <motion.img
              className={`cardImg rounded-3xl h-auto z-20 ${
                hovered ? " border-8 border-red-600" : ""
              }`}
              src={CardData.Category_image}
              alt={CardData.Category_image_alt}
              animate={{ scale: hovered ? 1.15 : 1, y: hovered ? -20 : 0 }}
            ></motion.img>
            <div className=" flex flex-col justify-between">
              <motion.h1
                className=" text-red-600 "
                animate={{ y: hovered ? 0 : -50, opacity: hovered ? 1 : 0 }}
              >
                {CardData.Category_name}
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CardCategory;
