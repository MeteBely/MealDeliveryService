import { useEffect, useState } from 'react';
import GiftCardsFirstCol from '../components/GiftCardsFirstCol';
import GiftCardsTopPanel from '../components/GiftCardsTopPanel';
import GiftCardsSecondCol from '../components/GiftCardsSecondCol';
import GiftCardsThirdCol from '../components/GiftCardsThirdCol';
import GiftCardsBottomSection from '../components/GiftCardsBottomSection';

const GiftCards = () => {
  const [amount, setAmount] = useState(140);
  const [quantity, setQuantity] = useState(1);
  const [sumQuantity, setSumQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    totalQuantity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const totalQuantity = () => {
    let total = 0;
    if (cart.length != 0) {
      cart.map((item) => {
        total += item.quantity;
      });
      setSumQuantity(total);
    } else {
      setSumQuantity(0);
    }
  };

  return (
    <main>
      <section className="mt-[60px] border-t-[1px] border-[#ECEEF2] bg-[#fafbfc]">
        <GiftCardsTopPanel />
        <div className="flex flex-col min-[1250px]:flex-row justify-center min-[1250px]:justify-start items-center min-[1250px]:items-start m-auto w-[62%] mt-12 gap-2 min-[1250px]:gap-12">
          <GiftCardsFirstCol amount={amount} />
          <GiftCardsSecondCol setAmount={setAmount} quantity={quantity} setQuantity={setQuantity} cart={cart} amount={amount} setCart={setCart} />
          <GiftCardsThirdCol sumQuantity={sumQuantity} cart={cart} setCart={setCart} />
        </div>
        <GiftCardsBottomSection />
      </section>
    </main>
  );
};

export default GiftCards;
