export const getDefaultLabel = (text, number) => {
  return (
    <li className="flex flex-row items-center justify-center w-auto">
      <div className="w-6 h-6 min-[700px]:w-[25px] min-[700px]:h-[25px] border border-[#d3d5db] rounded-[50%] text-[14px] fontCera text-[#002684] mr-[5px] min-[700px]:mr-[10px] flex justify-center items-center">{number}</div>
      <p className="text-[#6a6d75]  text-center text-[12px]  min-[700px]:text-[14px] tracking-wide min-[700px]:tracking-widest min-[700px]:font-semibold">{text}</p>
    </li>
  );
};

export const getDifferentLabel = () => {
  return (
    <li className="flex flex-row items-center justify-center w-auto">
      <div className="w-6 h-6 min-[700px]:w-[25px] min-[700px]:h-[25px]  bg-[#002684] text-white rounded-[50%] mr-[5px] min-[700px]:mr-[10px] fontCera flex justify-center items-center text-[14px]">1</div>
      <p className="text-[#6a6d75] text-[12px]  min-[700px]:text-[14px] tracking-wide min-[700px]:tracking-widest min-[700px]:font-semibold">PLAN</p>
    </li>
  );
};
