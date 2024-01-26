import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SearchBox: React.FC = () => {
  const [searchData, setSearchData] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };
  const clearSearchData = () => {
    setSearchData("");
  };
  return (
    <div className="flex  flex-col items-center">
      <input
        type="text"
        value={searchData}
        onChange={handleInputChange}
        placeholder="Pesquisa..."
        className="p-3 mt-20 rounded sm:w-full md:w-4/5 lg:w-1/2 xl:w-1/2 bg-[#F5DDB6] text-center text-red-600 outline-red-600 z-10"
      />
      <AnimatePresence>
        <motion.button
          className="bg-red-600 rounded p-2 px-10 mt-10 text-white/90 z-0"
          initial={{ y: -85 }}
          animate={{
            y: searchData.length > 0 ? 0 : -85,
            opacity: searchData.length > 0 ? 1 : 0,
          }}
          onClick={() => {
            clearSearchData();
          }}
        >
          Limpar
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default SearchBox;
