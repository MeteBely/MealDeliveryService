import '../App.css';
import ticketGreen from '../assets/ticketGreen.png';
import { Dialog, DialogActions, DialogContentText, DialogContent } from '@mui/material';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

const Offer = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const divImagePrice = (price) => {
    const divs = [];

    for (let i = 0; i < 4; i++) {
      divs.push(
        <div key={i}>
          <img className="width-[20px] m-auto" src="https://myba-media.blueapron.com/registration/assets/dd2dc30c1691d727e18d4a1ad65afeb9cbf48c52/images/svg/couponBox.svg" alt="" />
          <span className="text-[#696d75] text-[14px] text-center ">${price.toFixed(2)} Off</span>
        </div>
      );
    }
    return divs;
  };
  return (
    <section>
      <Dialog open={dialogOpen} sx={{ backdropFilter: 'blur(1px) sepia(1%)' }} fullWidth maxWidth="sm" onClose={() => setDialogOpen(false)}>
        <div className="px-8 py-6 relative">
          <DialogContent>
            <DialogContentText>
              <div className="flex flex-row justify-center items-center fontCera mb-4 gap-[7px]">
                <div className="max-w-[100px] mt-[15px]">
                  <img className="width-[20px] m-auto mb-1" src="https://myba-media.blueapron.com/registration/assets/dd2dc30c1691d727e18d4a1ad65afeb9cbf48c52/images/svg/couponBox.svg" alt="" /> <span className="text-[#696d75] text-[14px] text-center leading-[1.14] block">$45.00 Off + Free Shipping</span>
                </div>
                <div>
                  <img className="width-[20px] m-auto" src="https://myba-media.blueapron.com/registration/assets/dd2dc30c1691d727e18d4a1ad65afeb9cbf48c52/images/svg/couponBox.svg" alt="" /> <span className="text-[#696d75] text-[14px] text-center ">$35.00 Off</span>
                </div>
                {divImagePrice(30)}
              </div>
              <div className="text-[#303235] text-center fontCera font-bold mb-4 ">Enjoy $200 off across 6 orders—plus, your first order ships free!</div>
              <p className="text-[#696d75] text-[12px] mt-2">Coupons will be automatically applied to your orders when your credit card is charged. Discount will be taken off of the price of the products and does not apply to shipping or tax, except where otherwise indicated. Redeeming this offer results in the purchase of a continuous subscription for which you will automatically receive weekly deliveries billed to your designated payment method until you cancel.</p>
            </DialogContentText>
            <DialogActions>
              <a className="changeColor absolute top-[20px] right-[25px] cursor-pointer" onClick={() => setDialogOpen(false)}>
                <AiFillCloseCircle size={40} onMouseOver={({ target }) => (target.style.color = 'grey')} onMouseOut={({ target }) => (target.style.color = '#ddd')} color="#ddd" />
              </a>
            </DialogActions>
          </DialogContent>
        </div>
      </Dialog>
      <div className="card w-[480px] min-[690px]:w-[650px] m-auto bg-white rounded-[8px] flex flex-row items-center justify-evenly h-[80px] gap-[16px]">
        <img src={ticketGreen} alt="" className="h-[28px]" />
        <p className="fontCera font-semibold text-center text-[#303235] text-[14px]">
          Enjoy $200 off across 6 orders—plus,
          <br />
          your first order ships free!
        </p>
        <button className="bg-[#00a979] hover:bg-[#1EB389] tracking-[1px] text-white text-[12px] fontCera w-[150px] rounded-[30px] h-[35px]">REDEEM OFFER</button>
        <button className=" text-[#00a979] tracking-[1px] text-[12px] fontCera" onClick={() => setDialogOpen(true)}>
          OFFER DETAILS
        </button>
      </div>
    </section>
  );
};

export default Offer;
