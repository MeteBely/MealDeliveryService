import React from 'react'
import '../App.css'
import  HomePageMeals  from '../data/HomePageMeals.jsx'
import WeeklyOptionsMenu from './WeeklyOptionsMenu.jsx'
import WhyUsingThis from '../data/WhyUsingThis.jsx'
import WhyMealKits from './WhyMealKits.jsx'
import { AiOutlineMinus } from 'react-icons/ai'
const Home = () => {
  return (
    <main>
        <section>
          <div className='relative'>
            <img className='w-full h-[670px] object-cover' src="https://media.blueapron.com/assets/registration/homepage/desktop-splash-v2.webp?height=800&quality=90&format=pjpg" alt="" />
            <h1 className='absolute top-2/4 left-10 text-5xl font-semibold text-blue-700'>The meal kit that<br/>puts quality first</h1>
            <button className='absolute top-2/3 left-10 mt-5 rounded-3xl	h-[50px] w-[180px] font-medium bg-blue-700 text-white tracking-widest'>SEE PLANS</button>
          </div>
        
        <div className='rating-section flex flex-col items-center justify-center bg-coolGray-200 h-[250px] gap-2'>
            <span className='text-[32px] font-bold'>Our customers think we're <span className='text-[32px] text-[#00a0df]'>EXCELLENT</span></span>
            <div><img src="https://media.blueapron.com/assets/registration/homepage/appstore_ratings_icon.svg" className='inline-block' /> <span className='font-bold text-4xl text-[#303236] align-middle leading-3'>4.7</span></div>
            <p className='text-[#303236]'>Based on <span className='font-bold'>38.8K</span> App Store Ratings</p>
            <button className='rounded-3xl	h-[50px] w-[180px] font-medium bg-blue-700 text-white tracking-widest mt-3'>SEE PLANS</button>
        </div>
        </section>  
        <section>
          <div className='weeklyOptionsMenus'>
            <h2 className='text-[#002684] text-center text-4xl tracking-[5.4px] font-semibold mt-12 mb-2'>CHOOSE FROM</h2>
            <h2 className='text-center text-5xl text-[#00a0df] font-semibold mb-10'>70+ weekly options</h2>
            <div className='flexColDiv flex flex-col items-center justify-center'>
              <div className='flexrowDiv flex flex-row flex-wrap m-auto gap-8 justify-center items-center'>
                {HomePageMeals.map((mealBox,index) => {
                  return <WeeklyOptionsMenu mealBox={mealBox} key={index}/>
                }) }
              </div>
            </div>
            <button className='block w-[260px] h-[50px] rounded-3xl bg-white text-[#002c9b] mx-auto mt-[30px] mb-[46px] border-[#002c9b] border-2 tracking-[2.5px] text-[16px] font-medium'>BROWSE OUR MENUS</button>
          </div>
        </section>
        <section>
          <span className='text-[40px] font-bold text-[#002c9b] text-center block'>465+ million meals shipped</span>
          <p className='text-[20px] text-center text-[#303236] mb-8'>See why home cooks stick with the<br/>original American meal kit.</p>
          <div className='flex flex-row gap-12 justify-center items-center'>
                {WhyUsingThis.map((item,index) => {
                  return <WhyMealKits kitBox={item} key={index}/>
                })}
          </div>
          <p className='text-center text-[#303236] mt-14'>Get started for as little as <span className='font-bold'>$7.99 per serving</span></p>
          <button className='block m-auto rounded-3xl	h-[50px] w-[180px] font-medium bg-blue-700 text-white tracking-widest mt-5'>SEE PLANS</button>
        </section>
        <section className='images mt-[64px]'>
          <div className='firstImage w-full h-[550px] relative'> 
            <img src="https://media.blueapron.com/assets/registration/homepage/cooking-pot.webp?height=600&quality=90" className='w-full h-[550px]' />
            <div className='imageTxt absolute top-1/2 left-1/2 bg-white w-[614px] h-[300px]'>
                <p className='pt-[60px] text-[20px] text-center text-[#00a0df] font-bold'>Celebrating 10 years of happy customers</p>
                <p className='text-[24px] text-center text-[#002c9b] mt-[28px] m-auto w-[509px] leading-normal font-semibold'>We changed from HelloFresh to Blue Apron <br />and it was the best choice we made!</p>
                <p className='text-center text-[#00a0df]'><AiOutlineMinus className='w-[200px]'/></p>
                <p className='text-[#002c9b] text-center pb-[39px] font-bold'>— LESLIE</p>
            </div>
          </div>
          <div className='secondImage relative w-2/3 h-[300px] m-auto mt-16'>
                <img src="https://media.blueapron.com/assets/registration/homepage/gnocchi-ingredients.webp?height=400&quality=90" className='w-full h-[300px]'/>
                <div className='imageTxt absolute top-1/2 left-1/2 bg-white w-[400px] h-[220px]'>
                    <p className='text-[32px] font-bold text-center mb-[4px] text-[#002c9b] mt-8'>Get started now</p>
                    <p className='text-center mb-[15px] text-[#6a6d75] text-[18px]'>for as little as <span className='font-bold text-[#00a0df] text-[16px]'>$7.99 per serving</span></p>
                    <button className='rounded-3xl m-auto mt-4 block	h-[50px] w-[225px] font-medium bg-blue-700 text-white tracking-widest'>SEE PLANS</button>
                </div>       
          </div>
        </section>
    </main>
  )
}

export default Home
