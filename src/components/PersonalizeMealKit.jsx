import Offer from '../components/Offer.jsx';
import SelectPlan from './SelectPlan.jsx';
import ChoosePreferences from './ChoosePreferences.jsx';
import PersonalizeTitle from './PersonalizeTitle.jsx';

const PersonalizeMealKit = () => {
  return (
    <section className="mt-[60px] border-t-[1px] border-[#ECEEF2] pt-[25px] bg-coolGray-200 h-[950px]">
      <Offer />
      <PersonalizeTitle />
      <div className="bg-white pb-4 m-auto w-auto min-[1100px]:w-[1075px] h-automin-[1100px]:h-[680px] flex flex-col justify-center items-center min-[1100px]:flex-row min-[1100px]:justify-evenly min-[1100px]:items-start gap-2 min-[1100px]:gap-12 fontCera">
        <ChoosePreferences />
        <SelectPlan />
      </div>
    </section>
  );
};

export default PersonalizeMealKit;
