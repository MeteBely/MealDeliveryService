import DividerIcon from './DividerIcon';
const BlueApronCommentBox = () => {
  return (
    <section className="h-[500px] bg-coolGray-200 text-center relative">
      <div className="positionCenter w-[900px] absolute top-1/2 left-1/2">
        <div className="fontChronicle text-[30px] text-[#002c9b] mb-[20px]">“Blue Apron has changed my life for the better. I am a working mom, and getting dinner on the table is convenient and delicious.”</div>
        <DividerIcon />
        <p className="fontCera text-[14px] tracking-[2px] text-[#002c9b] mt-[30px] font-semibold">— @MABDACUMA</p>
      </div>
    </section>
  );
};

export default BlueApronCommentBox;
