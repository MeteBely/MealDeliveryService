const MarketMeals = ({ meal }) => {
  return (
    <div className="fontCera w-[282px] mb-[20px] h-[394px]">
      <img src={meal.src} />
      <a href="" className="font-semibold text-[#303236] inline-block mt-4 hover:underline">
        {meal.title}
      </a>
      <p className="text-[#6a6d75] text-[15px] leading-[18px]">{meal.description}</p>
      <span className="text-[#303236] inline-block mt-[12px]">{meal.price}</span>
    </div>
  );
};

export default MarketMeals;
