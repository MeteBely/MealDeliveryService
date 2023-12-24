import { FaRegClock } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const MonthlyMenuItem = ({ menuImg, menuType, menuName, menuDetail, menuTime, isVegetarian }) => {
  return (
    <div className="h-[415px] max-w-[375px] rounded-[6px] border border-[#e4e6eb] monthlyMenuBox overflow-hidden pb-6">
      <div className="relative">
        <img src={menuImg} alt="" />
        <span className={`${menuType !== '' ? (menuType === 'Premium' ? 'px-[7px] py-1 bg-[#1eb389]' : 'bg-[#002684] px-[7px] py-1') : ''} absolute bottom-[7px] text-[#fff] text-[13px] tracking-[.11em] mb-[10px] fontCera font-semibold`}>{menuType}</span>
      </div>
      <div className="mt-[11px] ml-[12px]">
        <p className="text-[20px] text-[#002c9b] fontChronicle">{menuName}</p>
        <p className="text-[#424242] pt-[5px] fontCera tracking-[-.01em] font-thin">{menuDetail}</p>
      </div>
      <div className="pt-4 ml-[12px] flex flex-row justify-start items-center">
        <span>
          <FaRegClock color="#00a0df" size={18} />
        </span>
        <p className="text-[#00a0df] ml-2 text-[15px] tracking-[1.5px] fontCera ">{menuTime} MIN</p>
        <span className={`${isVegetarian ? 'border-r border-[#e4e6eb] h-[22px] mx-2' : ''}`}></span>
        <span>{isVegetarian ? <FaLeaf color="#1DB392" size={18} /> : ''}</span>
      </div>
    </div>
  );
};

export default MonthlyMenuItem;
