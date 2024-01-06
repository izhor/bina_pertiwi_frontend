import React, { useState } from "react";
import "./style.css";

import { Select, Col, Row, Modal, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const HeaderComponent = () => {
  
  return (
    <>
      <div className="headerLayout">
        <Row justify={"space-between"}>
          <Col span={5} >
            <Link to="/">
              <img src={Logo} alt="E-Complain" className="LogoImage" />
            </Link>
          </Col>
          <Col span={14} push={2} >
            <div className="headerMenu">
              <Link className="link-item" to="/">
                <p>Home</p>
              </Link>
              <Link className="link-item" to="/homepagebantuan">
                <p>Produk</p>
              </Link>
              <Link className="link-item" to="/aboutus">
                <p>Tentang Kami</p>
              </Link>
              <Link className="link-item" to="/">
              <p>Layanan & Dukungan</p>
              </Link>
             
              
            </div>
          </Col>
          <Col span={2}>
            <Button className="login_button">
              Masuk
            </Button>
          </Col>
        </Row>
        <Row>
          <Divider/>
          <p></p>
        </Row>
      </div>
    </>
  );
};

export default HeaderComponent;
