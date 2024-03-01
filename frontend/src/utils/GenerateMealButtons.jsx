export const generateMealButtons = (setActiveMealPerWeekBtn) => {
  const mealButtons = ['twoMealBtn', 'threeMealBtn', 'fourMealBtn', 'fiveMealBtn'];
  const buttons = [];

  for (let i = 2; i <= 5; i++) {
    buttons.push(
      <li className="my-auto min-w-[46px] inline-block">
        <button className={`text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full`} onClick={() => setActiveMealPerWeekBtn(mealButtons[i - 2])}>
          {i}
        </button>
      </li>
    );
  }
  return buttons;
};
