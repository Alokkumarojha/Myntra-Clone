import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/BagSlice";
import { FaPlus, FaTrash } from "react-icons/fa";

const HomeItem = ({ item }) => {
  const bagItem = useSelector((store) => store.bag);
  const elementFound = bagItem.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);

  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag d-flex align-items-center"
          onClick={handleRemove}
        >
          <FaTrash className="me-2" /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag d-flex align-items-center"
          onClick={handleAddToBag}
        >
          <FaPlus className="me-2" /> Add To Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
