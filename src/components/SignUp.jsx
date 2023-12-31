import React from 'react';
import { FaApple } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import foodBox from '../assets/foodBox.png';
import foodCard from '../assets/foodCard.png';
import papers from '../assets/papers.png';
import calendarCheck from '../assets/calendarCheck.png';
import box from '../assets/box.png';
import { Form, Formik } from 'formik';
import CustomInput from './FormComponents/CustomInput.jsx';
import { advancedSchema } from '../Schemas/Index.jsx';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }),
      actions.resetForm();
  };

  return (
    <>
      <header className="mt-[65px] w-full h-[60px] border border-y-[#d3d5db] pt-4">
        <ul className="flex flex-row justify-center items-center gap-4">
          <li className="flex flex-row items-center justify-center">
            <div className="tickDiv w-[20px] h-[20px] border border-[#002684] rounded-[50%] mr-[10px]"></div>
            <p className="text-[#6a6d75]  text-[14px] tracking-widest font-semibold">PLAN</p>
          </li>
          <div className="inline-block w-8 border border-[#d3d5db] align-middle"></div>
          <li className="flex flex-row items-center justify-center">
            <div className="w-[20px] h-[20px] border border-[#002684] rounded-[50%] text-[14px] fontCera text-white bg-[#002684] mr-[10px] pl-[5px]">2</div>
            <p className="text-[#6a6d75]  text-[14px] tracking-widest font-semibold">ACCOUNT</p>
          </li>
          <div className="inline-block w-8 border border-[#d3d5db] align-middle"></div>
          <li className="flex flex-row items-center justify-center">
            <div className="w-[20px] h-[20px] border border-[#d3d5db] rounded-[50%] text-[14px] fontCera text-[#002684] mr-[10px] pl-[5px]">3</div>
            <p className="text-[#6a6d75] text-[14px] tracking-widest font-semibold">CHECKOUT</p>
          </li>
          <div className="inline-block w-8 border border-[#d3d5db] align-middle"></div>
          <li className="flex flex-row items-center justify-center">
            <div className="w-[20px] h-[20px] border border-[#d3d5db] rounded-[50%] text-[14px] fontCera text-[#002684] mr-[10px] pl-[5px]">4</div>
            <p className="text-[#6a6d75]  text-[14px] tracking-widest font-semibold">CHOOSE MEALS</p>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <div className="signUpContainerDiv">
            <div className="bg-white w-[950px] h-auto absolute top-1/2 left-1/2 positionCenter pt-[30px] px-[36px] pb-4">
              <h1 className="text-center text-[28px] mb-2 text-[#002c9b] fontCera font-bold ">Enjoy $110 off across 5 boxes—plus, your first box ships free!</h1>
              <h2 className="mb-[48px] text-center text-[13px] text-[#6a6d75] fontCera ">
                By continuing, you agree to our{' '}
                <a href="" className="underline">
                  Terms of Use
                </a>{' '}
                and consent to our{' '}
                <a href="" className="underline">
                  Privacy Policy
                </a>
              </h2>
              <h3 className="text-[#0f346c] text-[13px] fontCera font-semibold mb-1 ">HOW IT WORKS</h3>
              <div className="flex flex-row gap-[100px]">
                <div className="flex flex-col w-[40%] justify-center items-center gap-4">
                  <div className="flex flex-row justify-center items-center gap-4">
                    <img src={foodCard} alt="" className="w-[78px] h-[90px]" />
                    <div>
                      <h4 className="text-[17px] fontCera text-[#303236] mb-2 font-semibold">Choose your Meals</h4>
                      <p className="text-[14px] fontCera text-[#6a6d75] leading-[1.25] mb-[15px]">Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners, and top-rated customer favorites.</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-4">
                    <img src={foodBox} alt="" className="w-[78px] h-[78px]" />
                    <div>
                      <h4 className="text-[17px] fontCera text-[#303236] mb-2 font-semibold">Unpack your box</h4>
                      <p className="text-[14px] fontCera text-[#6a6d75] leading-[1.25] mb-[15px]">We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door.</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-4">
                    <img src="https://www.larsenseafood.com/wp-content/uploads/salads.svg" alt="" className="w-[78px] h-[90px] " />
                    <div>
                      <h4 className="text-[17px] fontCera text-[#303236] mb-2 font-semibold">Create Magic</h4>
                      <p className="text-[14px] fontCera text-[#6a6d75] leading-[1.25] mb-[15px]">Following our step-by-step instructions you'll experience the magic of cooking recipes that our chefs create with your family's tastes in mind.</p>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] text-[#303236] ml-8 mb-[70px]">
                  <Formik initialValues={{ emailAddress: '' }} onSubmit={onSubmit} validationSchema={advancedSchema}>
                    {({ isSubmitting }) => (
                      <Form>
                        <CustomInput label="EMAIL" name="emailAddress" type="text" placeholder="Kullanici adinizi giriniz" />
                        <button type="submit" disabled={isSubmitting} className="text-[16px] w-full h-[50px] fontCera font-semibold tracking-widest bg-[#002684] hover:bg-[#002C9B] text-[#fff] fontCera rounded-[2px]">
                          CONTINUE
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <div className="inline-block border-b-2 align-middle border-t-[#ECEEF2] w-[155px]"></div>
                  <div className="text-center text-[#6a6d75] fontCera inline-block m-2">or</div>
                  <div className="inline-block border-b-2 align-middle border-b-[#ECEEF2] w-[155px]"></div>
                  <button className="bg-black w-full h-[47.88px] relative mb-3 rounded-[5px] text-[#fff] text-[20px] tracking-wide">
                    <FaApple fontSize="1.25em" className="absolute left-[60px] top-2.5" />
                    Sign in with Apple
                  </button>
                  <button className="bg-blue-500 w-full h-[47.88px] relative rounded-[5px] text-[#fff] text-[20px] tracking-wide">
                    <FaFacebook fontSize="1.25em" className="absolute left-[40px] top-2.5" />
                    Sign in with Facebook
                  </button>
                  <div className="text-center mt-4 text-[#6a6d75] text-[14px] tracking-wide">
                    Already have an account?{' '}
                    <Link to="/users/sign_in" href="" className="text-[#245091] underline ">
                      Log In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <ul className="flex flex-row m-auto w-[50%] gap-[26px] mb-[28px] mt-10">
            <li className="w-[280px] border border-[#E3E6ED] rounded-[4px] px-[25px] text-center text-[#6a6d75]">
              <div className="relative">
                <div className="absolute -top-[8px] left-1/2 positionCenter bg-white z-100 w-[70px]">
                  <img src={calendarCheck} alt="" className="w-[44px] h-[44px] mx-auto" />
                </div>
                <h3 className="fontCera mt-[5px] mb-[10px] leading-[1.2] font-semibold text-[#303236] pt-[26px]">No Commitment</h3>
                <p className="text-[14px] leading-[1.5] fontCera">Receive your delivery whenever it's convenient, and skipping or canceling is easy.</p>
              </div>
            </li>
            <li className="w-[280px] border border-[#E3E6ED] rounded-[4px] px-[25px] text-center text-[#6a6d75]">
              <div className="relative">
                <div className="absolute -top-[8px] left-1/2 positionCenter bg-white z-100 w-[70px]">
                  <img src={papers} alt="" className="w-[44px] h-[44px] mx-auto" />
                </div>
                <h3 className="fontCera mt-[5px] mb-[10px] leading-[1.2] font-semibold text-[#303236] pt-[26px]">Personalized Menus</h3>
                <p className="text-[14px] leading-[1.5] fontCera">Select from our Signature or Signature for 4 plans. Tell us your dietary preferences and we'll personalize the menus you receive.</p>
              </div>
            </li>
            <li className="w-[280px] border border-[#E3E6ED] rounded-[4px] px-[25px] text-center text-[#6a6d75]">
              <div className="relative">
                <div className="absolute -top-[8px] left-1/2 positionCenter bg-white z-100 w-[70px]">
                  <img src={box} alt="" className="w-[44px] h-[44px] mx-auto" />
                </div>
                <h3 className="fontCera mt-[5px] mb-[10px] leading-[1.2] font-semibold text-[#303236] pt-[26px]">Convenient Delivery</h3>
                <p className="text-[14px] leading-[1.5] fontCera">Ingredients are carefully packaged in a refrigerated box so food stays fresh even if you're not home when we deliver.</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default SignUp;
