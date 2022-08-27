import { Modal, Button, ListGroup } from "react-bootstrap";
import React, { useState } from "react";
import "../styles/style.css";

function Detail({ id, name, username, phone, email }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <div className="listgroup">
        <ListGroup>
          <ListGroup.Item className="list">
            <span>
              {id}. {name}
            </span>
            <span>
              <button type="button" className="btndetail btn btn-dark" onClick={handleShow}>
                View More
              </button>
            </span>
          </ListGroup.Item>
        </ListGroup>

        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>{name}</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Username: {username}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Detail;
