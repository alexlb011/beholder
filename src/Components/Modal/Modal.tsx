import CardImage from "../CardImage/CardImage";
import { Product } from "../../Interfaces/Product";
import React from "react";
export const Modal: React.FC<{
  productSelected?: Product;
}> = ({ productSelected }) => {
  return (
    <div
      id="background"
      className="w-full h-full bg-slate-700/50 absolute z-50"
    >
      <div className="bg-red-500 flex justify-around p-40">
        <div className="">
          <CardImage
            product_image="public/images/barbarian_grill.jpg"
            product_image_alt="teste"
            hovered={false}
          ></CardImage>
        </div>
        <div className=" w-full">
          <h1>nome</h1>
          <h1>description</h1>
          <h1>valor</h1>
          <div className="flex">
            <button>-</button>
            <h1>5</h1>
            <button>+</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Produto 1</h1>
        </div>
        <div>
          <h1>Produto 1</h1>
        </div>
        <div>
          <h1>Produto 1</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
