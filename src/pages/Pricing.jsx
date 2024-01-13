import '../App.css';
import PricingQuestions from '../components/PricingQuestions.jsx';
import BlueApronCommentBox from '../components/BlueApronCommentBox.jsx';
import PricingReasons from '../components/PricingReasons.jsx';
import PlusWeeklyOptions from '../components/PlusWeeklyOptions.jsx';
import PersonalizeMealKit from '../components/PersonalizeMealKit.jsx';

const Pricing = () => {
  return (
    <main>
      <PersonalizeMealKit />
      <PlusWeeklyOptions />
      <PricingReasons />
      <BlueApronCommentBox />
      <PricingQuestions />
    </main>
  );
};

export default Pricing;
