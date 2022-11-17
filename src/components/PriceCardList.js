const PriceCardList = ({ data, listIcon }) => {
  const items = data;
  const listItems = items.map((item, id) => (
    <li key={id} className="flex gap-2">
      <div className="flex items-center justify-center bg-green-100 text-green-500 p-1 w-[20px] h-[20px] rounded-full">{listIcon}</div> {item}
    </li>
  ));
  return <ul className="flex flex-col gap-3">{listItems}</ul>;
};

export default PriceCardList;
