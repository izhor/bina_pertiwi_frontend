import { Col, Row } from "antd";
import React from "react";
import "./style.css"
import { LogoPutih } from "../../assets";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <Row>
          <Col>
            <img src={LogoPutih} alt="Logo Bina Pertiwi Putih" className="logo-footer" />
            <p>Generate outside the box thinking with <br/>the possibility to target the low.</p>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
};

export default FooterComponent;
