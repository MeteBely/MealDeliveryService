import FeaturedMeals from '../data/FeaturedMeals';
import MarketMeals from '../components/MarketMeals';

const MarketFeaturedMeals = () => {
  return (
    <section>
      <div className="w-[62%] m-auto">
        <h3 className="text-[22px] mb-[24px] fontCera font-semibold text-[#303236] w-fit m-auto">Featured</h3>
        <div className="flex flex-row justify-center items-center flex-wrap gap-4 ">
          {FeaturedMeals.map((meal, index) => {
            return <MarketMeals meal={meal} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketFeaturedMeals;
