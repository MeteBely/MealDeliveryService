import '../App.css';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [topPos, setTopPos] = useState('top-[-800px]');
  const bringItems = () => {
    console.log(topPos);
    if (topPos === 'top-[-800px]') {
      setTopPos('top-[58px]');
    } else {
      setTopPos('top-[-800px]');
    }
  };
  return (
    <header className="w-full h-1">
      <nav className="w-full fixed z-50 bg-white block">
        <div className="navbar flex justify-around gap-[40px] md:justify-evenly items-center w-full h-16 tracking-widest">
          <div className="flex items-center">
            <a href="" className="" onClick={() => navigate('/')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Blue_Apron_logo.svg/1280px-Blue_Apron_logo.svg.png" className="w-[102px] h-12" />
            </a>
          </div>
          <div className="relative">
            <div className="md:hidden">
              <button onClick={bringItems} className="cursor-pointer">
                <IoMenu size={50} color={`#06316C`} />
              </button>
            </div>
            <div className={`navbarItemsOne transition-all w-36 md:w-auto duration-300 flex flex-col rounded-lg bg-white p-4 absolute ${topPos} left-[-45px] md:static md:flex-row gap-8 text-coolGray text-xs font-normal items-center`}>
              <a href="" onClick={() => navigate('/pricing')} className="hover:text-[#0f346c]">
                PLANS
              </a>
              <a href="" onClick={() => navigate('/on-the-menu')} className="hover:text-[#0f346c] min-w-[102px]">
                ON THE MENU
              </a>
              <a href="" onClick={() => navigate('/market')} className="hover:text-[#0f346c] ">
                MARKET
              </a>
              <a href="" onClick={() => navigate('/gifts')} className="hover:text-[#0f346c]">
                GIFT CARDS
              </a>
            </div>
          </div>

          <div className="navbarItemsTwo flex flex-row gap-4 items-center text-coolGray tracking-widest">
            <a href="" onClick={() => navigate('/users/sign_in')} className="font-normal w-[60px] text-xs hover:text-[#0f346c]">
              LOG IN
            </a>
            <a href="" className="fontCera text-sm bg-orange-500 text-white w-28 h-10 text-center pt-2.5 rounded hover:bg-[#FF8142]">
              SIGN UP
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
