import React from 'react'
import {Form, Formik} from 'formik'
import CustomInput from './FormComponents/CustomInput.jsx'
import { advancedSchema } from '../Schemas/Index.jsx'

const onSubmit= async(values, actions) =>{
    // console.log(values)
    // console.log(actions)
  
    await new Promise((resolve) =>{
        setTimeout(resolve, 1000)//Promise 1 saniye beklettiği için isSubmitting 1 saniye boyunca true, sonra false döner.
    }),
    actions.resetForm();
  }


const CorporateSales = () => {
  return (
    <main>
    <section>
        <div className='m-auto block mt-[80px] text-center fontCera'>
            <h2 className='mb-4 text-[24px] text-[#303236]'>Reward your employees and clients with the gift of home cooking!</h2>
            <span className='text-[#002684] text-[18px] '>Blue Apron Corporate Gifts can be personalized by each individual.</span>
        </div>
        <Formik initialValues={{ companyName: '', firstName:'', lastName:'', emailAddress:'', phoneNumber:'', personPlan:'', quantity:0, additionalInformation:''}} onSubmit={onSubmit} validationSchema={advancedSchema}>
       {({isSubmitting}) => (
         <Form className='mt-[60px] w-[62%] m-auto border border-[#d3d5db] flex flex-row gap-[100px] p-[20px]'>
            <div className='firstFormCol flex flex-col justify-start w-full'>
                <div>
                    <h3 className='text-[20px] fontCera text-[#303236] mb-[14px]'>Enter contact information</h3>
                </div>
                <div>
                    <CustomInput label='COMPANY NAME' name='companyName' type='text' placeholder='Kullanici adinizi giriniz'/>
                </div>
                <div className='flex flex-row gap-4'>
                    <CustomInput label='FIRST NAME' name='firstName' type='text' placeholder='Kullanici adinizi giriniz'/>
                    <CustomInput label='LAST NAME' name='lastName' type='text' placeholder='Kullanici adinizi giriniz'/>
                </div>
                <div className='flex flex-row gap-4'>
                    <CustomInput label='EMAIL ADDRESS' name='emailAddress' type='text' placeholder='Kullanici adinizi giriniz'/>
                    <CustomInput label='PHONE NUMBER' name='phoneNumber' type='text' placeholder='Kullanici adinizi giriniz'/>
                </div>
            </div>
            <div className='secondFormCol w-full'>
                <div>
                    <h3 className='text-[20px] fontCera text-[#303236] mb-[14px]'>Enter order details</h3>
                </div>
                <div  className='flex flex-row gap-4'>
                    <CustomInput label='2-PERSON PLAN' name='personPlan' type='text' placeholder='Kullanici adinizi giriniz'/>
                    <CustomInput label='QUANTITY' name='quantity' type='text' placeholder='Kullanici adinizi giriniz'/>
                </div>
                <div>
                    <CustomInput label='ADDITIONAL INFORMATION' name='additionalInformation' type='text' placeholder='Kullanici adinizi giriniz'/>
                </div>
                <div>
                    <button type='submit' disabled={isSubmitting} className='mt-[5px] text-[18px] h-[60px] px-[45px] fontCera tracking-widest bg-[#235091] hover:bg-[#0F346C] text-[#fff]'>SEND ORDER REQUEST</button>
                    <p className='text-[12px] italic mt-[5px] font-light text-[#6a6d75] '>A representative will follow up for billing with a separate invoice.</p>
                </div>
            </div>
         </Form>
       )}
     </Formik>
     </section>
     <section>
       <div className='flex flex-row w-[62%] m-auto justify-between gap-16 mt-12 px-[20px]'>
        <div className='text text-[#303236] w-[48%]'>
            <div className='mb-[40px]'>
                <h3 className='mb-[5px] text-[17px] fontChronicle'>No Commitment</h3>
                <p className='text-[15px] fontCera font-thin'>Get your delivery when it’s convenient for you.</p>
            </div>
            <div className='mb-[40px]'>
                <h3 className='mb-[5px] text-[17px] fontChronicle'>Personalized Menus</h3>
                <p className='text-[15px] fontCera font-thin'>Tell us your dietary preferences and we’ll personalize the menus you receive.</p>
            </div>
            <div>
                <h3 className='mb-[5px] text-[17px] fontChronicle'>Convenient Delivery</h3>
                <p className='text-[15px] fontCera font-thin'>Ingredients are carefully packaged in a refrigerated box so food stays fresh even if you’re not home when we deliver.</p>
            </div>
        </div>
        <div className='image mb-[40px]'>
            <img src="https://media.blueapron.com/assets/gifts/gift-intro-bg-mothers-day-e0ad80ef0ea41bc82c69cc1c0d5234e70f938c691fcf49241da54b079f26c0d2.jpg" alt="" />
        </div>
       </div>
     </section>
     </main>
  )
}

export default CorporateSales
