import WeeklyOptionsImages from '../data/WeeklyOptionsImages.jsx';

const PlusWeeklyOptions = () => {
  return (
    <section className="bg-coolGray-200 h-[475px] min-[1100px]:mt-0 mt-[500px] pt-8">
      <h1 className="text-[#002684] text-center fontChronicle text-[24px] mb-2">Choose from 70+ weekly options</h1>
      <p className="text-[#696d75] text-center fontCera mb-[25px] ">We have meal kits to fit many different diets and lifestyles.</p>
      <div className="flex flex-row gap-0 justify-center items-center">
        {WeeklyOptionsImages.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.src} className="w-[135px]" />
              <p className="text-[#696d75] fontCera mt-2 text-center mb-[15px] text-[15px] h-[30px]">{item.title}</p>
            </div>
          );
        })}
      </div>
      <button className="text-[#002c9b] border-2 rounded-3xl my-8 border-[#002c9b] m-auto block text-[12px] fontCera font-semibold w-[175px] h-[35px]">BROWSE OUR MENUS</button>
    </section>
  );
};

export default PlusWeeklyOptions;
