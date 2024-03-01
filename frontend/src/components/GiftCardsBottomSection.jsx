import { Link } from 'react-router-dom';

const GiftCardsBottomSection = () => {
  return (
    <div className="bottomItems w-[63%] m-auto block mt-8">
      <p className="mb-[15px] text-[13px] text-[#6a6d75] text-center">E-Gift Cards are non-refundable (unless required by law). E-Gift Card may only be used for Meal Subscription or Market items. Your payment card will be charged at the time of purchase. Product and shipping restrictions may apply.</p>
      <div className="text-[#0f346c] text-[14px] font-semibold text-center">
        <div className="rounded-[5px] inline-block bg-white m-[10px] w-[250px] h-[60px] pt-[20px]">
          <Link to="/pages/corporate-sales" className="cursor-pointer hover:underline" href="">
            Need more than 50 gift cards?
          </Link>
        </div>
        <div className="rounded-[5px] inline-block bg-white m-[10px] w-[250px] h-[60px] pt-[20px]">
          <Link to="/pages/redeem" className="cursor-pointer hover:underline" href="">
            Redeem your Blue Apron gift.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftCardsBottomSection;
