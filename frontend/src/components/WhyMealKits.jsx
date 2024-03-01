/* eslint-disable react/prop-types */
import '../App.css';

const WhyMealKits = ({ kitBox }) => {
  return (
    <div className="kitBox fontCera md:text-[15px] text-[12px] text-center text-[#303236] flex flex-col justify-center items-center">
      <img src={kitBox.src} alt="" />
      <p className="font-bold mb-[16px] mt-4 h-8">{kitBox.title}</p>
      <p className="hidden sm:block h-4">{kitBox.descriptionOne}</p>
    </div>
  );
};

export default WhyMealKits;
