import React from 'react'
import ticketGreen from '../assets/ticketGreen.png'

const PreferencesBox = ({preferences}) => {
  return (
    <button className='w-[380px] border border-[#d3d6cd] h-[84px] rounded-md flex flex-row justify-start items-center gap-4'>
     <div className='ml-[16px]'>
            <img src={ticketGreen} alt="" className='h-[30px]'/>
     </div>
     <div>
            <p className='text-[16px] text-[#303236] text-left'>{preferences.title}</p>
            <p className='text-[#6a6d75] text-[15px] leading-[16px] text-left'>{preferences.description}</p>
     </div>
    </button>
  )
}

export default PreferencesBox
