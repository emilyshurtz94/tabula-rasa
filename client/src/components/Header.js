import React from 'react';
import Settings from '../pages/Settings'
import $ from 'jquery';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


export default function Header() {
  const [showModal, setShowModal] = useState(false);
  (function($){

    $(function(){

      $(".dropdown-trigger").dropdown();
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    })

  })($);
 
  
    return (
      <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Tabula Rasa</a>
        <ul class="right hide-on-med-and-down">
        <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          {/* <Navbar.Brand as={Link} to='/'>
            Google Books Search
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Search For Books
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
          <li><a href="#">Notes</a></li>
          <li><a href="#">To Dos</a></li>
          <li><a href="#">Monthly Recap</a></li>
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#">Music</a></li>
          <li><a href="#">Workouts</a></li>
          <li><a href="#">Meditation</a></li>
          <li><a href="#">Meals</a></li>
          <li><a href="#">Therapy</a></li>
          <li><a href="#">Substance Usage</a></li>
          <li><a href= {Settings}>Change Preferences</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">Logout</a></li>
          <li><a href="#">Notes</a></li>
          <li><a href="#">To Dos</a></li>
          <li><a href="#">Monthly Recap</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Workouts</a></li>
          <li><a href="#">Meditation</a></li>
          <li><a href="#">Meals</a></li>
          <li><a href="#">Therapy</a></li>
          <li><a href="#">Substance Usage</a></li>
          <li><a href={Settings}>Change Preferences</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
)}