import { SignatureTwoServingFirstWeek, SignatureTwoServingSecondWeek, SignatureTwoServingThirdWeek, SignatureTwoServingFourthWeek } from '../data/onTheMenuDatas/SignatureTwoServing';
import { SignatureFourServingFirstWeek, SignatureFourServingSecondWeek, SignatureFourServingThirdWeek, SignatureFourServingFourthWeek } from '../data/onTheMenuDatas/SignatureForHourFourServing';
import { AddOnsWeeklyOptionsFirstWeek, AddOnsWeeklyOptionsSecondWeek, AddOnsWeeklyOptionsThirdWeek, AddOnsWeeklyOptionsFourthWeek } from '../data/onTheMenuDatas/Add-OnsWeeklyOptions';
import { VegetarianTwoServingFirstWeek, VegetarianTwoServingSecondWeek, VegetarianTwoServingThirdWeek, VegetarianTwoServingFourthWeek } from '../data/onTheMenuDatas/VegetarianTwoServing';
import { WellnessTwoServingFirstWeek, WellnessTwoServingSecondWeek, WellnessTwoServingThirdWeek, WellnessTwoServingfourthWeek } from '../data/onTheMenuDatas/WellnessTwoServing';

const OnTheMenuFunc = (activeBtn, setActiveMenusFirstWeek, setActiveMenusSecondWeek, setActiveMenusThirdWeek, setActiveMenusFourthWeek) => {
  if (activeBtn === 'btnOne') {
    setActiveMenusFirstWeek(SignatureTwoServingFirstWeek);
    setActiveMenusSecondWeek(SignatureTwoServingSecondWeek);
    setActiveMenusThirdWeek(SignatureTwoServingThirdWeek);
    setActiveMenusFourthWeek(SignatureTwoServingFourthWeek);
  } else if (activeBtn === 'btnTwo') {
    setActiveMenusFirstWeek(VegetarianTwoServingFirstWeek);
    setActiveMenusSecondWeek(VegetarianTwoServingSecondWeek);
    setActiveMenusThirdWeek(VegetarianTwoServingThirdWeek);
    setActiveMenusFourthWeek(VegetarianTwoServingFourthWeek);
  } else if (activeBtn === 'btnThree') {
    setActiveMenusFirstWeek(WellnessTwoServingFirstWeek);
    setActiveMenusSecondWeek(WellnessTwoServingSecondWeek);
    setActiveMenusThirdWeek(WellnessTwoServingThirdWeek);
    setActiveMenusFourthWeek(WellnessTwoServingfourthWeek);
  } else if (activeBtn === 'btnFour') {
    setActiveMenusFirstWeek(SignatureFourServingFirstWeek);
    setActiveMenusSecondWeek(SignatureFourServingSecondWeek);
    setActiveMenusThirdWeek(SignatureFourServingThirdWeek);
    setActiveMenusFourthWeek(SignatureFourServingFourthWeek);
  } else if (activeBtn === 'btnFive') {
    setActiveMenusFirstWeek(AddOnsWeeklyOptionsFirstWeek);
    setActiveMenusSecondWeek(AddOnsWeeklyOptionsSecondWeek);
    setActiveMenusThirdWeek(AddOnsWeeklyOptionsThirdWeek);
    setActiveMenusFourthWeek(AddOnsWeeklyOptionsFourthWeek);
  }
};

export default OnTheMenuFunc;
