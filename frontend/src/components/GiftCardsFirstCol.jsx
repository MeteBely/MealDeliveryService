/* eslint-disable react/prop-types */
import whiteBlueApronIcon from '../assets/whiteBlueApronIcon.png';

const GiftCardsFirstCol = ({ amount }) => {
  return (
    <div className="firstCol ml-4">
      <div className="bg-[#0f346c] relative w-[308px] rounded-[20px] h-[200px] fontCera mb-[50px] giftCard">
        <span className="absolute top-[10px] left-[20px] text-[36px] text-[#fff] font-semibold">${amount}</span>
        <p className="absolute top-[58px] text-[12px] text-[#fff] left-[20px]">MEAL E-GIFT CARD</p>
        <img className="w-[52px] absolute bottom-[16px] right-[20px]" src={whiteBlueApronIcon} alt="" />
      </div>
      <ul className="list-disc text-[#696d75] mt-[50px] fontCera ml-4 text-[14px]">
        <li className="mb-[20px]">
          Recipients can use a Meal E-Gift Card towards
          <br />
          any subscription meal plan or Market items
        </li>
        <li className="mb-[20px]">
          E-Gift Cards are subject to our{' '}
          <a href="" className="text-[#245091] hover:underline">
            Gift Card Terms
          </a>
        </li>
        <li className="mb-[20px]">
          Blue Apron Gift Cards never expire and carry
          <br />
          no fees
        </li>
      </ul>
    </div>
  );
};

export default GiftCardsFirstCol;
