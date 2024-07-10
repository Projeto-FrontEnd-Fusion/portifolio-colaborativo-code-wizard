const Advantage = ({ title, txt, icon }) => {
  return (
    <div className="w-96 bg-dark-color-second min-h-[188px] p-8 m-3 rounded-lg flex flex-col gap-4 text-[#F2F0FF] font-mulish small-screen:min-h-[290px] small-screen:gap-2 small-screen:m-0">
      <h3 className="font-bold text-[16px] small-screen:text-[19px]
      flex gap-[10px] items-center"><span className="text-[22px] text-primary-button">{icon}</span>{title}</h3>
      <p className="text-[12px] small-screen:text-[15px]">{txt}</p>
    </div>
  );
};

export default Advantage;
