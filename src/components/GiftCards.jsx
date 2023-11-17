import React, { useEffect, useState } from 'react'
import whiteBlueApronIcon from '../assets/whiteBlueApronIcon.png'
import { Link } from 'react-router-dom'

const GiftCards = () => {

    const [amount, setAmount] = useState(140)
    const [quantity, setQuantity] = useState(1)
    const [sumQuantity, setSumQuantity] = useState(0)
    const [cart, setCart] = useState([])

    const inputChecked = () => {
        const inputOne = document.getElementById('giftAmountOne');
        const labelOne = document.getElementById('lblGiftAmountOne');
        const inputTwo = document.getElementById('giftAmountTwo');
        const labelTwo = document.getElementById('lblGiftAmountTwo');
        const inputThree = document.getElementById('giftAmountThree');
        const labelThree = document.getElementById('lblGiftAmountThree');
         if(inputOne.checked){
            labelOne.classList.add("activeLbl")
            labelTwo.classList.remove("activeLbl")
            labelThree.classList.remove("activeLbl")
            setAmount(70)
         }else if(inputTwo.checked){
            labelOne.classList.remove("activeLbl")
            labelTwo.classList.add("activeLbl")
            labelThree.classList.remove("activeLbl")
            setAmount(140)
         }else{
            labelOne.classList.remove("activeLbl")
            labelTwo.classList.remove("activeLbl")
            labelThree.classList.add("activeLbl")
            setAmount(280)
         }
    }

    useEffect(()=>{
        inputChecked()
      },[])

      const handleCart = () => {
        let flag = false;

        if (cart.length !== 0) {
            cart.map((item, index) => {
                if (item.amount === amount) {
                    const updatedCart = [...cart];
                    updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity + quantity };
                    setCart(updatedCart);
                    flag = true;
                }
            });

            if (!flag) {
                setCart([...cart, { amount, quantity }]);
            }
        } else {
            setCart([{ amount, quantity }]);
        }
    };

    useEffect(() => {
        totalQuantity();
    }, [cart]);

      const handleRemove = (e,itemQuantity,index) => {
        e.preventDefault()
        if(itemQuantity != 1){
            const updatedCart = [...cart];
            updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity - 1 };
            setCart(updatedCart)
        }else{
            const updatedCart = [...cart];
            setCart(updatedCart.filter((item) => item.quantity != 1))
        }
      }
      
      const totalQuantity = () => {
        let total = 0
        if(cart.length != 0){
            cart.map((item) => {
                total += item.quantity
            })
            setSumQuantity(total)
      }else{
        setSumQuantity(0)
    }
    }

  return (
    <main>
        <section className='mt-[60px] border-t-[1px] border-[#ECEEF2] bg-[#fafbfc]'>
            <div className='block m-auto w-[62%] relative'>
                <img className='w-full' src='https://myba-media.blueapron.com/registration/assets/31b27d519d6e58c53036148edda7576d0e7e34a9/images/meal-header..jpg' alt="" />
                <h1 className='absolute top-1/2 left-1/2 positionCenter fontCera text-[70px] leading-[72px] w-[492px] text-center text-[#0f346c] font-semibold'>Meal Kit <br /> Delivery Gifts <br /> & Gift Cards</h1>
            </div>
            <div className='flex flex-row justify-start items-start m-auto w-[62%] mt-12 gap-12'>
                <div className='firstCol ml-4'>
                    <div className='bg-[#0f346c] relative w-[308px] rounded-[20px] h-[200px] fontCera mb-[50px] giftCard'>
                        <span className='absolute top-[10px] left-[20px] text-[36px] text-[#fff] font-semibold'>${amount}</span>
                        <p className='absolute top-[58px] text-[12px] text-[#fff] left-[20px]'>MEAL E-GIFT CARD</p>
                        <img className='w-[52px] absolute bottom-[16px] right-[20px]' src={whiteBlueApronIcon} alt="" />
                    </div>
                    <ul className='list-disc text-[#696d75] mt-[50px] fontCera ml-4 text-[14px]'>
                        <li className='mb-[20px]'>Recipients can use a Meal E-Gift Card towards<br />any subscription meal plan or Market items</li>
                        <li className='mb-[20px]'>E-Gift Cards are subject to our <a href="" className='text-[#245091] hover:underline'>Gift Card Terms</a></li>
                        <li className='mb-[20px]'>Blue Apron Gift Cards never expire and carry<br />no fees</li>
                    </ul>
                </div>
                <div className='secondCol fontCera w-[350px]'>
                    <fieldset className='mb-8'>
                        <legend className='text-[#303235] text-[11px] mb-2 font-semibold'>GIFT TYPE</legend>
                        <label htmlFor="giftType" className='w-[90px] pt-[10px] inline-block text-white bg-[#303235] cursor-pointer text-[11px] tracking-widest text-center h-[38px]'>MEAL</label>
                        <input type="radio" id='giftType' className='hidden' />
                    </fieldset>
                    <fieldset className='mb-8'>
                        <legend className='text-[#303235] text-[11px] mb-2 font-semibold '>GIFT AMOUNT</legend>
                        <label className='radioLbl w-[63px] text-[12px] cursor-pointer pt-2 tracking-widest border-[#b2b5bd] border h-[38px] text-center inline-block rounded-l-[5px] transition-all duration-700' htmlFor="giftAmountOne" id='lblGiftAmountOne'>$70</label>
                        <input type="radio" value={70} name='amountInput' id='giftAmountOne' className='hidden' onChange={inputChecked} />
                        <label className='radioLbl w-[63px] text-[12px] cursor-pointer pt-2 tracking-widest border-[#b2b5bd] border h-[38px] text-center inline-block transition-all duration-700' htmlFor="giftAmountTwo" id='lblGiftAmountTwo'>$140</label>
                        <input type="radio" value={140} defaultChecked name='amountInput' id='giftAmountTwo' className='hidden' onChange={inputChecked} />
                        <label className='radioLbl w-[63px] text-[12px] cursor-pointer pt-2 tracking-widest border-[#b2b5bd] border h-[38px] text-center inline-block rounded-r-[5px] transition-all duration-700' htmlFor="giftAmountThree" id='lblGiftAmountThree'>$280</label>
                        <input type="radio" value={280} name='amountInput' id='giftAmountThree' className='hidden' onChange={inputChecked} />
                        <p className='text-[12px] text-[#6a6d75] mt-2'>$140 is our most popular option</p>
                    </fieldset>
                    <fieldset className='mb-4'>
                        <legend className='text-[12px] pb-[5px] text-[#303235] font-semibold '>QUANTITY</legend>
                        <button className='bg-[#b2b5bd] text-white rounded-l-[5px] h-[38px] w-[30px]' onClick={() => setQuantity((prev) => prev - 1)}>-</button><input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} className='w-[49px] h-[38px] border-y-[#b2b5bd] border-y text-center focus:outline-none cursor-pointer text-[#b2b5bd]' /><button className='bg-[#b2b5bd] text-white rounded-r-[5px] h-[38px] w-[30px]' onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    </fieldset>
                    <button onClick={handleCart} className='w-full bg-[#f26c29] text-white tracking-[1px] text-center h-[50px]'>ADD TO CART</button>
                </div>
                <div className='thirdCol w-[380px]'>
                    <div className='border border-[#b2b5bd] relative fontCera bg-white pb-[50px] pt-[30px] px-[30px] '>
                        {cart.length == 0 
                        ? (<>
                        <span className='text-[#303235] text-[12px] font-semibold inline-block text-left '>YOUR CART IS EMPTY</span>
                        <span className='text-[#b2b5bd] text-[12px] pt-4 block text-center '>You haven't added any gifts yet</span>
                        </>) 
                        : (<>
                        <span className='text-[#303235] text-[12px] font-semibold inline-block text-left '>YOUR CART ({sumQuantity})</span>
                        <span className='text-[#696d75] text-[12px] block pt-4'>MEAL GIFTS</span>
                        {cart.map((item, index) => {
                            return (
                            <div key={index}>
                                <div className='text-[#696d75] text-[12px] pt-4 w-full relative'><span>${item.amount} Meal Gift Card</span><a  onClick={(e) => handleRemove(e, item.quantity,index)} href="" className='absolute right-[10px] hover:underline'>Remove</a></div>
                                <span className='text-[#696d75] text-[12px] block pt-2 mb-4'>Quantity: {item.quantity}</span>
                            </div>
                            )
                        })}
                        </>)}
                    </div>
                </div>
            </div>
            <div className='bottomItems w-[63%] m-auto block mt-8'>
                <p className='mb-[15px] text-[13px] text-[#6a6d75] text-center'>E-Gift Cards are non-refundable (unless required by law). E-Gift Card may only be used for Meal Subscription or Market items. Your payment card will be charged at the time of purchase. Product and shipping restrictions may apply.</p>
                <div className='text-[#0f346c] text-[14px] font-semibold text-center'>
                    <div className='rounded-[5px] inline-block bg-white m-[10px] w-[250px] h-[60px] pt-[20px]'><Link className='cursor-pointer hover:underline' href="">Need more than 50 gift cards?</Link></div>
                    <div className='rounded-[5px] inline-block bg-white m-[10px] w-[250px] h-[60px] pt-[20px]'><Link to='/pages/redeem' className='cursor-pointer hover:underline' href="">Redeem your Blue Apron gift.</Link></div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default GiftCards
