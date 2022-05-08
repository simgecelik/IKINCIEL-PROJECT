import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import "../css/buy.css";
import "../App.css";

function Offer(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div>
        <button
          onClick={handleShow}
          variant="primary"
          className="buybutton"
        >
          Satın Al
        </button>
      </div>
      <Modal className="modal" show={show} onHide={handleClose}>
        <div className="modaltitle">
          <ModalHeader closeButton>
            <ModalTitle >Satın Al</ModalTitle>
          </ModalHeader>

          <ModalBody className="modalBody">
             <p>Satın Almak istiyor Musunuz?</p>
          </ModalBody>
          <ModalFooter className="footermodal">
            <Button onClick={handleClose} variant="secondary">
              Vazgeç
            </Button>
            <Button onClick={handleClose} variant="secondary">
              Satın Al
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}

export default Offer;
