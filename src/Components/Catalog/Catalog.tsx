import { Product } from "../../Interfaces/Product";
import Card from "../Card/Card";
import { CardCategory } from "../CardCategory/CardCategory";
import { Category } from "../../Interfaces/Category";

import "./styles.css";

export const Catalog: React.FC<{
  catalogData: Product[] | Category[];
  Title: string;
}> = ({ catalogData, Title }) => {
  const isProduct = (item: Product | Category): item is Product => {
    return "product_value" in item;
  };
  return (
    <div className="pt-12">
      <h1 className="text-white/90 text-5xl">{Title}</h1>
      <div
        className={` 
      grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 pt-12 
      
      `}
      >
        {catalogData.map((item: Product | Category) => (
          <>
            {isProduct(item) ? (
              <Card CardData={item}></Card>
            ) : (
              <CardCategory CardData={item}></CardCategory>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
