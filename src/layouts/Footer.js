import React from "react";

import Logo from "../assets/logo/hyper_logo.png";
import { Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container">
        <Row className="pt-4 pb-4">
          <Col md={6}>
            <div className="d-flex flex-column text-start">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="hyperui Logo" width="200" />
              </a>
              <p className="mt-4 fw-medium" style={{ fontSize: "0.7rem" }}>
                Türkiyenin En Büyük Oyuncu Pazarı: Sevdiğiniz oyunlar için epin,
                goldbar, ve item'ları en uygun fiyatlarla satın alın veya
                hesaplarınızı güvenle satışa çıkartın.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column text-end">
              <div>
                <h5>İletişim</h5>
              </div>
            </div>
          </Col>
        </Row>

        <div className="nav-space"></div>

        <h6 className="mb-2 mt-4 " style={{ fontSize: "0.7rem" }}>
          © {new Date().getFullYear()} hyperui. Tüm hakları saklıdır.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
