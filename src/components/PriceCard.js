import PriceCardList from './PriceCardList';

const PriceCard = ({ cardText, cardTitle, cardDesc, priceBtn, data, listIcon }) => {
  return (
    <div className="flex flex-col gap-3 bg-white p-8 justify-center rounded-md shadow-lg">
      <p className="font-ibm text-primary">{cardText}</p>
      <h2 className="font-bold text-[38px] text-dark">{cardTitle}</h2>
      <p className="text-dark opacity-60 text-lg">{cardDesc}</p>
      <PriceCardList data={data} listIcon={listIcon} />
      {priceBtn}
    </div>
  );
};

export default PriceCard;
