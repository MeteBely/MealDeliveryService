const BuildYourPlan = () => {
  return (
    <div className="w-[781px] m-auto border border-[#d3d5db]  px-[20px] pb-4 rounded-[8px] flex flex-row items-center justify-between h-[250px] my-12">
      <div className="w-[45%]">
        <h1 className="mt-[12px] mb-4 fontChronicle text-[30px] tracking-[.5px] text-[#002684] ">Build your Plan</h1>
        <div className="fontCera text-[15px] leading-[1.2] mt-[13px] mb-[25px] text-[#6a6d75]">You can update your preferences and skip, pause, or cancel at any time.*</div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col justify-center items-start mr-[60px]">
            <span className="text-[#303236] pt-4 text-[20px] fontCera font-semibold text-left">$12.49</span>
            <p className="fontCera text-[14px] text-[#696d75]  text-left">per serving</p>
          </div>
          <div className="flex flex-col justify-center items-start mr-[60px]">
            <span className="text-[#303236] pt-4 text-[20px] fontCera font-semibold text-left">$10.99</span>
            <p className="fontCera text-[14px] text-[#696d75] text-left">shipping</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center w-[50%] gap-4 h-[225px] relative">
        <div className="flex flex-row items-start justify-center gap-[34px]">
          <div className="my-auto fontCera text-[18px] text-[#6a6d75] pb-[5px]">Number of servings</div>
          <ul className="flex flex-row h-[38px] rounded-[58px] bg-[#f8f9fa] overflow-visible justify-center items-center">
            <li className="my-auto min-w-[46px] inline-block">
              <button className="text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full">2</button>
            </li>
            <li className="my-auto min-w-[46px] inline-block">
              <button className="text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full">4</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-start justify-center gap-[25px]">
          <div className="my-auto fontCera text-[18px] text-[#6a6d75] leading-[1.06] pb-[5px]">
            Meals per
            <br />
            week
          </div>
          <ul className="flex flex-row h-[38px] rounded-[58px] bg-[#f8f9fa] overflow-visible justify-center items-center">
            <li className="my-auto min-w-[46px] inline-block">
              <button className="text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full">2</button>
            </li>
            <li className="my-auto min-w-[46px] inline-block">
              <button className="text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full">3</button>
            </li>
            <li className="my-auto min-w-[46px] inline-block">
              <button className="text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full">4</button>
            </li>
            <li className="my-auto min-w-[46px] inline-block">
              <button className="text-[#002684] text-[19px] fontCera my-auto tracking-[2px] whitespace-nowrap w-full">5</button>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <button className="absolute bottom-[12px] right-0 w-[200px] tracking-[2px] min-w-[128px] bg-[#00a0df]  rounded-[30px] text-[15px] h-[46px] fontCera text-center text-white hover:bg-[#5CBFE6]">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default BuildYourPlan;
