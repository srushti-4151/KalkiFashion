import React from "react";
import { Link } from "react-router-dom";
import { TbGiftOff } from "react-icons/tb";
import "../styles/Orders.scss"; 

const GiftCard = () => {
  return (
    <div className="h-100 ff-lexend">
      <h4 className="p-0">My GiftCard</h4>
      <div className="h-100 g-4 pt-3 row">
        <div className="custom-order-style h-100 d-grid justify-content-center align-items-center align-content-center text-center col-12">
          <div>
            <TbGiftOff size={60}/>
          </div>
          <h5>No Gift cards</h5>
          <span className="fs-12 pb-3">At his time you are not have gift card.</span>
          <Link className="text-uppercase btn px-3 py-2" to="/">
            Start Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
