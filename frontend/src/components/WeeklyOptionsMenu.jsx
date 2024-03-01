import '../App.css';

const WeeklyOptionsMenu = ({ mealBox }) => {
  return (
    <div className="mealBoxDiv">
      <img src={mealBox.src} className="w-[340px]" />
      <p className="fontCera mealTitle text-[13px] font-bold tracking-[1.3px] text-[#002c9b] text-center mt-2">{mealBox.title}</p>
      <p className="fontCera mealSubtitle text-[15px] text-[#6a6d75] text-center mb-3">{mealBox.description}</p>
    </div>
  );
};

export default WeeklyOptionsMenu;
