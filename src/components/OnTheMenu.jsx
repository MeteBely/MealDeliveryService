import React, { useEffect, useState } from 'react';
import '../App.css';
import Offer from './Offer';
import WeekOfMonth from './WeekOfMonth';
import BuildYourPlan from './BuildYourPlan';
import { SignatureTwoServingFirstWeek, SignatureTwoServingSecondWeek, SignatureTwoServingThirdWeek, SignatureTwoServingFourthWeek } from '../data/onTheMenuDatas/SignatureTwoServing';
import { SignatureFourServingFirstWeek, SignatureFourServingSecondWeek, SignatureFourServingThirdWeek, SignatureFourServingFourthWeek } from '../data/onTheMenuDatas/SignatureForHourFourServing';
import { AddOnsWeeklyOptionsFirstWeek, AddOnsWeeklyOptionsSecondWeek, AddOnsWeeklyOptionsThirdWeek, AddOnsWeeklyOptionsFourthWeek } from '../data/onTheMenuDatas/Add-OnsWeeklyOptions';
import { VegetarianTwoServingFirstWeek, VegetarianTwoServingSecondWeek, VegetarianTwoServingThirdWeek, VegetarianTwoServingFourthWeek } from '../data/onTheMenuDatas/VegetarianTwoServing';
import { WellnessTwoServingFirstWeek, WellnessTwoServingSecondWeek, WellnessTwoServingThirdWeek, WellnessTwoServingfourthWeek } from '../data/onTheMenuDatas/WellnessTwoServing';
import MonthlyMenuItem from './MonthlyMenuItem';

