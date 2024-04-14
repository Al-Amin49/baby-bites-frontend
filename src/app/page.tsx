import Banner from "@/Components/UI/Banner/Banner";
import Category from "@/Components/UI/Category/Category";
import FlashSale from "@/Components/UI/FlashSale/FlashSale";
import TrendingProducts from "@/Components/UI/TrendingProducts/TrendingProducts";

const HomePage = () => {
  return (
    <div>
    <Banner/>
    <FlashSale/>
    <Category/>
    <TrendingProducts/>
    </div>
  );
};

export default HomePage;