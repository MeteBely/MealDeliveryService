/* eslint-disable react/prop-types */
import BuildYourPlan from '../components/BuildYourPlan';
import React from 'react';
import MonthlyMenuItem from '../components/MonthlyMenuItem';
import WeekOfMonth from '../components/WeekOfMonth';

const OnTheMenuSecondSection = ({ activeMenusFirstWeek }) => {
  return (
    <section className="mt-[180px]">
      <div className="flex flex-row flex-wrap w-[440px] min-[800px]:w-[790px] min-[1200px]:w-[1180px] m-auto gap-[25px] justify-center min-[1200px]:justify-start items-center mb-[57px]">
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
  );
};

export default OnTheMenuSecondSection;
