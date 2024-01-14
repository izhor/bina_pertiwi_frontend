import { Badge, Button, Card, Col, Row, Tag } from "antd";
import React from "react";
import "./style.css"
import { Logo, ProductImg } from "../../assets";
import Gap from "../gap/gap";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const ProductCard = ({ product }) => {
  return (
    <Col key={product.id}>
      <Card
      style={{
        width: "277px",
        
        
      }}
      className="card"
        key={product.id}

        cover={
          <>
            <div className="cover">
              {product.new ? (
                <Tag className="card-tag" color="#EE5858">
                  New
                </Tag>
              ) : (
                <Tag className="card-tag" color="#32a852">
                  Used
                </Tag>
              )}
          
            <Row justify={"center"}>
              <img src={ProductImg}  />
            </Row>
            </div>
          </>
        }
      >
        <p className="card-title">{product.title}</p>
        <p className="card-desc">{product.desc}</p>
        <Gap height={21}/>
        <Link to="https://reactrouter.com/en/main/components/link">Baca Selengkapnya <RightOutlined></RightOutlined></Link>
      </Card>
    </Col>
  );
};

export default ProductCard;
