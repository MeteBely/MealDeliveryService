import React from 'react'
import SeasonalBoxesDatas from '../data/SeasonalBoxesDatas'
import MiniDownHeader from './MiniDownHeader'
import ShopByCategory from './ShopByCategory'
import MarketMeals from './MarketMeals'
import { Link } from 'react-router-dom'

const SeasonalBoxes = () => {
  return (
    <>
      <MiniDownHeader/>
      <section className='mt-[70px]'>
      <div className='w-[62%] m-auto'>
        <p className='text-center text-[12px] text-[#b1b5bd]'><Link to='/market' href="" className='text-[#0d2a54] hover:underline'>Home</Link> / Seasonal Boxes</p>
        <h3 className='text-[30px] mb-[16px] fontChronicle font-semibold text-[#002c9b] text-center'>Seasonal Boxes</h3>
        <div className='flex flex-row justify-start items-center flex-wrap gap-4 overflow-hidden'>
          {SeasonalBoxesDatas.map((meal, index) => {
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

export default SeasonalBoxes
