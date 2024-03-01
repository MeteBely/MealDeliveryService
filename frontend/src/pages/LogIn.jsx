import { Form, Formik } from 'formik';
import CustomInput from '../components/FormComponents/CustomInput.jsx';
import { advancedSchema } from '../Schemas/Index.jsx';
import { FaApple } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }),
    actions.resetForm();
};

const LogIn = () => {
  return (
    <section className="bg-[#FAFBFC] mt-[62px] border-t-[1px] border-[#ECEEF2] pb-8">
      <div className="w-[375px] h-auto pb-6 m-auto bg-white mt-8 pt-2 px-4 card rounded-[4px]">
        <h1 className="text-[#303236] text-[30px] text-center mb-[6px] fontCera font-semibold ">Log In</h1>
        <Formik initialValues={{ emailAddress: '', password: '' }} onSubmit={onSubmit} validationSchema={advancedSchema}>
          {({ isSubmitting }) => (
            <Form className="mb-2">
              <CustomInput label="EMAIL" name="emailAddress" type="text" placeholder="Kullanici adinizi giriniz" />
              <CustomInput label="PASSWORD" name="password" type="password" placeholder="Kullanici adinizi giriniz" />
              <div className="flex flex-row justify-between w-full text-[#b9b9c5]">
                <div>
                  <input className="align-middle mr-2 cursor-pointer" type="checkbox" name="" id="rememberAcc" />
                  <label htmlFor="rememberAcc" className="text-[14px] fontCera cursor-pointer">
                    Remember Me?
                  </label>
                </div>
                <Link to="/users/password/new" href="" className="text-[#0f346c] hover:underline text-[14px] fontCera">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" disabled={isSubmitting} className="text-[14px] w-full h-[47.88px] fontCera tracking-widest bg-[#235091] hover:bg-[#0F346C] text-[#fff] fontCera mt-4">
                LOG IN
              </button>
            </Form>
          )}
        </Formik>
        <div className="inline-block border-b-2 align-middle border-t-[#ECEEF2] w-[155px]"></div>
        <div className="text-center text-[#6a6d75] fontCera inline-block mx-2">or</div>
        <div className="inline-block border-b-2 align-middle border-b-[#ECEEF2] w-[155px]"></div>
        <div className="text-white fontChronicle text-[20px] mt-2">
          <button className="bg-black w-full h-[47.88px] relative mb-3 rounded-[5px]">
            <FaApple fontSize="1em" className="absolute left-[58px] top-3.5" />
            Sign in with Apple
          </button>
          <button className="bg-blue-500 w-full h-[47.88px] relative rounded-[5px]">
            <FaFacebook fontSize="1em" className="absolute left-[46px] top-3.5" />
            Sign in with Facebook
          </button>
        </div>
        <div className="text-center text-[14px] fontCera text-[#6a6d75] mt-6">
          Don`t have an account?{' '}
          <Link to="/users/sign_up" href="" className="text-[#0f346c] underline">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
