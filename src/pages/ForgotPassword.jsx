import { Form, Formik } from 'formik';
import CustomInput from '../components/FormComponents/CustomInput.jsx';
import { advancedSchema } from '../Schemas/Index.jsx';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }),
    actions.resetForm();
};

const ForgotPassword = () => {
  return (
    <section className="bg-[#FAFBFC] mt-[62px] border-t-[1px] border-[#ECEEF2] pb-8">
      <div className="w-[375px] h-auto pb-6 m-auto bg-white mt-8 pt-2 px-4 card rounded-[4px]">
        <h1 className="text-[#303236] text-[30px] text-center mb-[6px] fontCera font-semibold ">Forgot Password</h1>
        <p className="mb-[15px] text-[#6a6d75] leading-[24px] text-[15px] ">Enter the email address associated with your account, and we’ll email you a link to reset your password.</p>
        <Formik initialValues={{ emailAddress: '' }} onSubmit={onSubmit} validationSchema={advancedSchema}>
          {({ isSubmitting }) => (
            <Form className="">
              <CustomInput label="EMAIL" name="emailAddress" type="text" placeholder="Kullanici adinizi giriniz" />
              <button type="submit" disabled={isSubmitting} className="text-[14px] w-full h-[47.88px] fontCera tracking-widest bg-[#235091] hover:bg-[#0F346C] text-[#fff] fontCera uppercase">
                Send Reset Instructions
              </button>
            </Form>
          )}
        </Formik>
        <div className="text-center text-[14px] fontCera text-[#0d2a54] mt-6">
          <Link to="/users/sign_in" className="underline" href="">
            Log In
          </Link>
          <div className="inline-block w-4">|</div>
          <Link to="/users/sign_up" href="" className="underline">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
