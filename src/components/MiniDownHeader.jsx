import { Link } from 'react-router-dom';
import { Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

const MiniDownHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialog = (e) => {
    e.preventDefault();
    setDialogOpen(true);
  };
  return (
    <header className="mt-[60px] border-y-[1px] border-[#ECEEF2]">
      <div className="flex flex-row justify-around items-center h-12 text-[14px]">
        <nav className="text-[#6a6d75] fontCera">
          <Link href="" to="/market/categories/meal-kits" className="mr-[32px] hover:text-[#0f346c]">
            Meal Kits
          </Link>
          <Link href="" to="/market/categories/seasonal-boxes" className="hover:text-[#0f346c]">
            Seasonel Boxes
          </Link>
        </nav>
        <div className="text-[#1eb392] fontCera font-semibold hover:underline cursor-pointer">
          <a href="" onClick={(e) => handleDialog(e)}>
            Shipping included on orders $50+
          </a>
        </div>
      </div>
      <Dialog open={dialogOpen} sx={{ backdropFilter: 'blur(1px) sepia(1%)' }} PaperProps={{ sx: { borderRadius: '18px' } }} onClose={() => setDialogOpen(false)}>
        <div className="px-8 py-6 relative">
          <DialogTitle>
            <h3 className="text-[22px] text-[#303236] fontCera font-bold text-center">Shipping included on all orders over $50</h3>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p className="text-[#6a6d75] leading-[155%] mb-4">
                Free standard shipping (estimated 5-7 business days) with orders over $50! <br />
                <br />
                Blue Apron subscriptions, Blue Apron gift boxes, taxes and prior purchases do not qualify toward the minimum purchase requirement and the offer cannot be applied to such items. Eligible customers must select this option during checkout in order to receive free shipping. If you choose another shipping option, additional charges will apply. <br />
                <br />
                Shipping is only available in the 48 contiguous United States. We do not ship to PO Box addresses.
              </p>
            </DialogContentText>
            <DialogActions>
              <a className="absolute top-[20px] right-[25px] cursor-pointer" onClick={() => setDialogOpen(false)}>
                <AiFillCloseCircle size={40} color="grey" />
              </a>
            </DialogActions>
          </DialogContent>
        </div>
      </Dialog>
    </header>
  );
};

export default MiniDownHeader;
