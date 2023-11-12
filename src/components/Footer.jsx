import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <section className='upFooter bg-[#fafbfc] border-t-[1px] border-[#ECEEF2] '>
        <div className='upFooterDiv flex flex-row justify-center items-center gap-10'>
          <div>
            <h3 className='text-[#303236] text-[14px] font-semibold text-center tracking-widest'>FOLLOW US</h3>
            <ul className='flex flex-row gap-8 justify-center items-center mt-8'>
              <li><a href='https://www.instagram.com/blueapron/'><AiOutlineInstagram className='w-[34px] h-[34px] text-[#6a6d75]'/></a></li>
              <li><a href='https://www.tiktok.com/@blueapron?lang=en'><BsTiktok className='w-[28px] h-[28px] text-[#6a6d75]'/></a></li>
              <li><a href='https://www.facebook.com/BlueApron/'><BsFacebook className='w-[28px] h-[28px] text-[#6a6d75]'/></a></li>
              <li><a href='https://tr.pinterest.com/blueapron/'><BsPinterest className='w-[28px] h-[28px] text-[#6a6d75]'/></a></li>
              <li><a href='https://www.youtube.com/@Blueapron'><AiFillYoutube className='w-[35px] h-[35px] text-[#6a6d75]'/></a></li>
            </ul>
          </div>
          <div className='border-r-[1px] border-l-[1px] border-[#e4e6eb] px-[120px] text-center text-[#6a6d75] mt-[30px]'>
            <h3 className='text-[#303236] text-[14px] font-semibold tracking-widest mb-4'>DISCOVER WHAT'S COOKIN'</h3>
            <input type="email" placeholder='Email Address' className='text-[#6a6d75] h-[42px] mb-4 w-[275px] px-[15px] py-[10px] text-[14px] rounded-l-[4px] border focus:outline-none' /><button className='font-semibold bg-[#245091] hover:bg-[#0f346c] text-white h-[42px] w-[50px] rounded-r-[4px]'>GO</button>
            <p className='text-[14px]'>Sign up for offers, recipes, news & more</p>
          </div>
          <div>
            <h3 className='text-[#303236] text-[14px] font-semibold text-center tracking-widest mt-[34px] mb-4 hover:underline'><a href="">FROM THE BLOG</a></h3>
            <div className='flex flex-row gap-6 text-[#303236]'>
              <a href=""><img className='w-[70px] h-[70px] inline-block rounded-[4px]' src="https://i0.wp.com/blog.blueapron.com/wp-content/uploads/2023/08/Box-Evergreen_Process_2022_200.jpg?resize=100%2C100&ssl=1" /></a>
              <a href="" className='text-[14px] hover:underline'>Blue Apron Continues <br /> Environmental, Social <br /> and Governance <br /> Progress </a>
            </div>
          </div>
        </div>
      </section>




      <section className='downFooter'>

      </section>
    </footer>
  )
}

export default Footer
