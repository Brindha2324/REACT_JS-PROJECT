import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink, Link} from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { logout } from '../redux/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

const AppNavbar = () => {
  const userDetails = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/Login'); // Redirect to the login page after user has been  logged out....
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/Home">Ecommerce</Navbar.Brand> 
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {userDetails.isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/ProductPage">Products</Nav.Link>
                <Nav.Link as={NavLink} to="/AddProduct">Add Product</Nav.Link>
                <Nav.Link as={NavLink} to="/DeleteProduct">Delete Product</Nav.Link>
                
                <Navbar.Text style={{ padding: '5px' }}>
                  Signed in as: {userDetails.user}
                </Navbar.Text>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate('/Login')}>Login</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
