import { useContext } from "react";
import ProductCard from "../../components/product-card.jsx/product-card";
import { ProductsContext } from "../../contexts/products.context";
import './shop.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext);
  console.log("products:", products);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
