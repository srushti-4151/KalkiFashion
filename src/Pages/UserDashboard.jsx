import React, { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../styles/UserDashboard.scss"; 
import { BsPerson } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LiaCreditCardSolid } from "react-icons/lia";
import { BsPersonHeart } from "react-icons/bs";
import { IoCardOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("dashboard",{replace : true});
  }, [navigate]);
  

  return (
    <>
    <div className="change-container-size">
      <div className="divcontainer py-5 px-0">
        <Row className="g-4">
          <Col xs={12} md={4} lg={3}>
            <Card className="custom-user-header halfBorderRad">
              <Card.Body className="p-0">
                <div className="d-grid p-3">
                  <h5 className="m-0">User Name</h5>
                  <p className="fs-14 fs-md-12 m-0">useremail@gmail.com</p>
                </div>
                <hr className="my-0" />
                <ListGroup className="header-link-list">
                  <ListGroup.Item className="list-item p-0">
                    <NavLink
                    to="dashboard"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    } 
                    >
                      <span>Dashboard</span>
                      <FaChevronRight size={20}/>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item p-0">
                    <NavLink
                    to="account-details"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    } 
                    >
                      <span><BsPerson size={20}/> Account Details</span>
                      <FaChevronRight size={20}/>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item p-0">
                    <NavLink 
                    to="addresses"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    } 
                    >
                      <span>
                        <CiLocationOn size={20}/> Addresses
                      </span>
                      <FaChevronRight size={20}/>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item p-0">
                    <NavLink 
                    to="orders"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    }
                    >
                      <span>
                        <LiaCreditCardSolid size={20}/> My Orders
                      </span>
                      <FaChevronRight size={20}/>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item p-0">
                  <NavLink 
                    to="saved-cards"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    }
                    >
                      <span>
                        <BsPersonHeart size={20}/> Saved Cards
                      </span>
                      <FaChevronRight size={20}/>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item p-0">
                  <NavLink 
                    to="subscription"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    }
                    >
                      <span>
                        <IoCardOutline/> Subscriptions
                      </span>
                       <FaChevronRight size={20}/>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item p-0">
                  <NavLink 
                    to="gift-cards"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    }
                    >
                      <span>Gift Cards</span>
                      <FaChevronRight size={20}/>
                    </NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item p-0">
                    <NavLink 
                    to="/women"
                    className={({ isActive }) => 
                      `flex-between ${isActive ? "active-nav" : ""}`
                    }
                    >
                      <span>Sign Out</span>
                    </NavLink>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} md={8} lg={9} className="px-1 px-md-3">
              <Outlet />
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
};

export default UserDashboard;
