import { FaApple } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import foodBox from '../assets/foodBox.png';
import foodCard from '../assets/foodCard.png';
import { Form, Formik } from 'formik';
import CustomInput from '../components/FormComponents/CustomInput.jsx';
import { advancedSchema } from '../Schemas/Index.jsx';
import { Link } from 'react-router-dom';

const SignUpMainContent = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }),
      actions.resetForm();
  };

  return (
    <section>
      <div className="signUpContainerDiv h-[970px] min-[980px]:h-[700px] w-auto min-[1440px]:w-[1400px] m-auto object-cover relative ">
        <div className="bg-white min-[980px]:w-[950px] w-[450px] h-[925px] min-[980px]:h-auto absolute top-1/2 left-1/2 positionCenter pt-4 min-[980px]:pt-[30px] px-[36px] pb-4">
          <h1 className="text-center text-[26px] min-[980px]:text-[28px] mb-2 text-[#002c9b] fontCera font-bold ">Enjoy $110 off across 5 boxes—plus, your first box ships free!</h1>
          <h2 className="min-[980px]:mb-[48px] mb-8 text-center text-[13px] text-[#6a6d75] fontCera ">
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
          <div className="flex flex-col min-[980px]:flex-row gap-4 min-[980px]:gap-[100px]">
            <div className="flex flex-col min-[980px]:w-[40%] justify-center items-center gap-4">
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
            <div className="min-[980px]:w-[40%] w-auto text-[#303236] ml-8 mb-[70px]">
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
  );
};

export default SignUpMainContent;
