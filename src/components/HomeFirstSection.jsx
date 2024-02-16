import '../App.css';
const HomeFirstSection = () => {
  return (
    <section>
      <div className="relative">
        <img className="w-full h-[670px] object-cover object-left" src="https://media.blueapron.com/assets/registration/homepage/desktop-splash-v2.webp?height=800&quality=90&format=pjpg" alt="" />
        <h1 className="fontChronicle absolute md:top-2/4 top-1/4 md:left-10 left-[16%]  text-5xl text-blue-700">
          The meal kit that
          <br />
          puts quality first
        </h1>
        <button className="fontCera absolute md:top-2/3 top-[40%] md:left-10 left-[30%] mt-5 rounded-3xl	h-[50px] w-[180px] bg-blue-700 text-white tracking-widest">SEE PLANS</button>
      </div>

      <div className="rating-section flex flex-col items-center justify-center bg-coolGray-200 h-[250px] gap-2 fontCera">
        <span className="text-[32px] font-bold">
          Our customers think we're <span className="text-[32px] text-[#00a0df] text-center m-auto md:inline block">EXCELLENT</span>
        </span>
        <div>
          <img src="https://media.blueapron.com/assets/registration/homepage/appstore_ratings_icon.svg" className="inline-block" /> <span className="font-bold text-4xl text-[#303236] align-middle leading-3">4.7</span>
        </div>
        <p className="text-[#303236]">
          Based on <span className="font-bold">38.8K</span> App Store Ratings
        </p>
        <button className="rounded-3xl	h-[50px] w-[180px] font-medium bg-blue-700 text-white tracking-widest mt-3">SEE PLANS</button>
      </div>
    </section>
  );
};

export default HomeFirstSection;
