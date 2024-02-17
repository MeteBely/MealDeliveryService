import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTiktok } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import '../App.css';
import { useState } from 'react';

const Footer = () => {
  const [iconUp, setIconUp] = useState('');
  const handleIconUp = (link) => {
    setIconUp(link);
  };
  return (
    <footer>
      <section className="upFooter bg-[#fafbfc] border-t-[1px] border-[#ECEEF2] pb-8">
        <div className="upFooterDiv flex flex-row justify-center items-start gap-10 fontCera">
          <div>
            <h3 className="text-[#303236] text-[14px] text-center tracking-widest mt-[30px] mb-4">FOLLOW US</h3>
            <ul className="flex flex-row  min-[700px]:gap-8 min-[530px]:gap-4 gap-2 justify-center items-center">
              <li onMouseEnter={() => handleIconUp('instagram')} onMouseLeave={() => handleIconUp('')} className="w-[40px] h-[40px]">
                <a href="https://www.instagram.com/blueapron/">
                  <AiOutlineInstagram className={`text-[#6a6d75] transition-all duration-200 ${iconUp === 'instagram' ? '-translate-y-2' : ' '}`} color={`${iconUp === 'instagram' ? `#D5307A` : ''}`} size={34} />
                </a>
              </li>
              <li onMouseEnter={() => handleIconUp('tiktok')} onMouseLeave={() => handleIconUp('')} className="w-[34px] h-[34px]">
                <a href="https://www.tiktok.com/@blueapron?lang=en">
                  <BsTiktok className={`text-[#6a6d75] transition-all duration-200 ${iconUp === 'tiktok' ? '-translate-y-2' : ' '}`} color={`${iconUp === 'tiktok' ? '#000' : ''}`} size={28} />
                </a>
              </li>
              <li onMouseEnter={() => handleIconUp('facebook')} onMouseLeave={() => handleIconUp('')} className="w-[34px] h-[34px]">
                <a href="https://www.facebook.com/BlueApron/">
                  <BsFacebook className={`text-[#6a6d75] transition-all duration-200 ${iconUp === 'facebook' ? '-translate-y-2' : ' '}`} color={`${iconUp === 'facebook' ? `#257BF2` : ''}`} size={28} />
                </a>
              </li>
              <li onMouseEnter={() => handleIconUp('pinterest')} onMouseLeave={() => handleIconUp('')} className="w-[34px] h-[34px]">
                <a href="https://tr.pinterest.com/blueapron/">
                  <BsPinterest className={`text-[#6a6d75] transition-all duration-200 ${iconUp === 'pinterest' ? '-translate-y-2' : ' '}`} color={`${iconUp === 'pinterest' ? `#BE2026` : ''}`} size={28} />
                </a>
              </li>
              <li onMouseEnter={() => handleIconUp('youtube')} onMouseLeave={() => handleIconUp('')} className="w-[41px] h-[41px]">
                <a href="https://www.youtube.com/@Blueapron">
                  <AiFillYoutube className={`text-[#6a6d75] transition-all duration-200 ${iconUp === 'youtube' ? '-translate-y-2' : ' '}`} color={`${iconUp === 'youtube' ? 'red' : ''}`} size={36} />
                </a>
              </li>
            </ul>
          </div>
          <div className="min-[1212px]:border-r-[1px] min-[1212px]:border-l-[1px] border-[#e4e6eb] min-[1212px]:px-[120px] text-center text-[#6a6d75] mt-[30px]">
            <h3 className="text-[#303236] text-[14px] tracking-widest mb-4">DISCOVER WHAT'S COOKIN'</h3>
            <input type="email" placeholder="Email Address" className="text-[#6a6d75] h-[42px] mb-4 w-[185px] min-[700px]:w-[275px] px-[15px] py-[10px] text-[14px] rounded-l-[4px] border focus:outline-none" />
            <button className="bg-[#245091] pb-[2px] hover:bg-[#0f346c] text-white h-[42px] w-[40px] min-[700px]:w-[50px] rounded-r-[4px]">GO</button>
            <p className="text-[12px] min-[700px]:text-[14px]">Sign up for offers, recipes, news & more</p>
          </div>
          <div className="hidden min-[1212px]:block">
            <h3 className="text-[#303236] text-[14px] text-center tracking-widest mt-[34px] mb-4 hover:underline">
              <a href="">FROM THE BLOG</a>
            </h3>
            <div className="flex flex-row gap-6 text-[#303236]">
              <a href="">
                <img className="w-[70px] h-[70px] inline-block rounded-[4px]" src="https://i0.wp.com/blog.blueapron.com/wp-content/uploads/2023/08/Box-Evergreen_Process_2022_200.jpg?resize=100%2C100&ssl=1" />
              </a>
              <a href="" className="text-[14px] hover:underline">
                Blue Apron Continues <br /> Environmental, Social <br /> and Governance <br /> Progress{' '}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="downFooter bg-[#0f346c] h-auto">
        <div className="downFooterDiv flex flex-row min-[900px]:justify-evenly justify-center items-start pt-12 text-[#a1bce6] text-[14px] fontCera px-2">
          <div className="firstCol flex flex-row gap-12 justify-center items-start">
            <ul className="flex flex-col justify-center items-start gap-3 mr-6">
              <li>
                {' '}
                <a href="" className="hover:underline">
                  On The Menu
                </a>
              </li>
              <li>
                {' '}
                <a href="" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                {' '}
                <a href="" className="hover:underline">
                  Our Vision
                </a>
              </li>
              <li>
                {' '}
                <a href="" className="hover:underline">
                  Market
                </a>
              </li>
              <li>
                {' '}
                <a href="" className="hover:underline">
                  Gift Cards
                </a>
              </li>
              <li>
                {' '}
                <a href="" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                {' '}
                <a href="" className="hover:underline">
                  Cookbook
                </a>
              </li>
              <ul className="max-[899px]:flex flex-col justify-center items-start gap-3 hidden">
                <li>
                  <a className="hover:underline" href="">
                    Suppliers
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://signup.cj.com/member/signup/publisher/?cid=5446852">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="">
                    Supply Chains Act
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://blog.blueapron.com/foodsafety/">
                    Food Safety
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="">
                    Press
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://investors.blueapron.com/">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </ul>
            <ul className="min-[900px]:flex flex-col justify-center items-start gap-3 hidden">
              <li>
                <a className="hover:underline" href="">
                  Suppliers
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://signup.cj.com/member/signup/publisher/?cid=5446852">
                  Affiliates
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Supply Chains Act
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://blog.blueapron.com/foodsafety/">
                  Food Safety
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Press
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Our Team
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://investors.blueapron.com/">
                  Investor Relations
                </a>
              </li>
            </ul>
            <ul className="flex flex-col justify-center items-start gap-3">
              <li>
                <a className="hover:underline" href="https://cook.blueapron.com/heroes/">
                  Military & Veterans
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://cook.blueapron.com/heroes/?utm_content=Students110off">
                  Students
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://cook.blueapron.com/heroes/?utm_content=Graduates110off">
                  Graduates
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://cook.blueapron.com/heroes/">
                  Teachers
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://cook.blueapron.com/heroes/">
                  Seniors (+55)
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://cook.blueapron.com/heroes/">
                  Medical Staff
                </a>
              </li>
              <li>
                <a className="hover:underline" href="https://cook.blueapron.com/heroes/">
                  First Responders
                </a>
              </li>
              <ul className="max-[899px]:flex flex-col justify-center items-start gap-3 hidden">
                <li>
                  <span className="text-white">Customer Support:</span>
                </li>
                <li>
                  <a className="hover:underline" href="https://support.blueapron.com/hc/en-us">
                    Help Center & FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="">
                    contact@blueapron.com
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="tel:+16468914349">
                    (646) 891-4349
                  </a>
                </li>
              </ul>
            </ul>
            <ul className="min-[900px]:flex flex-col justify-center items-start gap-3 hidden">
              <li>
                <span className="text-white">Customer Support:</span>
              </li>
              <li>
                <a className="hover:underline" href="https://support.blueapron.com/hc/en-us">
                  Help Center & FAQ
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  contact@blueapron.com
                </a>
              </li>
              <li>
                <a className="hover:underline" href="tel:+16468914349">
                  (646) 891-4349
                </a>
              </li>
            </ul>
          </div>
          <ul className="secondCol flex flex-col justify-center items-end gap-3">
            <li>
              <span className="text-white">© Blue Apron, LLC 2023</span>
            </li>
            <li className=" text-right">
              <a className="hover:underline" href="">
                Do Not Sell or Share My Info
              </a>
            </li>
            <li className="text-right">
              <a className="hover:underline" href="">
                Notice to California Residents
              </a>
            </li>
            <li>
              <a className="hover:underline" href="">
                Ad Preferences
              </a>
            </li>
            <li>
              <a className="hover:underline" href="">
                Privacy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="">
                Terms
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/blue-apron-meal-kits/id976642810">
                <div className="appStoreLogo h-[48px] w-[125px]"></div>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.blueapron.blueapron.release">
                <div className="playStoreLogo h-[48px] w-[125px]"></div>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white fontCera mt-[12px] md:mt-[16px] text-[12px] md:text-[14px] mx-auto w-4/5 text-center">
            If you are using a screen reader and are having problems using this website, please call{' '}
            <a className="text-[#a1bce6] hover:underline" href="tel:+18444628299">
              1-844-462-8299
            </a>{' '}
            for assistance.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
