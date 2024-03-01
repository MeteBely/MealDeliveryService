import WhyUsingThis from '../data/WhyUsingThis.jsx';
import WhyMealKits from '../components/WhyMealKits.jsx';

const HomeThirdSection = () => {
  return (
    <section>
      <span className="fontCera text-[40px] font-bold text-[#002c9b] text-center block">465+ million meals shipped</span>
      <p className="fontCera text-[20px] text-center text-[#303236] mb-8">
        See why home cooks stick with the
        <br />
        original American meal kit.
      </p>
      <div className="flex flex-row gap-12 justify-center items-center">
        {WhyUsingThis.map((item, index) => {
          return <WhyMealKits kitBox={item} key={index} />;
        })}
      </div>
      <p className="fontCera text-center text-[#303236] mt-14">
        Get started for as little as <span className="font-bold">$7.99 per serving</span>
      </p>
      <button className="fontCera block m-auto rounded-3xl	h-[50px] w-[180px] bg-blue-700 text-white tracking-widest mt-5">SEE PLANS</button>
    </section>
  );
};

export default HomeThirdSection;
