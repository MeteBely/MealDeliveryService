import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-[20px] fontCera w-full">
      <label className="text-[13px] mb-[5px] fontCera tracking-widest">{label}</label>
      <input {...field} {...props} className="border block border-[#d3d5db] h-[40px] rounded-[3px] px-[10px] w-full CoSaFormInput" />
      {/*tailwind kullandığın için className={meta.error ? 'input-error' : ''} kaldırdın. */}
      {meta.error && <div className="text-[14px] bg-[#d64148] fontCera py-[9px] px-[10px] text-[#fff] leading-[21px] rounded-b-[4px]">{meta.error}</div>}
    </div>
  );
};

export default CustomInput;
