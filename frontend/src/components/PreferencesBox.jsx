import { useState } from 'react';
import tick from './../assets/tick.png';

// eslint-disable-next-line react/prop-types
const PreferencesBox = ({ title, description, img, imgBlue }) => {
  const [mouseOnBox, setMouseOnBox] = useState(false);
  const [mouseOnClick, setMouseOnClick] = useState(false);

  return (
    <button onClick={() => setMouseOnClick(!mouseOnClick)} onMouseOver={() => setMouseOnBox(true)} onMouseOut={() => setMouseOnBox(false)} className={`relative w-[380px] border-2 h-[84px] rounded-md flex flex-row justify-start items-center gap-4 box-content transition-all duration-200 ease-linear hover:border-[#002684] hover:border-[2px] ${mouseOnClick ? 'border-[#002684] ' : 'border-[#d3d6cd]'}`}>
      <div className="ml-[16px]">
        <img src={`${mouseOnClick || mouseOnBox ? imgBlue : img}`} alt="" className="h-[40px] w-[40px] mr-2" />
      </div>
      <div>
        <p className={`text-[16px] text-left transition-all duration-200 ease-linear ${mouseOnBox || mouseOnClick ? 'text-[#002684]' : 'text-[#303236]'}`}>{title}</p>
        <p className="text-[#6a6d75] text-[15px] leading-[16px] text-left">{description}</p>
      </div>
      <img src={tick} className={`${mouseOnClick ? 'absolute top-2 right-2 inline-block w-[21px] h-[21px]' : 'hidden'}`}></img>
    </button>
  );
};

export default PreferencesBox;
