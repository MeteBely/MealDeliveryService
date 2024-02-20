/* eslint-disable react/prop-types */
const GiftCardsThirdCol = ({ sumQuantity, cart, setCart }) => {
  const handleRemove = (e, itemQuantity, index) => {
    e.preventDefault();
    if (itemQuantity != 1) {
      const updatedCart = [...cart];
      updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity - 1 };
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart];
      setCart(updatedCart.filter((item) => item.quantity != 1));
    }
  };
  return (
    <div className="thirdCol w-[380px]">
      <div className="border border-[#b2b5bd] relative fontCera bg-white pb-[50px] pt-[30px] px-[30px] ">
        {cart.length == 0 ? (
          <>
            <span className="text-[#303235] text-[12px] font-semibold inline-block text-left ">YOUR CART IS EMPTY</span>
            <span className="text-[#b2b5bd] text-[12px] pt-4 block text-center ">You haven`t added any gifts yet</span>
          </>
        ) : (
          <>
            <span className="text-[#303235] text-[12px] font-semibold inline-block text-left ">YOUR CART ({sumQuantity})</span>
            <span className="text-[#696d75] text-[12px] block pt-4">MEAL GIFTS</span>
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <div className="text-[#696d75] text-[12px] pt-4 w-full relative">
                    <span>${item.amount} Meal Gift Card</span>
                    <a onClick={(e) => handleRemove(e, item.quantity, index)} href="" className="absolute top-[42px] right-[4px] hover:underline text-red-500">
                      Decrease
                    </a>
                  </div>
                  <span className="text-[#696d75] text-[12px] block pt-2 mb-4">Quantity: {item.quantity}</span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default GiftCardsThirdCol;
