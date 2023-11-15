import React from 'react'
import {Link} from 'react-router-dom'

const MiniDownHeader = () => {
  return (
    <header className='mt-[60px] border-y-[1px] border-[#ECEEF2]'>
    <div className='flex flex-row justify-around items-center h-12 text-[14px]'>
        <nav className='text-[#6a6d75] fontCera'>
          <Link href="" to='/market/categories/meal-kits' className='mr-[32px] hover:text-[#0f346c]'>Meal Kits</Link>
          <Link href="" to='/market/categories/seasonal-boxes' className='hover:text-[#0f346c]'>Seasonel Boxes</Link>
        </nav>
        <div className='text-[#1eb392] fontCera font-semibold hover:underline cursor-pointer'>
          Shipping included on orders $50+
        </div>
    </div>
  </header>
  )
}

export default MiniDownHeader