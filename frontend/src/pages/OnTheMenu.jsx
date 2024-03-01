import { useEffect, useState } from 'react';
import '../App.css';
import Offer from '../components/Offer';
import { SignatureTwoServingFirstWeek, SignatureTwoServingSecondWeek, SignatureTwoServingThirdWeek, SignatureTwoServingFourthWeek } from '../data/onTheMenuDatas/SignatureTwoServing';
import OnTheMenuFirstSection from '../components/OnTheMenuFirstSection';
import OnTheMenuSecondSection from '../components/OnTheMenuSecondSection';
import OnTheMenuThirdSection from '../components/OnTheMenuThirdSection';
import OnTheMenuFourthSection from '../components/OnTheMenuFourthSection';
import OnTheMenuFifthSection from '../components/OnTheMenuFifthSection';
import OnTheMenuBottomSection from '../components/OnTheMenuBottomSection';
import OnTheMenuFunc from '../utils/OnTheMenuFunc';

const OnTheMenu = () => {
  const [activeBtn, setActiveBtn] = useState('btnOne');
  const [activeMenusFirstWeek, setActiveMenusFirstWeek] = useState(SignatureTwoServingFirstWeek);
  const [activeMenusSecondWeek, setActiveMenusSecondWeek] = useState(SignatureTwoServingSecondWeek);
  const [activeMenusThirdWeek, setActiveMenusThirdWeek] = useState(SignatureTwoServingThirdWeek);
  const [activeMenusFourthWeek, setActiveMenusFourthWeek] = useState(SignatureTwoServingFourthWeek);

  useEffect(() => {
    OnTheMenuFunc(activeBtn, setActiveMenusFirstWeek, setActiveMenusSecondWeek, setActiveMenusThirdWeek, setActiveMenusFourthWeek);
  }, [activeBtn]);

  return (
    <>
      <header className="mt-[60px] border-t border-t-gray-300">
        <div className="h-[120px] bg-[#f8f9fa] pt-[22px]">
          <Offer />
        </div>
      </header>
      <main>
        <OnTheMenuFirstSection setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
        <OnTheMenuSecondSection activeMenusFirstWeek={activeMenusFirstWeek} />
        <OnTheMenuThirdSection activeMenusSecondWeek={activeMenusSecondWeek} />
        <OnTheMenuFourthSection activeMenusThirdWeek={activeMenusThirdWeek} />
        <OnTheMenuFifthSection activeMenusFourthWeek={activeMenusFourthWeek} />
      </main>
      <OnTheMenuBottomSection />
    </>
  );
};

export default OnTheMenu;
