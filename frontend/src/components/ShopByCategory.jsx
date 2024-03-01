import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
  const navigate = useNavigate();
  return (
    <section className="flex w-full mt-16 mb-[150px] pl-2 ">
      <div className="w-full fontCera ">
        <h3 className="text-[22px] mb-[20px] font-semibold text-[#303236] w-[200px] m-auto min-[640px]:m-0">Shop By Category</h3>
        <div className="flex flex-col min-[640px]:flex-row items-center justify-start gap-8 text-[18px] font-semibold w-full">
          <div className="w-[400px]">
            <img className="h-[360px] w-[360px] object-cover" src="https://i.insider.com/5c9107145b066e24223993c9?width=1136&format=jpeg" alt="" />
            <a onClick={() => navigate('/market/categories/meal-kits')} className="hover:underline inline-block mt-[12px]" href="">
              Meal Kits
            </a>
            <FaLongArrowAltRight className="inline-block ml-2 mb-[6px]" />
          </div>
          <div className="w-[400px]">
            <img className="h-[360px] object-cover" src="https://media.blueapron.com/agora/images/taxon/categories/seasonal-boxes/icon/2401ba3a59b9c69f2f4bd81fd2aa247b.jpg?width=400" alt="" />
            <a onClick={() => navigate('/market/categories/seasonal-boxes')} className="hover:underline inline-block mt-[12px]" href="">
              Seasonel Boxes
            </a>
            <FaLongArrowAltRight className="inline-block ml-2 mb-[6px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
