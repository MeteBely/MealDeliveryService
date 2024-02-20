import DividerIcon from './DividerIcon';
const BlueApronCommentBox = () => {
  return (
    <section className="min-[900px]:h-[500px] h-[350px] bg-coolGray-200 text-center flex items-center justify-center">
      <div className=" w-[900px] m-auto">
        <div className="fontChronicle text-[20px] min-[900px]:text-[30px] text-[#002c9b] mb-[20px]">“Blue Apron has changed my life for the better. I am a working mom, and getting dinner on the table is convenient and delicious.”</div>
        <DividerIcon />
        <p className="fontCera text-[12px] min-[900px]:text-[14px] tracking-[2px] text-[#002c9b] mt-[30px] font-semibold">— @MABDACUMA</p>
      </div>
    </section>
  );
};

export default BlueApronCommentBox;
