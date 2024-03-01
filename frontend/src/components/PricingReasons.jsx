import WhyChooseMealKit from '../data/WhyChooseMealKit.jsx';

const PricingReasons = () => {
  return (
    <section className="h-auto bg-[#002684]">
      <h1 className="text-white text-[36px] fontCera font-semibold text-center tracking-[5px] pt-[96px] leading-[45px]">
        WHY CHOOSE A<p className="text-[#00a0df] fontChronicle text-[45px] mb-[72px] tracking-normal">Blue Apron Meal Kit?</p>
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center min-[1250px]:gap-16 pb-[96px]">
        {WhyChooseMealKit.map((item, index) => {
          return (
            <div key={index} className="w-[430px] text-white text-center fontCera mt-10">
              <h3 className="mb-[10px] font-semibold">{item.title}</h3>
              <p className="text-[15px]">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingReasons;
