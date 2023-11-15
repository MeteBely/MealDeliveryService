import React from 'react'
import Slider from "react-slick";
import FeaturedMeals from '../data/FeaturedMeals';
import MarketMeals from './MarketMeals';
import ShopByCategory from './ShopByCategory';
import MiniDownHeader from './MiniDownHeader';
const Market = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed:3000,
      autoplay:true,
      centerMode:true,
      centerPadding:'450px',
      arrows:false
      };
  return (
  <>
    <MiniDownHeader/>
    <section className='mt-[60px] pt-[25px] h-[550px]'>
    <div className='m-auto block'>
        <Slider {...settings} className='text-center'>
          <div className=' bg-[#E6EFFE] relative h-[450px] w-[500px] rounded-[32px]'>
            <div className='absolute top-1/2 positionCenterX ml-10'>
                <h2 className='mb-[10px] text-[#002c9b] fontChronicle text-[30px]'>Seasonal Boxes</h2>
                <p className='mb-[10px] text-left text-[#303236] fontCera text-[18px] leading-6'>Limited-time boxes featuring<br />seasonal menus and<br />entertaining extras.</p>
                <button className='bg-[#002684] text-white rounded-[22.5px] text-[14px] fontCera tracking-widest h-[45px] w-[150px]'>ORDER NOW</button>
            </div>
            <img className='w-[672px] h-full absolute top-0 right-0 rounded-[32px]' src='https://media.blueapron.com/hero_images/151/1698709249-48-0033-9512/Additional_Roast-OBO_656.jpg?width=800'/>
          </div>
          <div className=' bg-[#E6EFFE] relative h-[450px] w-[500px] rounded-[32px]'>
            <div className='absolute top-1/2 positionCenterX ml-16'>
                <h2 className='mb-[10px] text-[#002c9b] fontChronicle text-[30px]'>Shop Meal Kits</h2>
                <p className='mb-[10px] text-left text-[#303236] fontCera text-[18px]'>No subscription needed.</p>
                <button className='bg-[#002684] text-white rounded-[22.5px] text-[14px] fontCera tracking-widest h-[45px] w-[150px]'>ORDER NOW</button>
            </div>
            <img className='w-[672px] h-full absolute top-0 right-0 rounded-[32px]' src='https://media.blueapron.com/hero_images/148/1692974103-21534-0006-4752/image-1500x1000.jpg?width=800'/>
          </div>
          <div className=' bg-[#E6EFFE] relative h-[450px] w-[500px] rounded-[32px]'>
            <div className='absolute top-1/2 positionCenterX ml-10'>
                <h2 className='mb-[10px] text-[#002c9b] fontChronicle text-[30px] leading-9'>Heat & Eat Makes <br /> Meals Even Easier</h2>
                <p className='mb-[10px] text-left text-[#303236] fontCera text-[18px] leading-6'>Single-serving meals ready in 5 <br /> minutes or less!</p>
                <button className='bg-[#002684] text-white rounded-[22.5px] text-[14px] fontCera tracking-widest h-[45px] w-[150px]'>ORDER NOW</button>
            </div>
            <img className='w-[672px] h-full absolute top-0 right-0 rounded-[32px]' src='https://media.blueapron.com/hero_images/149/1695865653-47-0017-1824/Heat-and-Eat_3-Meals_814.jpeg?width=800'/>
          </div>
        </Slider>
      </div>
    </section>
    <section>
      <div className='w-[62%] m-auto'>
        <h3 className='text-[22px] mb-[24px] fontCera font-semibold text-[#303236] '>Featured</h3>
        <div className='flex flex-row justify-center items-center flex-wrap gap-4 '>
          {FeaturedMeals.map((meal, index) => {
            return (
              <MarketMeals meal={meal} key={index}/>
            )
          })}
        </div>
      </div>
    </section>
    <ShopByCategory/>
    </>
  )
}

export default Market
