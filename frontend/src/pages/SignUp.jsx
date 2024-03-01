import SignUpTopSection from '../components/SignUpTopSection.jsx';
import SignUpMainContent from '../components/SignUpMainContent.jsx';
import SignUpBottomSection from '../components/SignUpBottomSection.jsx';
const SignUp = () => {
  return (
    <>
      <SignUpTopSection />
      <main>
        <SignUpMainContent />
        <SignUpBottomSection />
      </main>
    </>
  );
};

export default SignUp;
