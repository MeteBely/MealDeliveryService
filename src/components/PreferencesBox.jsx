import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const PreferencesBox = ({ title, description, img }) => {
  const [mouseOnBox, setMouseOnBox] = useState(false);

  return (
    <button onMouseOver={() => setMouseOnBox(true)} onMouseOut={() => setMouseOnBox(false)} className={`w-[380px] border-2 border-[#d3d6cd]  h-[84px] rounded-md flex flex-row justify-start items-center gap-4 box-content transition-all duration-200 ease-linear hover:border-[#002684] hover:border-[2px]`}>
      <div className="ml-[16px]">
        <img src={img} alt="" className="h-[40px] w-[40px] mr-2" />
      </div>
      <div>
        <p className={`text-[16px] text-[#303236] text-left transition-all duration-200 ease-linear ${mouseOnBox === true ? 'text-[#012684]' : ''}`}>{title}</p>
        <p className="text-[#6a6d75] text-[15px] leading-[16px] text-left">{description}</p>
      </div>
    </button>
  );
};

export default PreferencesBox;
