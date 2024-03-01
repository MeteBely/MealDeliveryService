import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FrequentlyAskedQuestions from '../data/FrequentlyAskedQuestions.jsx';

const PricingQuestions = () => {
  return (
    <section>
      <h1 className="text-[#303235] fontChronicle text-[30px] text-center mt-[50px] mb-[35px]">Frequently asked questions</h1>
      <div className="w-[450px] m-auto border-none">
        {FrequentlyAskedQuestions.map((question, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className="text-[#000] text-[15px] fontCera">
                {question.title}
              </AccordionSummary>
              <AccordionDetails className="text-[#696d75] fontCera text-[14px]">{question.answer}</AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <button className="block m-auto text-[#002684] border-2 border-[#002684] w-[185px] h-[45px] mt-12 mb-20 rounded-3xl fontCera text-[14px] tracking-widest font-semibold hover:bg-[#F8F9FA]">VIEW ALL FAQS</button>
    </section>
  );
};

export default PricingQuestions;
