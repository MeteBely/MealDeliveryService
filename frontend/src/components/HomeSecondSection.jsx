import HomePageMeals from '../data/HomePageMeals.jsx';
import WeeklyOptionsMenu from '../components/WeeklyOptionsMenu.jsx';

const HomeSecondSection = () => {
  return (
    <section>
      <div className="weeklyOptionsMenus">
        <h2 className="text-[#002684] text-center font-semibold text-4xl tracking-[5.4px] mt-12 mb-2">CHOOSE FROM</h2>
        <h2 className="fontChronicle text-center text-5xl text-[#00a0df] mb-10">70+ weekly options</h2>
        <div className="flexColDiv flex flex-col items-center justify-center">
          <div className="flexrowDiv flex flex-row flex-wrap m-auto gap-8 justify-center items-center">
            {HomePageMeals.map((mealBox, index) => {
              return <WeeklyOptionsMenu mealBox={mealBox} key={index} />;
            })}
          </div>
        </div>
        <button className="block w-[260px] h-[50px] rounded-3xl bg-white text-[#002c9b] mx-auto mt-[30px] mb-[46px] border-[#002c9b] border-2 tracking-[2.5px] text-[16px] font-medium fontCera">BROWSE OUR MENUS</button>
      </div>
    </section>
  );
};

export default HomeSecondSection;
