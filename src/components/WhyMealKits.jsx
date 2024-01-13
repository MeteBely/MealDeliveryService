/* eslint-disable react/prop-types */
import '../App.css';

const WhyMealKits = ({ kitBox }) => {
  return (
    <div className="kitBox">
      <img src={kitBox.src} alt="" />
      <p className="fontCera text-[15px] font-bold text-[#303236] text-center mb-[12px] mt-4">{kitBox.title}</p>
      <p className="fontCera text-[15px] text-center text-[#303236] ">{kitBox.descriptionOne}</p>
      <p className="fontCera text-[15px] text-center text-[#303236] ">{kitBox.descriptionTwo}</p>
    </div>
  );
};

export default WhyMealKits;
