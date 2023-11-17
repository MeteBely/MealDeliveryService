import React from 'react'
import '../App.css'
const Redeem = () => {
  return (
    <section className='-mt-8 -mb-[86px] h-[800px] w-full'>
    <div className='redeemDiv h-[714px] border-b-2 border-b-[#0f346c] relative'>
        <div className='absolute top-[130px] right-[380px] bg-white w-[457px] h-[350px] px-4 pb-4 pt-[5px] text-center'>
            <h1 className='mb-[20px] text-[48px] mt-[30px] fontCera text-[#303236] leading-[1.2] font-semibold'>Login to redeem your voucher</h1>
            <p className='text-[#6a6d75] text-[14px]'>In order to redeem Blue Apron gift cards, customers must sign up for a Blue Apron account or log in to their existing account using the link in the button below. Use of Blue Apron gift cards are subject to Blue Apron's Gift Card Terms and Conditions, which can be found here.  </p>
            <button className='hover:bg-[#ff8142] bg-[#F26C29] text-[14px]  text-white text-center h-[40px] px-[28px] fontCera tracking-widest mt-8'>LOG IN OR SIGN UP</button>
        </div>
    </div>
    </section>
  )
}

export default Redeem
