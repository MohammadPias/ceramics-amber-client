import './myStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path='dashboard' element={<DashboardHome />}>
            <Route path="addProducts" element={<AddProducts />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
            <Route path="manageOrders" element={<ManageOrders />} />
            <Route path="allProducts" element={<AllProducts />} />
            <Route path="updateProducts" element={<UpdateProducts />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
