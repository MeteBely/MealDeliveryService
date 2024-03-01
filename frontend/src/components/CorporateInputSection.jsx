import { Form, Formik } from 'formik';
import CustomInput from '../components/FormComponents/CustomInput.jsx';
import { advancedSchema } from '../Schemas/Index.jsx';
import CustomSelect from '../components/FormComponents/CustomSelect.jsx';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }),
    actions.resetForm();
};

const CorporateInputSection = () => {
  return (
    <section>
      <div className="m-auto block mt-[80px] text-center fontCera">
        <h2 className="mb-4 text-[24px] text-[#303236]">Reward your employees and clients with the gift of home cooking!</h2>
        <span className="text-[#002684] text-[18px] ">Blue Apron Corporate Gifts can be personalized by each individual.</span>
      </div>
      <Formik
        initialValues={{
          companyName: '',
          firstName: '',
          lastName: '',
          emailAddress: '',
          phoneNumber: '',
          personPlan: '',
          quantity: 0,
          additionalInformation: '',
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form className="mt-[60px] min-[820px]:w-[800px] m-auto border border-[#d3d5db] flex flex-col min-[820px]:flex-row gap-4 min-[820px]:gap-[100px] p-4">
            <div className="firstFormCol flex flex-col justify-start w-full">
              <div>
                <h3 className="text-[20px] fontCera text-[#303236] mb-[14px]">Enter contact information</h3>
              </div>
              <div>
                <CustomInput label="COMPANY NAME" name="companyName" type="text" placeholder="Kullanici adinizi giriniz" />
              </div>
              <div className="flex flex-row gap-4">
                <CustomInput label="FIRST NAME" name="firstName" type="text" placeholder="Kullanici adinizi giriniz" />
                <CustomInput label="LAST NAME" name="lastName" type="text" placeholder="Kullanici adinizi giriniz" />
              </div>
              <div className="flex flex-row gap-4">
                <CustomInput label="EMAIL ADDRESS" name="emailAddress" type="text" placeholder="Kullanici adinizi giriniz" />
                <CustomInput label="PHONE NUMBER" name="phoneNumber" type="text" placeholder="Kullanici adinizi giriniz" />
              </div>
            </div>
            <div className="secondFormCol w-full">
              <div>
                <h3 className="text-[20px] fontCera text-[#303236] mb-[14px]">Enter order details</h3>
              </div>
              <div className="flex flex-row gap-4">
                <CustomSelect label="2-PERSON PLAN" name="personPlan" placeholder="Kullanici adinizi giriniz">
                  <option value="">- select length -</option>
                  <option value="oneWeek">1 week ($76.93)</option>
                  <option value="twoWeek">2 week ($153.86)</option>
                  <option value="threeWeek">4 week ($307.72)</option>
                </CustomSelect>
                <CustomInput label="QUANTITY" min={50} name="quantity" type="number" placeholder="Kullanici adinizi giriniz" />
              </div>
              <div>
                <CustomInput label="ADDITIONAL INFORMATION" name="additionalInformation" type="text" placeholder="Kullanici adinizi giriniz" />
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="mt-[5px] text-[18px] h-[60px] px-[45px] fontCera tracking-widest bg-[#235091] hover:bg-[#0F346C] text-[#fff]">
                  SEND ORDER REQUEST
                </button>
                <p className="text-[12px] italic mt-[5px] font-light text-[#6a6d75] ">A representative will follow up for billing with a separate invoice.</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CorporateInputSection;
