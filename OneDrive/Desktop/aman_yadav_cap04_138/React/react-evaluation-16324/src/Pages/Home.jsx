import { useState,useEffect, useContext } from "react";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <div data-testid="home-page-products">
        {/* render all ProductCard's here */}
       {loading?(
        <Loading/>
       ):(
        products.map((product) => <ProductCard key={product.id} product={product} />)
       )}
      </div>
    </div>
  );
};

export default Home;
