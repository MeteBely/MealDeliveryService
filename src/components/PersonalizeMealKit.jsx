import Offer from '../components/Offer.jsx';
import SelectPlan from './SelectPlan.jsx';
import ChoosePreferences from './ChoosePreferences.jsx';
import PersonalizeTitle from './PersonalizeTitle.jsx';

const PersonalizeMealKit = () => {
  return (
    <section className="mt-[60px] border-t-[1px] border-[#ECEEF2] pt-[25px] bg-coolGray-200 h-[950px]">
      <Offer />
      <PersonalizeTitle />
      <div className="bg-white m-auto w-[1075px] h-[680px] flex flex-row justify-evenly items-start gap-12 fontCera">
        <ChoosePreferences />
        <SelectPlan />
      </div>
    </section>
  );
};

export default PersonalizeMealKit;
