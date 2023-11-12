import React from 'react'

const WhyMealKits = ({kitBox}) => {
  return (
    <div className='kitBox'>
      <img src={kitBox.src} alt="" />
      <p className='text-[15px] font-bold text-[#303236] text-center mb-[12px] mt-4'>{kitBox.title}</p>
      <p className='text-[15px] text-center text-[#303236] font-normal'>{kitBox.descriptionOne}</p>
      <p className='text-[15px] text-center text-[#303236] font-normal'>{kitBox.descriptionTwo}</p>
    </div>
  )
}

export default WhyMealKits
