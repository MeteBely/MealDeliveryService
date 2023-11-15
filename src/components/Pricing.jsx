import React from 'react'
import '../App.css'
import ticketGreen from '../assets/ticketGreen.png'
import MealPreferences from '../data/MealPreferences.jsx'
import PreferencesBox from './PreferencesBox.jsx'
import WeeklyOptionsImages from '../data/WeeklyOptionsImages.jsx'
import WhyChooseMealKit from '../data/WhyChooseMealKit.jsx'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AiOutlineMinus } from 'react-icons/ai'
import FrequentlyAskedQuestions from '../data/FrequentlyAskedQuestions.jsx'

const Pricing = () => {
  return (
    <main>
      <section className='mt-[60px] border-t-[1px] border-[#ECEEF2] pt-[25px] bg-coolGray-200 h-[950px]'>
        <div className='card w-[650px] m-auto bg-white rounded-[8px] flex flex-row items-center justify-evenly h-[80px] gap-[16px]'>
            <img src={ticketGreen} alt="" className='h-[28px]'/>
            <p className='fontCera font-semibold text-center text-[#303235] text-[14px]'>Enjoy $200 off across 6 orders—plus,<br />your first order ships free!</p>
            <button className='bg-[#00a979] hover:bg-[#1EB389] tracking-[1px] text-white text-[12px] fontCera w-[150px] rounded-[30px] h-[35px]'>REDEEM OFFER</button>
            <button className=' text-[#00a979] tracking-[1px] text-[12px] fontCera'>OFFER DETAILS</button>
        </div>
        <div className='text-center mt-8 mb-4'>
            <h1 className='fontChronicle text-[30px] text-[#303236]'>Personalize your meal kit</h1>
            <p className='fontCera text-[18px] text-[#6a6d75]'>Get excited—your choice of 70+ weekly meals is just a few steps away.</p>
        </div>
        <div className='bg-white m-auto w-[1075px] h-[680px] flex flex-row justify-evenly items-start gap-12 fontCera'>
          <div className='colOneDiv flex flex-col justify-center items-center mt-10 gap-4'>
            <h2 className='text-[22px] font-semibold text-[#303236]'>1. Choose your preferences</h2>
            {MealPreferences.map((preferences,index) => {
              return (
                <PreferencesBox key={index} preferences={preferences}/>
              )
            })}
            <p className='text-[13px] leading-[18px] text-[#6a6d75]'>Choose as many as you like. These help us make meal <br /> recommendations and personalize your experience.</p>
          </div>
          <div className='colTwoDiv flex flex-col justify-center items-center mt-10 gap-8 border-l-[1px] border-[#d3d6cd] pl-[90px] h-5/6 pb-16'>
            <h2 className='text-[22px] font-semibold text-[#303236]'>2. Select your plan</h2>
            <div className='flex flex-row gap-[40px]'><p className='text-[18px] text-[#303235] text-center'>Servings per meal</p><ul className='flex flex-row'><li><button className='border border-[#d3d6cd] w-[100px] h-[38px] text-[#002684] text-[22px] rounded-sm'>2</button></li><li><button className='border border-[#d3d6cd] w-[100px] h-[38px] text-[#002684] text-[22px]'>4</button></li></ul></div>
            <div className='flex flex-row gap-[60px]'><p className='text-[18px] text-[#303235] text-center'>Meals per week</p><ul className='flex flex-row'><li><button className='border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm'>2</button></li><li><button className='border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm'>3</button></li><li><button className='border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm'>4</button></li><li><button className='border border-[#d3d6cd] w-[50px] h-[38px] text-[#002684] text-[22px] rounded-sm'>5</button></li></ul></div>
            <div className='bg-[#F8F9FA] w-full h-[150px] p-4 rounded-[12px]'><p className='text-[18px]'>Order Summary</p><div className='flex flex-row gap-12'><div className='flex flex-col'><p className='text-[#696d75]'>Price per serving</p><p className='text-[#696d75]'>Shipping</p><p className='mt-4'>First order subtotal</p></div><div className='flex flex-col'><span className='ml-[25px] text-[#696d75]'>$9.49</span><span className='ml-[25px] text-[#696d75]'>$9.49</span><span className='mt-4 ml-[25px] text-[#696d75]'>$9.49</span></div><div className='flex flex-col'><span className='text-right text-[#1eb389] font-semibold'>$5.74</span><span className='font-semibold text-right text-[#1eb389]'>FREE</span><span className='mt-3 text-right text-[#303235] text-[20px]'>$68.88</span></div></div></div>                                                                     
            <div><button className='bg-[#00a0df] text-white tracking-[2px] text-[13px] w-[150px] h-[40px] rounded-[20px]'>CONTINUE</button></div>
            <div><p className='text-[15px] text-[#6a6d75]'>You can update your preferences <br />and skip, pause, or cancel at any time.</p></div>
          </div>
        </div>
        </section>
      <section className='bg-coolGray-200 h-[475px]'>
        <h1 className='text-[#002684] text-center fontChronicle text-[24px] mb-2'>Choose from 70+ weekly options</h1>
        <p className='text-[#696d75] text-center fontCera mb-[25px] '>We have meal kits to fit many different diets and lifestyles.</p>
        <div className='flex flex-row gap-0 justify-center items-center'>
          {WeeklyOptionsImages.map((item,index) => {
            return (<div key={index}>
              <img src={item.src} className='w-[135px]'/>
              <p className='text-[#696d75] fontCera mt-2 text-center mb-[15px] text-[15px]'>{item.title}</p>
            </div>)
          })}
        </div>
        <button className='text-[#002c9b] border-2 rounded-3xl my-8 border-[#002c9b] m-auto block text-[12px] fontCera font-semibold w-[175px] h-[35px]'>BROWSE OUR MENUS</button>
      </section>
      <section className='h-[800px] bg-[#002684]'>
          <h1 className='text-white text-[36px] fontCera font-semibold text-center tracking-[5px] pt-[96px] leading-[45px]'>WHY CHOOSE A<p className='text-[#00a0df] fontChronicle text-[45px] mb-[72px] tracking-normal'>Blue Apron Meal Kit?</p></h1>
          <div className='flex flex-row flex-wrap justify-center items-center gap-16'>
            {WhyChooseMealKit.map((item,index) => {
              return (
                <div key={index} className='w-[430px] text-white text-center fontCera mt-10'>
                  <h3 className='mb-[10px] font-semibold'>{item.title}</h3>
                  <p  className='text-[15px]'>{item.description}</p>
                </div>
              )
            })}
          </div>
      </section>
      <section className='h-[500px] bg-coolGray-200 text-center relative'>
        <div className='positionCenter w-[900px] absolute top-1/2 left-1/2'> 
            <div className='fontChronicle text-[30px] text-[#002c9b] mb-[20px]'>“Blue Apron has changed my life for the better. I am a working mom, and getting dinner on the table is convenient and delicious.”</div>
            <AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/><AiOutlineMinus className='inline-block text-[#002c9b]'/>
            <p className='fontCera text-[14px] tracking-[2px] text-[#002c9b] mt-[30px] font-semibold'>— @MABDACUMA</p>
        </div>
      </section>
      <section>
        <h1 className='text-[#303235] fontChronicle text-[30px] text-center mt-[50px] mb-[35px]'>Frequently asked questions</h1>
      <div className='w-[450px] m-auto border-none'>
            {
              FrequentlyAskedQuestions.map((question, index) => {
                return(
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header" className='text-[#000] text-[15px] fontCera'>
                      {question.title}
                    </AccordionSummary>
                    <AccordionDetails className='text-[#696d75] fontCera text-[14px]'>
                      {question.answer}
                    </AccordionDetails>
                   </Accordion>
                )
              })
            }
    </div>
        <button className='block m-auto text-[#002684] border-2 border-[#002684] w-[185px] h-[45px] mt-12 mb-20 rounded-3xl fontCera text-[14px] tracking-widest font-semibold hover:bg-[#F8F9FA]'>VIEW ALL FAQS</button>
      </section>
    </main>
  )
}

export default Pricing
