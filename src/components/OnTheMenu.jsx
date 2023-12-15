import { useState } from 'react';
import '../App.css';
import Offer from './Offer';

const OnTheMenu = () => {
  const [subTxt, setSubTxt] = useState('Choose from an ever-changing mix of meat, fish, and health-conscious offerings.');
  const handleButtonClick = (buttonIndex) => {
    const Btn1 = document.getElementById('btnOne');
    const Btn2 = document.getElementById('btnTwo');
    const Btn3 = document.getElementById('btnThree');
    const Btn4 = document.getElementById('btnFour');
    const Btn5 = document.getElementById('btnFive');
    if (buttonIndex === 0) {
      Btn1.classList.add('activeBtn');
      setSubTxt('Choose from an ever-changing mix of meat, fish, and health-conscious offerings.');
    } else {
      Btn1.classList.remove('activeBtn');
    }

    if (buttonIndex === 1) {
      Btn2.classList.add('activeBtn');
      setSubTxt('Meat-free dishes that celebrate the best of seasonal produce.');
    } else {
      Btn2.classList.remove('activeBtn');
    }

    if (buttonIndex === 2) {
      Btn3.classList.add('activeBtn');
      setSubTxt('Balanced, nutritionist-approved recipes designed for your holistic health.');
    } else {
      Btn3.classList.remove('activeBtn');
    }

    if (buttonIndex === 3) {
      Btn4.classList.add('activeBtn');
      setSubTxt('Recipes for families, get-togethers, or left-overs, with a variety of options that change weekly, including meat, fish and other health-conscious offerings.');
    } else {
      Btn4.classList.remove('activeBtn');
    }

    if (buttonIndex === 4) {
      Btn5.classList.add('activeBtn');
      setSubTxt('Complete your meal with appetizers and sides or add even more Blue Apron to your day with breakfast and dessert options.');
    } else {
      Btn5.classList.remove('activeBtn');
    }
  };
  return (
    <>
      <header className="mt-[60px] border-t border-t-gray-300">
        <div className="h-[120px] bg-[#f8f9fa] pt-[22px]">
          <Offer />
        </div>
      </header>
      <main>
        <section>
          <div className="h-[360px]">
            <h1 className="text-[#002c9b] fontChronicle text-[58px] pb-1 text-center mt-[55px]">Explore Our Meal Delivery Menus</h1>
            <div className="flex flex-row m-auto w-[920px] border-b border-b-[#002c9b] justify-between pt-4">
              <button id="btnOne" className="flex flex-col justify-center items-center w-[15%] pb-[20px] activeBtn" onClick={() => handleButtonClick(0)}>
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">2 SERVING</span>
                <span className="pt-[12px]  text-[18px] fontChronicle text-[#002c9b]">Signature</span>
              </button>
              <button id="btnTwo" className="flex flex-col justify-center items-center  w-[15%] pb-[20px]" onClick={() => handleButtonClick(1)}>
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">2 SERVING</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Vegetarian</span>
              </button>
              <button id="btnThree" className="flex flex-col justify-center items-center w-[15%] pb-[20px]" onClick={() => handleButtonClick(2)}>
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">2 SERVING</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Wellness</span>
              </button>
              <button id="btnFour" className="flex flex-col justify-center items-center w-[20%] pb-[20px]" onClick={() => handleButtonClick(3)}>
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">4 SERVING</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Signature for Hour</span>
              </button>
              <button id="btnFive" className="flex flex-col justify-center items-center w-[23%] pb-[20px]" onClick={() => handleButtonClick(4)}>
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">WEEKLY OPTIONS</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Add-Ons</span>
              </button>
            </div>
            <p className="text-center fontCera text-[#002c9b] leading-[28px] w-[650px] h-[40px] m-auto mt-[20px] mb-[57px]">{subTxt}</p>
            <div className="w-full flex flex-row justify-center items-center gap-[675px] selectMenuBox pb-[5px]">
              <span className="tracking-[.27em] text-[#002c9b] text-[18px] fontCera font-semibold">WEEK OF DECEMBER 18TH</span>
              <button className="fontCera text-[14px] rounded-[30px] h-[45px] px-[33px] w-[180px] bg-blue-700 text-white tracking-[2px] font-semibold">SEE PLANS</button>
            </div>
          </div>
        </section>
        <section className="mt-[200px]">
          <div></div>
        </section>
      </main>
    </>
  );
};

export default OnTheMenu;
