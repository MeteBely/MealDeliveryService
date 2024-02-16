import DividerIcon from './DividerIcon';
const HomeFourthSection = () => {
  return (
    <section className="images mt-[64px] w-full">
      <div className="firstImage w-full h-[550px] relative">
        <img src="https://media.blueapron.com/assets/registration/homepage/cooking-pot.webp?height=600&quality=90" className="w-full h-[550px] object-cover" />
        <div className="positionCenter absolute top-1/2 left-1/2 bg-white w-[400px]  md:w-[614px] h-[300px]">
          <p className="fontCera pt-[60px] text-[16px]  md:text-[20px] text-center text-[#00a0df] font-bold">Celebrating 10 years of happy customers</p>
          <p className="fontChronicle text-[22px] md:text-[28px] text-center text-[#002c9b] mt-[28px] leading-normal">We changed from HelloFresh to Blue Apron and it was the best choice we made!</p>
          <p className="text-center text-[#00a0df] my-4">
            <DividerIcon />
          </p>
          <p className="fontCera text-[#002c9b] md:text-[16px] text-[12px] text-center pb-[39px] font-bold tracking-[2.4px]">— LESLIE</p>
        </div>
      </div>
      <div className="secondImage relative sm:w-2/3 w-full h-[300px] m-auto mt-16 fontCera">
        <img src="https://media.blueapron.com/assets/registration/homepage/gnocchi-ingredients.webp?height=400&quality=90" className="w-full h-[300px] object-cover" />
        <div className="positionCenter absolute top-1/2 left-1/2 bg-white w-2/3 h-[220px]">
          <p className="text-[32px] font-bold text-center mb-[4px] text-[#002c9b] mt-8">Get started now</p>
          <p className="text-center mb-[15px] text-[#6a6d75] text-[18px]">
            for as little as <span className="font-bold text-[#00a0df] text-[16px]">$7.99 per serving</span>
          </p>
          <button className="fontCera rounded-3xl m-auto mt-4 block	h-[50px] w-[225px] bg-blue-700 text-white tracking-widest">SEE PLANS</button>
        </div>
      </div>
    </section>
  );
};

export default HomeFourthSection;
