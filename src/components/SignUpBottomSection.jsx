import papers from '../assets/papers.png';
import calendarCheck from '../assets/calendarCheck.png';
import box from '../assets/box.png';

const SignUpBottomSection = () => {
  return (
    <section>
      <ul className="flex flex-row m-auto w-[50%] min-[515px]:gap-[26px] gap-4 mb-[28px] mt-10 justify-center">
        <li className="w-[280px] border border-[#E3E6ED] rounded-[4px] px-[25px] text-center text-[#6a6d75]">
          <div className="relative">
            <div className="absolute -top-[8px] left-1/2 positionCenter bg-white z-100 w-[70px]">
              <img src={calendarCheck} alt="" className="w-[44px] h-[44px] mx-auto" />
            </div>
            <h3 className="fontCera mt-[5px] mb-[10px] leading-[1.2] font-semibold text-[#303236] pt-[26px]">No Commitment</h3>
            <p className="text-[14px] leading-[1.5] fontCera">Receive your delivery whenever it's convenient, and skipping or canceling is easy.</p>
          </div>
        </li>
        <li className="w-[280px] border border-[#E3E6ED] rounded-[4px] px-[25px] text-center text-[#6a6d75]">
          <div className="relative">
            <div className="absolute -top-[8px] left-1/2 positionCenter bg-white z-100 w-[70px]">
              <img src={papers} alt="" className="w-[44px] h-[44px] mx-auto" />
            </div>
            <h3 className="fontCera mt-[5px] mb-[10px] leading-[1.2] font-semibold text-[#303236] pt-[26px]">Personalized Menus</h3>
            <p className="text-[14px] leading-[1.5] fontCera">Select from our Signature or Signature for 4 plans. Tell us your dietary preferences and we'll personalize the menus you receive.</p>
          </div>
        </li>
        <li className="w-[280px] border border-[#E3E6ED] rounded-[4px] px-[25px] text-center text-[#6a6d75]">
          <div className="relative">
            <div className="absolute -top-[8px] left-1/2 positionCenter bg-white z-100 w-[70px]">
              <img src={box} alt="" className="w-[44px] h-[44px] mx-auto" />
            </div>
            <h3 className="fontCera mt-[5px] mb-[10px] leading-[1.2] font-semibold text-[#303236] pt-[26px]">Convenient Delivery</h3>
            <p className="text-[14px] leading-[1.5] fontCera">Ingredients are carefully packaged in a refrigerated box so food stays fresh even if you're not home when we deliver.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SignUpBottomSection;
