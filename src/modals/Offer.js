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
import "../css/offer.css";
import "../App.css";
import imageproduct from "../images/Group52.jpg"

function Offer(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [product,setProductId] = useState(props.productdata);

  return (
    <>
      <div>
        <button
          onClick={handleShow}
          variant="primary"
          className="offerbutton"
        >
          Teklif Ver
        </button>
      </div>
      <Modal className="modal" show={show} onHide={handleClose}>
        <div className="modalbody">
          <ModalHeader closeButton>
            <ModalTitle>Teklif Ver</ModalTitle>
          </ModalHeader>

          <ModalBody className="modalBody">
          <label className="productshow" style={{display:"flex",justifyContent:"space-between"}}>
            <div className="left" style={{float:"left"}}>
            <img
          src={imageproduct}
          alt="womanphoto"
          style={{ width:"4rem",
            height: "4rem" }}
        ></img>
             {product.name}
             </div>
             <div className="right" style={{textAlign:"right"}}>
               {product.price}
             </div>
            </label>
            <label>
              <button> <input type="checkbox" ng-model="item.Selected"></input>%20'si Kadar Teklif Ver</button>
            </label>
            <label>
              <button> <input type="checkbox" ng-model="item.Selected"></input>%30'u Kadar Teklif Ver</button>
            </label>
            <label>
              <button><input type="checkbox" ng-model="item.Selected"></input>%40'ı Kadar Teklif Ver</button>
            </label>
            <label>
              <input type="text" ng-model="item.Selected" placeholder="Teklif Belirle"></input>
            </label>
          </ModalBody>
          <ModalFooter className="footermodal">
            <Button onClick={handleClose} variant="secondary">
              Onayla
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}

export default Offer;
