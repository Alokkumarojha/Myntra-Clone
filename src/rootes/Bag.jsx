import React from "react";
import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item}></BagItem>
            ))}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};

export default Bag;
