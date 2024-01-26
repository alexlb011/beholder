import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Product } from "../../Interfaces/Product";
import CardImage from "../CardImage/CardImage";
import "./styles.css";
export const Card: React.FC<{ CardData: Product }> = ({ CardData }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className={`Card relative n cursor-pointer  ${hovered} ?`}
          onMouseOver={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          initial={{ scale: 0 }}
          animate={{ scale: hovered ? 1.1 : 1 }}
        >
          <motion.div
            className={` absolute z-10 h-full text-center flex flex-col items-center`}
          >
            <motion.h1
              className=" p-4"
              animate={{ y: hovered ? 80 : 10, opacity: hovered ? 0 : 1 }}
            >
              {CardData.product_name}
            </motion.h1>

            <CardImage
              product_image={CardData.product_image}
              product_image_alt={CardData.product_image_alt}
              hovered={hovered}
            ></CardImage>

            <div className=" pb-3 px-3 h-full flex flex-col justify-between">
              <motion.h1
                className=" text-red-600 "
                animate={{ y: hovered ? 0 : -50, opacity: hovered ? 1 : 0 }}
              >
                {CardData.product_name}
              </motion.h1>

              <p className=" text-xs">{CardData.product_description}</p>
              <div className="flex justify-between">
                <h1 className="font-bold 0 text-left ml-5 ">
                  {"R$: " + CardData.product_value.toFixed(2).replace(".", ",")}
                </h1>
                <div className="flex mx-5">
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                  <h1>X</h1>
                </div>
              </div>
            </div>
          </motion.div>

          {hovered ? (
            <motion.img
              src={"svgs/Card-v2-selected.svg"}
              alt="background card"
              className="stroke-slate-500"
            />
          ) : (
            <motion.img
              src={"svgs/Card-v2.svg"}
              alt="background card"
              className="stroke-slate-500"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Card;
