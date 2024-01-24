import React from "react";
import "./style.css";
import FooterComponent from "../../component/footer/footerComponent";
import HeaderComponent from "../../component/header/headerComponent";
import { Carousel, Col, Row } from "antd";
import { HeroImg } from "../../assets";
import { ArrowRightOutlined } from "@ant-design/icons";
import { DATA } from "./mockdata/data";
import ProductCard from "../../component/productcard/productCard";

const Home = () => {
  return (
    <>
      <HeaderComponent/>
      <Row justify={"center"}>
        <div className="hero">
          <Carousel autoplay="true">
            <div className="hero-img"></div>
            <div className="hero-img"></div>
            <div className="hero-img"></div>
          </Carousel>
        </div>
      </Row>

      <Row className="kualitas" align={"middle"} justify={"space-around"}>
        <Col>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>consectetur adipiscing elit, sed do eiusmod</p>
        </Col>
        <Col>
          <h4>Kualitas Terjamin</h4>
          <p>Barang original pabrik dari setiap Produsen</p>
        </Col>
        <Col>
          <h4>Kualitas Terjamin</h4>
          <p>barang original pabrik dari setiap Produsen</p>
        </Col>
      </Row>

      <Row className="produk" align={"middle"} justify={"space-between"}>
        <h2 className="produk-title">Produk</h2>
        <div className="show-all">
          <a>Lihat Semua</a>
          <ArrowRightOutlined />
        </div>
      </Row>

      <Row className="produk-card"  gutter={[37, 23]}>
        {DATA.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
      <Row className="produk" align={"middle"} justify={"space-between"}>
        <h2 className="produk-title">Kategori</h2>
        <div className="show-all">
          <a>Lihat Semua</a>
          <ArrowRightOutlined />
        </div>
      </Row>
          <Row>
            
          </Row>
      <FooterComponent />
    </>
  );
};

export default Home;
