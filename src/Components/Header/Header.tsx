export const Header: React.FC = () => {
  return (
    <nav className="flex flex-col fixed z-40 ">
      <div className="flex bg-[#F5DDB6] rounded-br-xl outline outline-2 z-50 justify-between ">
        <h1 className="p-3 mouse cursor-pointer rounded-br-xl hover:text-red-600 hover:scale-110">
          Sobre
        </h1>
        <h1 className="p-3 mouse cursor-pointer rounded-br-xl hover:text-red-600 hover:scale-110">
          Home
        </h1>
        <h1 className="p-3 mouse cursor-pointer rounded-br-xl hover:text-red-600 hover:scale-110">
          Cozinha
        </h1>
        <h1 className="p-3 mouse cursor-pointer rounded-br-xl hover:text-red-600 hover:scale-110">
          Retirada
        </h1>
        <h1 className="p-3 mouse cursor-pointer rounded-br-xl hover:text-red-600 hover:scale-110">
          Login
        </h1>
      </div>

      <img
        src="svgs/shopping-cart.svg"
        className=" w-20 h-16 hover:w-32 transition-all  p-2 bg-red-600 rounded-br-3xl outline outline-2 cursor-pointer hover:outline-white"
        alt=""
      />
    </nav>
  );
};

export default Header;
