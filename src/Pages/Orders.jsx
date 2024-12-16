import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import "../styles/Orders.scss"; 

const Orders = () => {
  return (
    <div className="h-100 ff-lexend">
      <h4 className="p-0">My Orders</h4>
      <div className="h-100 g-4 pt-3 row">
        <div className="custom-order-style h-100 d-grid justify-content-center align-items-center align-content-center text-center col-12">
          <div>
            {/* React Icon */}
            <MdOutlineRemoveShoppingCart size={60}/>
          </div>
          <h5>No Orders Yet</h5>
          <span className="fs-12 pb-3">You have placed no orders.</span>
          <Link className="text-uppercase btn px-3 py-2" to="/">
            Start Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;
