const FeatureCard = ({ cardDesc, cardIcon, cardTitle }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-primary">{cardIcon}</div>
      <h1 className="text-dark text-lg">{cardTitle}</h1>
      <p className="text-dark/50 text-base">{cardDesc}</p>
    </div>
  );
};

export default FeatureCard;
