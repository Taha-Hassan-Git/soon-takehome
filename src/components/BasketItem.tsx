import Product from "./Product";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductTotal from "./ProductTotal";
import { IBasketItem, IProduct } from "../types/types";
import { catalogue } from "../assets/catalogue";

interface Props {
  item: IBasketItem;
  basket: IBasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<IBasketItem[]>>;
}

const BasketItem = ({ item, basket, setBasket }: Props) => {
  const product = Object.values(catalogue).find(
    (product) => product.id === item.id
  );
  if (!product) {
    return null;
  }
  let quantity = item.quantity;
  return (
    <div className="row BasketItem">
      <div className="ProductContainer">
        <Product quantity={quantity} name={product.name} img={product.img} />
        <ProductPrice
          quantity={quantity}
          price={`£${product.price}.00`}
          CssClass="above-700"
        />
        <ProductQuantity
          quantity={quantity}
          id={product.id}
          basket={basket}
          setBasket={setBasket}
          CssClass="above-700"
        />
        <ProductTotal
          basket={basket}
          price={product.price}
          CssClass="above-700"
        />
      </div>
      <div className="below-700 TotalContainer">
        <ProductPrice quantity={quantity} price={`£${product.price}.00`} />
        <ProductQuantity
          quantity={quantity}
          id={product.id}
          basket={basket}
          setBasket={setBasket}
        />
        <ProductTotal basket={basket} price={product.price} />
      </div>
    </div>
  );
};

export default BasketItem;
