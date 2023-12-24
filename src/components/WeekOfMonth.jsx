// eslint-disable-next-line react/prop-types
const WeekOfMonth = ({ date }) => {
  return (
    <div className={`w-full flex flex-row justify-center items-center gap-[675px] selectMenuBox pb-[5px] bg-white`}>
      <span className="tracking-[.27em] text-[#002c9b] text-[18px] fontCera font-semibold">{date}</span>
      <button className="fontCera text-[14px] rounded-[30px] h-[45px] px-[33px] w-[180px] bg-blue-700 text-white tracking-[2px] font-semibold">SEE PLANS</button>
    </div>
  );
};

export default WeekOfMonth;
