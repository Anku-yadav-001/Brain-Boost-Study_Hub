
import ProductCard from "../Components/ProductCard";
const Home = () => {
 
  return (
    <div>
      <div data-testid="home-page-products">
        {/* render all ProductCard's here */}
        <ProductCard/>
      </div>
    </div>
  );
};

export default Home;
