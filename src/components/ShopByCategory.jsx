import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

const ShopByCategory = () => {
  const navigate = useNavigate()
  return (
    <section className='flex flex-row justify-start w-[62%] items-cente m-auto mt-16 mb-[150px]'>
      <div className='w-[50%] fontCera'>
        <h3 className='text-[22px] mb-[20px] font-semibold text-[#303236]'>Shop By Category</h3>
        <div className='flex flex-row gap-4 text-[18px] font-semibold'>
          <div className='w-[282px]'><img className='h-[360px] object-cover' src="https://media.blueapron.com/agora/images/taxon/market-categories/meal-kits/icon/4743cbd71d5416865f9aa75123ccd08a.webp?width=400" alt="" /><a onClick={() => navigate('/market/categories/meal-kits')} className='hover:underline inline-block mt-[12px]' href="">Meal Kits</a><FaLongArrowAltRight className='inline-block ml-2 mb-[6px]'/></div>
          <div className='w-[282px]'><img className='h-[360px] object-cover' src="https://media.blueapron.com/agora/images/taxon/categories/seasonal-boxes/icon/2401ba3a59b9c69f2f4bd81fd2aa247b.jpg?width=400" alt="" /><a onClick={() => navigate('/market/categories/seasonal-boxes')}    className='hover:underline inline-block mt-[12px]' href="">Seasonel Boxes</a><FaLongArrowAltRight className='inline-block ml-2 mb-[6px]'/></div>
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory
