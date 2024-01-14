/* eslint-disable react/prop-types */
import '../App.css';

const WhyMealKits = ({ kitBox }) => {
  return (
    <div className="kitBox fontCera text-[15px] text-center text-[#303236]">
      <img src={kitBox.src} alt="" />
      <p className="font-bold mb-[12px] mt-4">{kitBox.title}</p>
      <p>{kitBox.descriptionOne}</p>
      <p>{kitBox.descriptionTwo}</p>
    </div>
  );
};

export default WhyMealKits;
