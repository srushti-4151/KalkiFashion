import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './styles/custom.scss'; 
import 'swiper/css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './Pages/Home.jsx';
import Layout from './Layout.jsx';
import BridalPage from './Pages/BridalPage.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
import UserDashboard from './Pages/UserDashboard.jsx';
import UserDetails from './Pages/UserDetails.jsx';
import AccountDetails from './Pages/AccountDetails.jsx';
import Orders from './Pages/Orders.jsx';
import GiftCard from './Pages/GiftCard.jsx';
import SavedCards from './Pages/SavedCards.jsx';
import Subscription from './Pages/Subscription.jsx';
import AddressForm from './Pages/AddressForm.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='women' element={<Home/>}/>
      <Route path='bridal' element={<BridalPage/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>

      <Route path="/user-dashboard" element={<UserDashboard />}>
        <Route path='dashboard' element={<UserDetails/>}/>
        <Route path='account-details' element={<AccountDetails/>}/>
        <Route path='user-details' element={<UserDetails/>}/>
        <Route path='addresses' element={<AddressForm/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='gift-cards' element={<GiftCard/>}/>
        <Route path='saved-cards' element={<SavedCards/>}/>
        <Route path='subscription' element={<Subscription/>}/>
        
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);

