import React from "react";
import { Link } from "react-router-dom";
import { MdCreditCardOff } from "react-icons/md";
import "../styles/Orders.scss"; 

const SavedCards = () => {
  return (
    <div className="h-100 ff-lexend">
      <h4 className="p-0">My SavedCards</h4>
      <div className="h-100 g-4 pt-3 row">
        <div className="custom-order-style h-100 d-grid justify-content-center align-items-center align-content-center text-center col-12">
          <div>
            <MdCreditCardOff size={60}/>
          </div>
          <h5>No Cards Saved</h5>
          <span className="fs-12 pb-3">You have placed no stored payment methods.</span>
          <Link className="text-uppercase btn px-3 py-2" to="/">
            Start Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavedCards;
