import React, { useEffect, useState } from "react";

export const Beholder: React.FC = () => {
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });
  const circleRadius = 50;
  const circleCenter = { x: 890, y: 370 };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Obter as coordenadas do mouse

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const irisElement = document.getElementById("iris");

    if (irisElement) {
      const irisRect = irisElement.getBoundingClientRect();
      const irisWidth = irisRect.width;
      const irisHeight = irisRect.height;
      const irisX = mouseX - irisWidth / 2;
      const irisY = mouseY - irisHeight / 2;

      const rotatedX = irisX + window.pageXOffset;
      const rotatedY = irisY + window.pageYOffset;

      const distance = Math.sqrt(
        Math.pow(rotatedX - circleCenter.x, 2) +
          Math.pow(rotatedY - circleCenter.y, 2)
      );
      // Atualizar a posição da íris com base nas coordenadas do mouse
      if (distance > circleRadius) {
        // Calcular a posição no círculo mais próximo
        const angle = Math.atan2(
          //   irisY - window.innerHeight / 2,
          //   irisX - window.innerWidth / 2
          rotatedY - circleCenter.y,
          rotatedX - circleCenter.x
        );
        // const x = window.innerWidth / 2 + circleRadius * Math.cos(angle);
        // const y = window.innerHeight / 2 + circleRadius * Math.sin(angle);
        const x = circleCenter.x + circleRadius * Math.cos(angle);
        const y = circleCenter.y + circleRadius * Math.sin(angle);

        setIrisPosition({ x, y });
      } else {
        setIrisPosition({ x: rotatedX, y: rotatedY });
      }
    }
  };

  useEffect(() => {
    // Adicionar um ouvinte de evento de movimento do mouse
    document.addEventListener("mousemove", handleMouseMove);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="Header flex flex-col  items-center p-5">
      <img
        className=""
        id="iris"
        src="images/Eye/IrisClip.png"
        alt=""
        style={{
          position: "absolute",
          left: `${irisPosition.x}px`,
          top: `${irisPosition.y}px`,
          zIndex: 10,
        }}
      />
      <div className="flex justify-center w-full">
        <div className="beholder relative w-2/1 ">
          <img src="images/Eye/Front.png" alt="" className="absolute z-30" />
          <img src="images/Eye/EyeBack.png" alt="" className="z-20" />
        </div>
        <img
          src="images/LogoBeholder.png"
          alt=""
          className="z-40 absolute w-3/4 "
          style={{ top: "600px" }}
        />
      </div>
    </div>
  );
};
export default Beholder;

// useEffect(() => {
//     const updateIrisPosition = (event: MouseEvent) => {
//       const beholder = document.querySelector(".beholder");
//       if (beholder) {
//         const beholderRect = beholder.getBoundingClientRect();
//         const mouseX = event.clientX - beholderRect.left;
//         const mouseY = event.clientY - beholderRect.top;

//         const irisX = (mouseX / beholderRect.width) * 100;
//         const irisY = (mouseY / beholderRect.height) * 100;

//         setIrisPosition({ x: irisX, y: irisY });
//       }
//     };
//     window.addEventListener("mousemove", updateIrisPosition);
//     console.log(irisPosition);

//     return () => {
//       window.removeEventListener("mousemove", updateIrisPosition);
//     };
//   }, []);
