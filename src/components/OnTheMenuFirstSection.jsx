/* eslint-disable react/prop-types */
import { useState } from 'react';
import WeekOfMonth from '../components/WeekOfMonth';
const OnTheMenuFirstSection = ({ setActiveBtn, activeBtn }) => {
  const [subTxt, setSubTxt] = useState('Choose from an ever-changing mix of meat, fish, and health-conscious offerings.');
  return (
    <section>
      <div className="h-[360px]">
        <h1 className="text-[#002c9b] fontChronicle text-[58px] pb-1 text-center mt-[55px] h-[180px]">Explore Our Meal Delivery Menus</h1>
        <div className="flex flex-row h-[160px] m-auto w-auto min-[940px]:w-[920px] border-b border-b-[#002c9b] justify-between pt-4">
          <button
            onClick={() => {
              setActiveBtn('btnOne');
              setSubTxt('Choose from an ever-changing mix of meat, fish, and health-conscious offerings.');
            }}
            className={`flex flex-col justify-center items-center w-[20%] pb-[20px] ${activeBtn === 'btnOne' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
          >
            <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em] h-[45px]">2 SERVING</span>
            <span className="pt-[12px]  text-[18px] fontChronicle text-[#002c9b] h-[70px]">Signature</span>
          </button>
          <button
            onClick={() => {
              setActiveBtn('btnTwo');
              setSubTxt('Meat-free dishes that celebrate the best of seasonal produce.');
            }}
            className={`flex flex-col justify-center items-center w-[20%] pb-[20px] ${activeBtn === 'btnTwo' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
          >
            <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em] h-[45px]">2 SERVING</span>
            <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b] h-[70px]">Vegetarian</span>
          </button>
          <button
            onClick={() => {
              setActiveBtn('btnThree');
              setSubTxt('Balanced, nutritionist-approved recipes designed for your holistic health.');
            }}
            className={`flex flex-col justify-center items-center w-[20%] pb-[20px] ${activeBtn === 'btnThree' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
          >
            <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em] h-[45px]">2 SERVING</span>
            <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b] h-[70px]">Wellness</span>
          </button>
          <button
            onClick={() => {
              setActiveBtn('btnFour');
              setSubTxt('Recipes for families, get-togethers, or left-overs, with a variety of options that change weekly, including meat, fish and other health-conscious offerings.');
            }}
            className={`flex flex-col justify-center items-center w-[20%] pb-[20px] ${activeBtn === 'btnFour' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
          >
            <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em] h-[45px]">4 SERVING</span>
            <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b] h-[70px]">Signature for Hour</span>
          </button>
          <button
            onClick={() => {
              setActiveBtn('btnFive');
              setSubTxt('Complete your meal with appetizers and sides or add even more Blue Apron to your day with breakfast and dessert options.');
            }}
            className={`flex flex-col justify-center items-center w-[20%] pb-[20px] ${activeBtn === 'btnFive' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
          >
            <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em] h-[45px]">WEEKLY OPTIONS</span>
            <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b] h-[70px]">Add-Ons</span>
          </button>
        </div>
        <p className="text-left min-[940px]:text-center fontCera text-[#002c9b] leading-[28px] w-auto px-8 min-[640px]:px-20 min-[940px]:px-0 min-[940px]:w-[650px] h-[40px] m-auto mt-[20px] mb-[57px]">{subTxt}</p>
        <WeekOfMonth date="WEEK OF DECEMBER 25TH" />
      </div>
    </section>
  );
};

export default OnTheMenuFirstSection;
