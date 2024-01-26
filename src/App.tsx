import Catalog from "./Components/Catalog/Catalog";
import SearchBox from "./Components/SearchBox/SearchBox";
import Beholder from "./Components/Beholder/Beholder";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
// import MyAxios from "./Gateways/backend-Axious/axios";
import { allProduct_Response } from "./Tests/mocks/Product.mock";
import { allCategory_Response } from "./Tests/mocks/Category.mock";
//

function App() {
  // const thisAxios = new MyAxios();
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const productFetch = await thisAxios.fetchData("/product");
  //     setProducts(productFetch);
  //   };
  //   fetch();
  // }, [thisAxios]);

  return (
    <div className="bg-zinc-800 ">
      {/* <Modal></Modal> */}
      <Header></Header>
      <Beholder></Beholder>
      <div className="p-20">
        <Catalog catalogData={allCategory_Response} Title="Categoria"></Catalog>
        <SearchBox></SearchBox>
        <Catalog catalogData={allProduct_Response} Title="Catalogo" />
      </div>
    </div>
  );
}
export default App;
