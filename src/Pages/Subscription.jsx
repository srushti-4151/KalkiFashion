import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Subscription.scss"; // Custom styles file (optional)

const Subscription = () => {
  // State to manage the checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <div className="ff-lexend">
      <div className="g-4 pt-3 row">
        <div className="col-lg-4 col-12">
          <div className="default-white-box1 p-3">
            <div className="d-grid align-content-start custom-login-form1">
              <h5 className="m-0 pb-3">Subscription</h5>
              <div className="d-flex gap-0">
                <input
                  type="checkbox"
                  id="check"
                  checked={isChecked} 
                  onChange={handleCheckboxChange} 
                />
                <label htmlFor="check">General Subscription</label>
              </div>
              <p className="fs-12 m-0 py-3">
                This is only for sending new updates to your mail ID.
              </p>
              <Link
                className="text-uppercase btnsub text-center"
                to="/user/subscription"
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
