import { useState } from 'react';

const SelectPlan = () => {
  const [activeMealPerWeekBtn, setActiveMealPerWeekBtn] = useState('twoMealBtn');
  const [activeNumberOfServingBtn, setActiveNumberOfServingBtn] = useState('twoServingBtn');

  const mealsPerWeekAfterHandling = () => {
    if (activeMealPerWeekBtn === 'twoMealBtn') {
      return 'after:absolute after:top-0 after:left-0 after:w-1/4 after:h-full after:bg-[#002684] after:tracking-[2px] after:whitespace-nowrap after:text-[22px] rounded-sm after:text-center after:fontCera after:text-white after:pt-[2px] after:content-["2"] after:transition-[left] after:duration-150 after:ease-linear';
    } else if (activeMealPerWeekBtn === 'threeMealBtn') {
      return 'after:absolute after:top-0 after:left-1/4 after:w-1/4 after:h-full after:bg-[#002684] after:tracking-[2px] after:whitespace-nowrap after:text-[22px]  rounded-sm after:text-center after:fontCera after:text-white after:pt-[2px] after:content-["3"] after:transition-[left] after:duration-150 after:ease-linear';
    } else if (activeMealPerWeekBtn === 'fourMealBtn') {
      return 'after:absolute after:top-0 after:left-2/4 after:w-1/4 after:h-full after:bg-[#002684] after:tracking-[2px] after:whitespace-nowrap after:text-[22px] rounded-sm after:text-center after:fontCera after:text-white after:pt-[2px] after:content-["4"] after:transition-[left] after:duration-150 after:ease-linear';
    } else if (activeMealPerWeekBtn === 'fiveMealBtn') {
      return 'after:absolute after:top-0 after:left-3/4 after:w-1/4 after:h-full after:bg-[#002684] after:tracking-[2px] after:whitespace-nowrap after:text-[22px] rounded-sm after:text-center after:fontCera after:text-white after:pt-[2px] after:content-["5"] after:transition-[left] after:duration-150 after:ease-linear';
    }
  };
  return (
    <div className="colTwoDiv flex flex-col justify-center items-center mt-10 gap-8 min-[1100px]:border-l-[1px] border-[#d3d6cd] pl-[70px] h-5/6  min-[1100px]:pb-16  min-[1100px]:pr-12">
      <h2 className="text-[22px] font-semibold text-[#303236]">2. Select your plan</h2>
      <div className="flex flex-row gap-[40px]">
        <p className="text-[18px] text-[#303235] text-center">Servings per meal</p>
        <ul
          className={`relative flex flex-row ${
            activeNumberOfServingBtn === 'twoServingBtn'
              ? 'after:absolute after:top-0 after:left-0 after:w-1/2 after:h-full after:bg-[#002684] after:whitespace-nowrap after:text-[22px] rounded-sm after:text-white after:fontCera  after:text-center after:pt-[2px] after:content-["2"] after:transition-[left] after:duration-100 after:ease-linear'
              : 'after:absolute after:top-0 after:left-1/2 after:w-1/2 after:h-full after:bg-[#002684] after:whitespace-nowrap after:text-[22px] rounded-sm after:text-white after:fontCera after:text-center after:pt-[2px] after:content-["4"] after:transition-[left] after:duration-100 after:ease-linear'
          }`}
        >
          <li>
            <button className="border border-[#d3d6cd] w-[100px] h-[38px] text-[#002684] text-[22px] rounded-sm" onClick={() => setActiveNumberOfServingBtn('twoServingBtn')}>
              2
            </button>
          </li>
          <li>
            <button className="border border-[#d3d6cd] w-[100px] h-[38px] text-[#002684] text-[22px]" onClick={() => setActiveNumberOfServingBtn('fourServingBtn')}>
              4
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-[60px]">
        <p className="text-[18px] text-[#303235] text-center">Meals per week</p>
        <ul className={`relative flex flex-row ${mealsPerWeekAfterHandling()}`}>
          <li>
            <button className="border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm" onClick={() => setActiveMealPerWeekBtn('twoMealBtn')}>
              2
            </button>
          </li>
          <li>
            <button className="border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm" onClick={() => setActiveMealPerWeekBtn('threeMealBtn')}>
              3
            </button>
          </li>
          <li>
            <button className="border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm" onClick={() => setActiveMealPerWeekBtn('fourMealBtn')}>
              4
            </button>
          </li>
          <li>
            <button className="border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm" onClick={() => setActiveMealPerWeekBtn('fiveMealBtn')}>
              5
            </button>
          </li>
        </ul>
      </div>
      <div className="bg-[#F8F9FA] w-full h-[150px] p-4 rounded-[12px]">
        <p className="text-[18px]">Order Summary</p>
        <div className="flex flex-row gap-12">
          <div className="flex flex-col">
            <p className="text-[#696d75]">Price per serving</p>
            <p className="text-[#696d75]">Shipping</p>
            <p className="mt-4">First order subtotal</p>
          </div>
          <div className="flex flex-col">
            <span className="ml-[25px] text-[#696d75]">$9.49</span>
            <span className="ml-[25px] text-[#696d75]">$9.49</span>
            <span className="mt-4 ml-[25px] text-[#696d75]">$9.49</span>
          </div>
          <div className="flex flex-col">
            <span className="text-right text-[#1eb389] font-semibold">$5.74</span>
            <span className="font-semibold text-right text-[#1eb389]">FREE</span>
            <span className="mt-3 text-right text-[#303235] text-[20px]">$68.88</span>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#00a0df] text-white tracking-[2px] text-[13px] w-[150px] h-[40px] rounded-[20px] hover:bg-[#5CBFE6]">CONTINUE</button>
      </div>
      <div>
        <p className="text-[15px] text-[#6a6d75]">
          You can update your preferences <br />
          and skip, pause, or cancel at any time.
        </p>
      </div>
    </div>
  );
};

export default SelectPlan;
