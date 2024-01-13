import MarketSlider from '../components/MarketSlider';
import ShopByCategory from '../components/ShopByCategory';
import MiniDownHeader from '../components/MiniDownHeader';
import MarketFeaturedMeals from '../components/MarketFeaturedMeals';
const Market = () => {
  return (
    <>
      <MiniDownHeader />
      <MarketSlider />
      <MarketFeaturedMeals />
      <ShopByCategory />
    </>
  );
};

export default Market;
