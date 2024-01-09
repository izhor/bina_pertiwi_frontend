import { Button, Col, Divider, Form, Row, Space } from "antd";
import React from "react";
import "./style.css";
import { LogoPutih } from "../../assets";
import Input from "antd/es/input/Input";
import Gap from "../gap/gap";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <Row justify={"space-between"} >
          <Col>
            <img
              src={LogoPutih}
              alt="Logo Bina Pertiwi Putih"
              className="logo-footer"
            />
            <p className="footer-desc">
              Generate outside the box thinking with <br />
              the possibility to target the low.
            </p>
            <Gap height={10}/>
            <Space>
            <Space.Compact style={{ width: "100%" }}>
              <Input className="input-footer" placeholder="hehe" />
              <Button className="button-footer" type="primary">Submit</Button>
            </Space.Compact>
            </Space>
          </Col>
          <Gap width={209}/>
          <Col>
          <p className="footer-title">
            Lorem Ipsum
          </p>
         <Gap height={24}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          </Col>
          <Gap width={209}/>
          <Col>
          <p className="footer-title">
            Lorem Ipsum
          </p>
         <Gap height={24}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          </Col>
          <Gap width={209}/>
          <Col>
          <p className="footer-title">
            Lorem Ipsum
          </p>
         <Gap height={24}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          <p>lorem gipsum</p>
          <Gap height={12}/>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Divider/>
          <p>© 2023 Binapertiwi. All Rights Reserved</p>
        </Row>
      </div>
    </>
  );
};

export default FooterComponent;
