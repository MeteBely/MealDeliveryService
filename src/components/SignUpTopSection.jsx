const SignUpTopSection = () => {
  return (
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
  );
};

export default SignUpTopSection;
