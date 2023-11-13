import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <header className='w-full'>
        <nav className='w-full fixed z-50 bg-white'>
             <div className='navbar flex justify-evenly items-center w-full h-16 tracking-widest'>
                <div className='navbarItemsOne flex flex-row gap-8 text-coolGray text-xs font-normal items-center'>
                    <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Blue_Apron_logo.svg/1280px-Blue_Apron_logo.svg.png" className='w-24 h-11 inline-block' /></a>
                    <a href="" className='hover:text-[#0f346c]'>PLANS</a>
                    <a href="" className='hover:text-[#0f346c]'>ON THE MENU</a>
                    <a href="" className='hover:text-[#0f346c]'>MARKET</a>
                    <a href="" className='hover:text-[#0f346c]'>GIFT CARDS</a>
                    <a href="" className='hover:text-[#0f346c]'>BLOG</a>
                </div>
                <div className='navbarItemsTwo flex flex-row gap-4 items-center text-coolGray tracking-widest'>
                    <a href="" className='font-normal text-xs hover:text-[#0f346c]'>LOG IN</a>
                    <a href="" className='fontCera text-sm bg-orange-500 text-white w-28 h-10 text-center pt-2.5 rounded hover:bg-[#FF8142]'>SIGN UP</a>
                </div>
             </div>
        </nav>
    </header>
  )
}

export default Header
