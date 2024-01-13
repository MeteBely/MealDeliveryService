import { AiOutlineMinus } from 'react-icons/ai';

const DividerIcon = () => {
  const lineIcons = Array.from({ length: 15 }, (v, i) => <AiOutlineMinus key={i} className="inline-block" />);
  return lineIcons;
};

export default DividerIcon;
