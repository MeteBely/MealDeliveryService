import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
const MarketSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
  };

  const navigate = useNavigate();
  return (
    <section className="mb-8 bg-[#AED3E4] h-auto w-[100%]">
      <div className="w-[400px] min-[953px]:w-[55%] min-[1240px]:w-[850px] m-auto p-8">
        <Slider {...settings}>
          <div className=" bg-[#E6EFFE] h-auto rounded-[32px]">
            <div className="ml-2">
              <h2 className="text-[#002c9b] fontChronicle text-[24px] min-[953px]:text-[30px] h-[55px] min-[953px]:h-[75px] flex items-center justify-center">Ready to Cook Meal Kit</h2>
              <p className="mb-[10px] text-left text-[#303236] fontCera text-[14px] min-[953px]:text-[18px] leading-6 h-[60px]">Featuring pre-chopped ingredients and a recyclable baking tin, our Ready to Cook recipes make prep and cleaning a breeze.</p>
              <button onClick={() => navigate('/market/categories/meal-kits')} className="bg-[#002684] text-white mb-2 rounded-[22.5px] text-[10px] min-[953px]:text-[14px] fontCera tracking-widest h-[30px] w-[100px] min-[953px]:h-[45px] min-[953px]:w-[150px]">
                ORDER NOW
              </button>
            </div>
            <div className="">
              <img className="w-[800px] h-full rounded-[32px] m-auto object-cover" src="https://media.blueapron.com/hero_images/152/1703696003-48-0001-6663/570c18ff-b565-4f17-a0dc-196b979fe1ae.jpg?width=800" />
            </div>
          </div>
          <div className=" bg-[#E6EFFE] h-auto w-[500px] rounded-[32px]">
            <div className="ml-2">
              <h2 className=" text-[#002c9b] fontChronicle font-black text-[24px] min-[953px]:text-[30px] h-[55px] pt-[36px] min-[953px]:h-[75px] flex items-center justify-center">Heat & Eat Makes Meals Even Easier</h2>
              <p className="mb-[10px] text-left text-[#303236] fontCera text-[14px] min-[953px]:text-[18px] leading-6 h-[60px] pt-[36px]">Single-serving meals ready in 5 minutes or less!</p>
              <button onClick={() => navigate('/market/categories/meal-kits')} className="bg-[#002684] text-white mb-2 rounded-[22.5px] text-[10px] min-[953px]:text-[14px] fontCera tracking-widest h-[30px] w-[100px] min-[953px]:h-[45px] min-[953px]:w-[150px]">
                ORDER NOW
              </button>
            </div>
            <div className="">
              <img className="w-[800px] h-full rounded-[32px] m-auto object-cover" src="https://media.blueapron.com/hero_images/155/1708700411-47-0001-9650/Cavatappi-Beef-Bolognese-Fresh_1843_Horiz.jpg?width=800" />
            </div>
          </div>
          <div className=" bg-[#E6EFFE] h-auto w-[500px] rounded-[32px]">
            <div className="ml-2">
              <h2 className=" text-[#002c9b] fontChronicle text-[24px] min-[953px]:text-[30px] h-[55px] min-[953px]:h-[75px] flex items-center justify-center">Shop Meal Kits</h2>
              <p className="mb-[10px] text-left text-[#303236] fontCera text-[14px] min-[953px]:text-[18px] leading-6 h-[60px]">No subscription needed.</p>
              <button onClick={() => navigate('/market/categories/meal-kits')} className="bg-[#002684] text-white mb-2 rounded-[22.5px] text-[10px] min-[953px]:text-[14px] fontCera tracking-widest h-[30px] w-[100px] min-[953px]:h-[45px] min-[953px]:w-[150px]">
                ORDER NOW
              </button>
            </div>
            <div className="">
              <img className="w-[800px] h-full rounded-[32px] m-auto object-cover" src="https://media.blueapron.com/hero_images/153/1703696477-48-0002-2425/31a83ba7-eed4-4a60-9716-c8c9cecca17a.jpg?width=800" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default MarketSlider;
