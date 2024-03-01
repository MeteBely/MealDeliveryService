/* eslint-disable react/prop-types */
import { useState } from 'react';

const GiftCardsSecondCol = ({ setAmount, quantity, setQuantity, cart, amount, setCart }) => {
  const [activeLbl, setActiveLbl] = useState('lblTwoActive');
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
  return (
    <div className="secondCol fontCera w-[350px]">
      <fieldset className="mb-8">
        <legend className="text-[#303235] text-[11px] mb-2 font-semibold">GIFT TYPE</legend>
        <label htmlFor="giftType" className="w-[90px] pt-[10px] inline-block text-white bg-[#303235] cursor-pointer text-[11px] tracking-widest text-center h-[38px]">
          MEAL
        </label>
        <input type="radio" id="giftType" className="hidden" />
      </fieldset>
      <fieldset className="mb-8">
        <legend className="text-[#303235] text-[11px] mb-2 font-semibold ">GIFT AMOUNT</legend>
        <label className={`${activeLbl === 'lblOneActive' ? 'bg-black text-white' : 'hover:bg-[#696d75] hover:text-[#ffffffe5]'} radioLbl w-[63px] text-[12px] cursor-pointer pt-2 tracking-widest border-[#b2b5bd] border h-[38px] text-center inline-block rounded-l-[5px] min-[1200px]:block min-[1200px]:rounded-none min-[1200px]:mb-2 min-[1350px]:inline-block min-[1350px]:rounded-l-[5px] transition-all duration-700`} htmlFor="giftAmountOne">
          $70
        </label>
        <input
          type="radio"
          value={70}
          name="amountInput"
          id="giftAmountOne"
          className="hidden"
          onClick={() => {
            setActiveLbl('lblOneActive');
            setAmount(70);
          }}
        />
        <label className={`${activeLbl === 'lblTwoActive' ? 'bg-black text-white' : 'hover:bg-[#696d75] hover:text-[#ffffffe5]'} radioLbl w-[63px] text-[12px] cursor-pointer pt-2 tracking-widest border-[#b2b5bd] border h-[38px] text-center inline-block min-[1200px]:block min-[1200px]:mb-2 min-[1350px]:inline-block transition-all duration-700`} htmlFor="giftAmountTwo">
          $140
        </label>
        <input
          type="radio"
          value={140}
          defaultChecked
          name="amountInput"
          id="giftAmountTwo"
          className="hidden"
          onClick={() => {
            setActiveLbl('lblTwoActive');
            setAmount(140);
          }}
        />
        <label className={`${activeLbl === 'lblThreeActive' ? 'bg-black text-white' : 'hover:bg-[#696d75] hover:text-[#ffffffe5]'} radioLbl w-[63px] text-[12px] cursor-pointer pt-2 tracking-widest border-[#b2b5bd] border h-[38px] text-center inline-block rounded-r-[5px] min-[1200px]:block min-[1200px]:mb-2 min-[1200px]:rounded-none  min-[1350px]:inline-block min-[1350px]:rounded-r-[5px] transition-all duration-700`} htmlFor="giftAmountThree">
          $280
        </label>
        <input
          type="radio"
          value={280}
          name="amountInput"
          id="giftAmountThree"
          className="hidden"
          onClick={() => {
            setActiveLbl('lblThreeActive');
            setAmount(280);
          }}
        />
        <p className="text-[12px] text-[#6a6d75] mt-2">$140 is our most popular option</p>
      </fieldset>
      <fieldset className="mb-4">
        <legend className="text-[12px] pb-[5px] text-[#303235] font-semibold ">QUANTITY</legend>
        <button className="bg-[#b2b5bd] text-white rounded-l-[5px] h-[38px] w-[30px]" onClick={() => setQuantity((prev) => prev - 1)}>
          -
        </button>
        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-[49px] h-[38px] border-y-[#b2b5bd] border-y text-center focus:outline-none cursor-pointer text-[#b2b5bd]" />
        <button className="bg-[#b2b5bd] text-white rounded-r-[5px] h-[38px] w-[30px]" onClick={() => setQuantity((prev) => prev + 1)}>
          +
        </button>
      </fieldset>
      <button onClick={handleCart} className="w-full bg-[#f26c29] text-white tracking-[1px] text-center h-[50px]">
        ADD TO CART
      </button>
    </div>
  );
};

export default GiftCardsSecondCol;
