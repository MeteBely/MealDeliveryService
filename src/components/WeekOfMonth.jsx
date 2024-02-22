// eslint-disable-next-line react/prop-types
const WeekOfMonth = ({ date }) => {
  return (
    <div className={`w-full flex flex-row justify-between min-[1200px]:justify-around px-2 items-center selectMenuBox pb-[5px] bg-white`}>
      <span className="tracking-[.25em] min-[640px]:tracking-[.27em] text-[#002c9b] text-[17px] min-[640px]:text-[18px] fontCera font-semibold">{date}</span>
      <button className="fontCera text-[13px] min-[640px]:text-[14px] rounded-[30px] h-[40px] min-[640px]:h-[45px] px-[33px] w-[160px] min-[640px]:w-[180px] bg-blue-700 text-white tracking-[2px] font-semibold">SEE PLANS</button>
    </div>
  );
};

export default WeekOfMonth;
