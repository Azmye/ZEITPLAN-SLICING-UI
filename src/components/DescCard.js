const DescCard = ({ cardIcon, cardTitle, description }) => {
  return (
    <div className="p-8 w-[300px] bg-primary/10 rounded-md flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <div className="p-3 flex items-center justify-center bg-primary/30 text-primary rounded-md">{cardIcon}</div>
        <h4 className="font-bold">{cardTitle}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default DescCard;