const OnTheMenu = () => {
  const [subTxt, setSubTxt] = useState('Choose from an ever-changing mix of meat, fish, and health-conscious offerings.');
  const [activeBtn, setActiveBtn] = useState('btnOne');
  const [activeMenusFirstWeek, setActiveMenusFirstWeek] = useState(SignatureTwoServingFirstWeek);
  const [activeMenusSecondWeek, setActiveMenusSecondWeek] = useState(SignatureTwoServingSecondWeek);
  const [activeMenusThirdWeek, setActiveMenusThirdWeek] = useState(SignatureTwoServingThirdWeek);
  const [activeMenusFourthWeek, setActiveMenusFourthWeek] = useState(SignatureTwoServingFourthWeek);
  const updateActiveMenus = () => {
    if (activeBtn === 'btnOne') {
      setActiveMenusFirstWeek(SignatureTwoServingFirstWeek);
      setActiveMenusSecondWeek(SignatureTwoServingSecondWeek);
      setActiveMenusThirdWeek(SignatureTwoServingThirdWeek);
      setActiveMenusFourthWeek(SignatureTwoServingFourthWeek);
    } else if (activeBtn === 'btnTwo') {
      setActiveMenusFirstWeek(VegetarianTwoServingFirstWeek);
      setActiveMenusSecondWeek(VegetarianTwoServingSecondWeek);
      setActiveMenusThirdWeek(VegetarianTwoServingThirdWeek);
      setActiveMenusFourthWeek(VegetarianTwoServingFourthWeek);
    } else if (activeBtn === 'btnThree') {
      setActiveMenusFirstWeek(WellnessTwoServingFirstWeek);
      setActiveMenusSecondWeek(WellnessTwoServingSecondWeek);
      setActiveMenusThirdWeek(WellnessTwoServingThirdWeek);
      setActiveMenusFourthWeek(WellnessTwoServingfourthWeek);
    } else if (activeBtn === 'btnFour') {
      setActiveMenusFirstWeek(SignatureFourServingFirstWeek);
      setActiveMenusSecondWeek(SignatureFourServingSecondWeek);
      setActiveMenusThirdWeek(SignatureFourServingThirdWeek);
      setActiveMenusFourthWeek(SignatureFourServingFourthWeek);
    } else if (activeBtn === 'btnFive') {
      setActiveMenusFirstWeek(AddOnsWeeklyOptionsFirstWeek);
      setActiveMenusSecondWeek(AddOnsWeeklyOptionsSecondWeek);
      setActiveMenusThirdWeek(AddOnsWeeklyOptionsThirdWeek);
      setActiveMenusFourthWeek(AddOnsWeeklyOptionsFourthWeek);
    }
  };

  useEffect(() => {
    updateActiveMenus();
  }, [activeBtn]);

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
              <button
                onClick={() => {
                  setActiveBtn('btnOne');
                  setSubTxt('Choose from an ever-changing mix of meat, fish, and health-conscious offerings.');
                }}
                className={`flex flex-col justify-center items-center w-[15%] pb-[20px] ${activeBtn === 'btnOne' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
              >
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">2 SERVING</span>
                <span className="pt-[12px]  text-[18px] fontChronicle text-[#002c9b]">Signature</span>
              </button>
              <button
                onClick={() => {
                  setActiveBtn('btnTwo');
                  setSubTxt('Meat-free dishes that celebrate the best of seasonal produce.');
                }}
                className={`flex flex-col justify-center items-center w-[15%] pb-[20px] ${activeBtn === 'btnTwo' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
              >
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">2 SERVING</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Vegetarian</span>
              </button>
              <button
                onClick={() => {
                  setActiveBtn('btnThree');
                  setSubTxt('Balanced, nutritionist-approved recipes designed for your holistic health.');
                }}
                className={`flex flex-col justify-center items-center w-[15%] pb-[20px] ${activeBtn === 'btnThree' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
              >
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">2 SERVING</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Wellness</span>
              </button>
              <button
                onClick={() => {
                  setActiveBtn('btnFour');
                  setSubTxt('Recipes for families, get-togethers, or left-overs, with a variety of options that change weekly, including meat, fish and other health-conscious offerings.');
                }}
                className={`flex flex-col justify-center items-center w-[20%] pb-[20px] ${activeBtn === 'btnFour' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
              >
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">4 SERVING</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Signature for Hour</span>
              </button>
              <button
                onClick={() => {
                  setActiveBtn('btnFive');
                  setSubTxt('Complete your meal with appetizers and sides or add even more Blue Apron to your day with breakfast and dessert options.');
                }}
                className={`flex flex-col justify-center items-center w-[23%] pb-[20px] ${activeBtn === 'btnFive' ? 'border-[#002c9b] border-b-[3px]' : ''}`}
              >
                <span className="fontCera text-[15px] font-semibold text-[#002c9b] tracking-[.27em]">WEEKLY OPTIONS</span>
                <span className="pt-[12px] text-[18px] fontChronicle text-[#002c9b]">Add-Ons</span>
              </button>
            </div>
            <p className="text-center fontCera text-[#002c9b] leading-[28px] w-[650px] h-[40px] m-auto mt-[20px] mb-[57px]">{subTxt}</p>
            <WeekOfMonth date="WEEK OF DECEMBER 25TH" />
          </div>
        </section>
        <section className="mt-[50px]">
          <div className="flex flex-row flex-wrap w-[1180px] m-auto gap-[25px] justify-start items-center mb-[57px]">
            {activeMenusFirstWeek.map((item, index) => {
              if (activeMenusFirstWeek.length >= 6 && index == 6) {
                return (
                  <React.Fragment key={index}>
                    <BuildYourPlan />
                    <MonthlyMenuItem menuImg={item.img} menuType={item.type} menuName={item.name} menuDetail={item.detail} menuTime={item.time} key={index} isVegetarian={item.isVegetarian} />
                  </React.Fragment>
                );
              } else if (activeMenusFirstWeek.length < 6 && (index == 4 || index == 3 || index == 5)) {
                return (
                  <React.Fragment key={index}>
                    <MonthlyMenuItem menuImg={item.img} menuType={item.type} menuName={item.name} menuDetail={item.detail} menuTime={item.time} key={index} isVegetarian={item.isVegetarian} />
                    <BuildYourPlan />
                  </React.Fragment>
                );
              } else {
                return <MonthlyMenuItem menuImg={item.img} menuType={item.type} menuName={item.name} menuDetail={item.detail} menuTime={item.time} isVegetarian={item.isVegetarian} key={index} />;
              }
            })}
          </div>
          <WeekOfMonth date="WEEK OF JANUARY 1ST" />
        </section>
        <section className="mt-[50px]">
          <div className="flex flex-row flex-wrap w-[1180px] m-auto gap-[25px] justify-start items-center mb-[57px]">
            {activeMenusSecondWeek.map((item, index) => {
              return <MonthlyMenuItem menuImg={item.img} menuType={item.type} menuName={item.name} menuDetail={item.detail} menuTime={item.time} key={index} isVegetarian={item.isVegetarian} />;
            })}
          </div>
          <WeekOfMonth date="WEEK OF JANUARY 8TH" />
        </section>
        <section className="mt-[50px]">
          <div className="flex flex-row flex-wrap w-[1180px] m-auto gap-[25px] justify-start items-center mb-[57px]">
            {activeMenusThirdWeek.map((item, index) => {
              return <MonthlyMenuItem menuImg={item.img} menuType={item.type} menuName={item.name} menuDetail={item.detail} menuTime={item.time} key={index} isVegetarian={item.isVegetarian} />;
            })}
          </div>
          <WeekOfMonth date="WEEK OF JANUARY 15TH" />
        </section>
        <section className="mt-[50px]">
          <div className="flex flex-row flex-wrap w-[1180px] m-auto gap-[25px] justify-start items-center mb-[57px]">
            {activeMenusFourthWeek.map((item, index) => {
              return <MonthlyMenuItem menuImg={item.img} menuType={item.type} menuName={item.name} menuDetail={item.detail} menuTime={item.time} key={index} isVegetarian={item.isVegetarian} />;
            })}
          </div>
        </section>
      </main>
      <footer>
        <div className="w-[600px] m-auto text-center">
          <button className="text-white bg-[#f26c29] border border-[#f26c29] px-[33px] rounded-[2px] tracking-[2px] mb-2 fontCera h-[48px] text-[15px]">SEE PLANS</button>
          <p className="mb-4 text-[#696d75] text-[18px] italic fontCera">Or…</p>
          <p className="mb-[12px] text-[#696d75] text-[18px] italic fontCera">
            Want to see all our recipes? Check out our <a className="text-[#002684]">Cookbook</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default OnTheMenu;
