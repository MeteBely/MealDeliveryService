import SignUpTopSectionDivider from './SignUpTopSectionDivider';
import { getDefaultLabel, getDifferentLabel } from '../utils/SignUpLabels';

const SignUpTopSection = () => {
  return (
    <header className="mt-[65px] w-full h-[60px] border border-y-[#d3d5db] pt-4">
      <ul className="flex flex-row justify-center items-center gap-2 min-[700px]:gap-4 font-light">
        {getDifferentLabel()}
        <SignUpTopSectionDivider />
        {getDefaultLabel('ACCOUNT', 2)}
        <SignUpTopSectionDivider />
        {getDefaultLabel('CHECKOUT', 3)}
        <SignUpTopSectionDivider />
        {getDefaultLabel('CHOOSE MEALS', 4)}
      </ul>
    </header>
  );
};

export default SignUpTopSection;
