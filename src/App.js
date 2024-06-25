import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import Home from './components/Home';

//Custom component --->Guard
const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  return isAuthenticated ? element : <Navigate to="/Login" />;
};
const Layout = () => (
  <div>
    <AppNavbar />
    <Outlet /> 
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Login />} /> {/* Default route */}
          <Route path="/Home" element={<Home />} />
          <Route path="/ProductPage" element={<PrivateRoute element={<ProductPage />} />} />
          <Route path="/AddProduct" element={<PrivateRoute element={<AddProduct />} />} />
          <Route path="/DeleteProduct" element={<PrivateRoute element={<DeleteProduct />} />} />
          <Route path="*" element={<Navigate to="/Login" />} /> {/* Catch-all for undefined routes */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
