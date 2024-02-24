import '../App.css';
const Redeem = () => {
  return (
    <section>
      <div className="-mt-6 h-[700px] w-[100%]">
        <div className="redeemDiv h-full border-b-2 border-b-[#0f346c] flex items-center justify-center pl-[400px] min-[1000px]:pl-[600px] min-[1150px]:pl-[675px]">
          <div className=" bg-white hidden min-[800px]:block w-[400px] h-auto min-[1150px]:w-[457px] min-[1150px]:h-[350px] px-4 pb-4 pt-[5px] text-center bg-opacity-75">
            <h1 className="mb-[20px] text-[48px] mt-[30px] fontCera text-[#303236] leading-[1.2] font-semibold">Login to redeem your voucher</h1>
            <p className="text-[#6a6d75] text-[14px]">In order to redeem Blue Apron gift cards, customers must sign up for a Blue Apron account or log in to their existing account using the link in the button below. Use of Blue Apron gift cards are subject to Blue Apron`s Gift Card Terms and Conditions, which can be found here. </p>
            <button className="hover:bg-[#ff8142] bg-[#F26C29] text-[14px]  text-white text-center h-[40px] px-[28px] fontCera tracking-widest mt-8">LOG IN OR SIGN UP</button>
          </div>
        </div>
      </div>
      <div className=" bg-white h-auto text-center mb-4 block min-[800px]:hidden">
        <h1 className="mb-[20px] text-[48px] mt-[30px] fontCera text-[#303236] leading-[1.2] font-semibold">Login to redeem your voucher</h1>
        <p className="text-[#6a6d75] text-[14px] px-2">In order to redeem Blue Apron gift cards, customers must sign up for a Blue Apron account or log in to their existing account using the link in the button below. Use of Blue Apron gift cards are subject to Blue Apron`s Gift Card Terms and Conditions, which can be found here. </p>
        <button className="hover:bg-[#ff8142] bg-[#F26C29] text-[14px]  text-white text-center h-[40px] px-[28px] fontCera tracking-widest mt-8">LOG IN OR SIGN UP</button>
      </div>
    </section>
  );
};

export default Redeem;
