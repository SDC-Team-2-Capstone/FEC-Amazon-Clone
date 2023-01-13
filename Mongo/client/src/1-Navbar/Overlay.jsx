import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxHamburgerMenu, BsPersonCircle } from 'react-icons/all';

function Overlay(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{
          backgroundColor: '#232f3e',
          borderColor: 'transparent',
          display: 'flex',
          flexFlow: ' row nowrap',
          alignItems: 'center',
          gap: '5px',
        }}
        onClick={handleShow}
      >
        <RxHamburgerMenu /> All
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ backgroundColor: '#232f3e', color: 'white' }} closeButton>
          <Offcanvas.Title>
            {' '}
            <BsPersonCircle /> Hello, Sign in{' '}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5 className="h5-a" style={{ color: 'black', fontSize: '18px', fontWeight: '300' }}>
            Trending
          </h5>
          {props.excess.map((item, index) => (
            <p key={index} className="a">
              {item}
            </p>
          ))}
          <ul className="spaceTime" style={{ height: '5px', border: '7px', borderTopColor: 'black' }}></ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Overlay;
