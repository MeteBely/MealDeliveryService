const CorporateInfoSection = () => {
  return (
    <section>
      <div className="flex flex-col min-[1200px]:flex-row  min-[1200px]:w-[1200px] m-auto items-center min-[1200px]:items-start gap-8 justify-center min-[1200px]:justify-between min-[1200px]:gap-16 mt-12 px-[20px]">
        <div className="text text-[#303236] text-center min-[1200px]:text-left min-[1200px]:w-[48%]">
          <div className="mb-[40px]">
            <h3 className="mb-[5px] text-[17px] fontChronicle">No Commitment</h3>
            <p className="text-[15px] fontCera font-thin">Get your delivery when it’s convenient for you.</p>
          </div>
          <div className="mb-[40px]">
            <h3 className="mb-[5px] text-[17px] fontChronicle">Personalized Menus</h3>
            <p className="text-[15px] fontCera font-thin">Tell us your dietary preferences and we’ll personalize the menus you receive.</p>
          </div>
          <div>
            <h3 className="mb-[5px] text-[17px] fontChronicle">Convenient Delivery</h3>
            <p className="text-[15px] fontCera font-thin">Ingredients are carefully packaged in a refrigerated box so food stays fresh even if you’re not home when we deliver.</p>
          </div>
        </div>
        <div className="image mb-[40px]">
          <img src="https://media.blueapron.com/assets/gifts/gift-intro-bg-mothers-day-e0ad80ef0ea41bc82c69cc1c0d5234e70f938c691fcf49241da54b079f26c0d2.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CorporateInfoSection;
