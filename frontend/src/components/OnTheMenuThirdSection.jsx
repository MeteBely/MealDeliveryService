/* eslint-disable react/prop-types */
import MonthlyMenuItem from '../components/MonthlyMenuItem';
import WeekOfMonth from '../components/WeekOfMonth';

const OnTheMenuThirdSection = ({ activeMenusSecondWeek }) => {
  return (
    <section className="mt-[50px]">
      <div className="flex flex-row flex-wrap w-[440px] min-[800px]:w-[790px] min-[1200px]:w-[1180px] m-auto gap-[25px] justify-center min-[1200px]:justify-start items-center mb-[57px]">
        {activeMenusSecondWeek.map((item, index) => {
          return <MonthlyMenuItem menuImg={item.img} menuType={item.type} menuName={item.name} menuDetail={item.detail} menuTime={item.time} key={index} isVegetarian={item.isVegetarian} />;
        })}
      </div>
      <WeekOfMonth date="WEEK OF JANUARY 8TH" />
    </section>
  );
};

export default OnTheMenuThirdSection;
