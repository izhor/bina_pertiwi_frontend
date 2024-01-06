import React, { useState } from "react";
import "./style.css";

import { Select, Col, Row, Modal, Button } from "antd";
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
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/homepagebantuan">
                <p>Produk</p>
              </Link>
              <Link to="/aboutus">
                <p>Tentang Kami</p>
              </Link>
              <Link to="/">
              <p>Layanan & Dukungan</p>
              </Link>
             
              
            </div>
          </Col>
          <Col span={3}>
            <Button className="login_button">
              Masuk
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HeaderComponent;
