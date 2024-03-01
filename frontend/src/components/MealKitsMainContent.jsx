import { Link } from 'react-router-dom';
import MarketMeals from './MarketMeals';
import MealKitsDatas from '../data/MealKitsDatas';

const MealKitsMainContent = () => {
  return (
    <section className="mt-[70px]">
      <div className="w-[62%] m-auto">
        <p className="text-center text-[12px] text-[#b1b5bd]">
          <Link to="/market" href="" className="text-[#0d2a54] hover:underline">
            Home
          </Link>{' '}
          / Meal Kits
        </p>
        <h3 className="text-[30px] mb-[16px] fontChronicle font-semibold text-[#002c9b] text-center">Meal Kits</h3>
        <div className="flex flex-row justify-start items-center flex-wrap gap-4">
          {MealKitsDatas.map((meal, index) => {
            return <MarketMeals meal={meal} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MealKitsMainContent;
