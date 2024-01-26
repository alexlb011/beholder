import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
export const CardImage: React.FC<{
  product_image: string;
  product_image_alt: string;
  hovered: boolean;
}> = ({ product_image, product_image_alt, hovered }) => {
  return (
    <AnimatePresence>
      <motion.img
        className="cardImg rounded-3xl w-3/4 h-auto z-20"
        src={product_image}
        alt={product_image_alt}
        animate={{ scale: hovered ? 1.15 : 1, y: hovered ? -20 : 0 }}
      ></motion.img>
    </AnimatePresence>
  );
};

export default CardImage;
