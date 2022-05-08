import './myStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import AuthProvider from './components/Context/AuthContext/AuthProvider';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import AddProducts from './components/Dashboard/AddProduct/AddProducts';
import UpdateProducts from './components/Dashboard/UpdateProducts/UpdateProducts';
import AllProducts from './components/Dashboard/AllProducts/AllProducts';
import Orders from './components/Dashboard/Orders/Orders';
import Users from './components/Dashboard/Users/Users';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';
import CartHome from './components/CartHome/CartHome';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Index from './components/Dashboard/DashboardHome/Index';
import Shop from './components/Dashboard/Shop/Shop';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';
import AdminRoute from './components/Authentication/AdminRoute/AdminRoute';
import MakePayment from './components/Dashboard/Payment/MakePayment';
import ContactUs from './components/Contact/ContactUs';

toast.configure()
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cartHome" element={<CartHome />} />
          <Route path="placeOrder" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
          <Route path="contact" element={<ContactUs />} />

          <Route path='dashboard' element={<DashboardHome />}>
            <Route index element={<Index />} />
            <Route path="shop" element={<Shop />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/payment/:orderId" element={<MakePayment />} />
            <Route path="addProducts" element={<AdminRoute><AddProducts /></AdminRoute>} />
            <Route path="users" element={<AdminRoute><Users /></AdminRoute>} />
            <Route path="manageOrders" element={<AdminRoute><ManageOrders /></AdminRoute>} />
            <Route path="allProducts" element={<AdminRoute><AllProducts /></AdminRoute>} />
            <Route path="allProducts/:productId" element={<UpdateProducts />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
