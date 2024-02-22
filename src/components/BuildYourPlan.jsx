import { useState } from 'react';
import { SelectedMealBtn } from '../utils/SelectedMealBtn';
import { generateMealButtons } from '../utils/GenerateMealButtons';
const BuildYourPlan = () => {
  const [activeMealPerWeekBtn, setActiveMealPerWeekBtn] = useState('twoMealBtn');
  const [activeNumberOfServingBtn, setActiveNumberOfServingBtn] = useState('twoServingBtn');

  const mealsPerWeekAfterHandling = () => {
    if (activeMealPerWeekBtn === 'twoMealBtn') {
      return SelectedMealBtn('0', '2');
    } else if (activeMealPerWeekBtn === 'threeMealBtn') {
      return SelectedMealBtn('1/4', '3');
    } else if (activeMealPerWeekBtn === 'fourMealBtn') {
      return SelectedMealBtn('2/4', '4');
    } else if (activeMealPerWeekBtn === 'fiveMealBtn') {
      return SelectedMealBtn('3/4', '5');
    }
  };

  return (
    <div className="w-auto px-0 min-[600px]:w-[781px] min-[600px]:px-[20px] m-auto border border-[#d3d5db] pb-4 rounded-[8px] flex flex-row items-center justify-between h-[250px] my-12">
      <div className="w-[255px] min-[600px]:w-[45%]">
        <h1 className="mt-[12px] mb-4 fontChronicle text-[28px] tracking-[.2px] min-[600px]:text-[30px] min-[600px]:tracking-[.5px] text-[#002684] ">Build Your Plan</h1>
        <div className="fontCera text-[15px] leading-[1.2] mt-[13px] mb-[25px] text-[#6a6d75]">You can update your preferences and skip, pause, or cancel at any time.*</div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col justify-center items-start mr-[40px] min-[600px]:mr-[60px]">
            <span className="text-[#303236] pt-4 text-[20px] fontCera font-semibold text-left">$12.49</span>
            <p className="fontCera text-[14px] text-[#696d75] text-left h-[45px]">per serving</p>
          </div>
          <div className="flex flex-col justify-center items-start mr-[40px] min-[600px]:mr-[60px]">
            <span className="text-[#303236] pt-4 text-[20px] fontCera font-semibold text-left">$10.99</span>
            <p className="fontCera text-[14px] text-[#696d75] text-left h-[45px]">shipping</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center w-[50%] gap-4 h-[225px] relative">
        <div className="flex flex-row items-start justify-center gap-[17px] min-[600px]:gap-[34px]">
          <div className="my-auto fontCera text-[15px] min-[600px]:text-[18px] text-[#6a6d75] pb-[5px]">Number of servings</div>
          <ul
            className={`relative flex flex-row h-[38px] rounded-[58px] bg-[#f8f9fa] overflow-visible justify-center items-center ${
              activeNumberOfServingBtn === 'twoServingBtn'
                ? 'after:absolute after:top-0 after:left-0 after:w-1/2 after:h-full after:bg-[#002684] after:whitespace-nowrap after:rounded-[45%] after:text-white after:fontCera after:text-[18px] after:text-center after:pt-[7px] after:content-["2"] after:transition-[left] after:duration-100 after:ease-linear'
                : 'after:absolute after:top-0 after:left-1/2 after:w-1/2 after:h-full after:bg-[#002684] after:whitespace-nowrap after:rounded-[45%] after:text-white after:fontCera after:text-[18px] after:text-center after:pt-[7px] after:content-["4"] after:transition-[left] after:duration-100 after:ease-linear'
            }`}
          >
            <li className="my-auto min-w-[46px] inline-block">
              <button className={`text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full`} onClick={() => setActiveNumberOfServingBtn('twoServingBtn')}>
                2
              </button>
            </li>
            <li className="my-auto min-w-[46px] inline-block">
              <button className={`text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full`} onClick={() => setActiveNumberOfServingBtn('fourServingBtn')}>
                4
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-start justify-center gap-0 min-[600px]:gap-[25px]">
          <div className="my-auto fontCera text-[15px] min-[600px]:text-[18px] text-[#6a6d75] leading-[1.06] pb-[5px]">
            Meals per
            <br />
            week
          </div>
          <ul className={`relative flex flex-row h-[38px] rounded-[58px] bg-[#f8f9fa] overflow-visible justify-center items-center ${mealsPerWeekAfterHandling()}`}>{generateMealButtons(setActiveMealPerWeekBtn)}</ul>
        </div>
        <div className="mt-12">
          <button className="absolute bottom-[12px] right-0 w-[200px] tracking-[2px] min-w-[128px] bg-[#00a0df]  rounded-[30px] text-[15px] h-[46px] fontCera text-center text-white hover:bg-[#5CBFE6]">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default BuildYourPlan;
