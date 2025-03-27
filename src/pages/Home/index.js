import React, { useEffect, useState } from "react";

// redux toolkit
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/apps/productSlice";

// reactstrap
import { Col, Row, Spinner } from "reactstrap";

// components and page
import Pagination from "../../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  const { products, productsLoading } = useSelector((state) => {
    return {
      products: state.product.products,
      productsLoading: state.product.productsLoading,
    };
  }, shallowEqual);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const fetchData = async () => {
    try {
      await dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (productsLoading) {
    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={{ zIndex: 1050 }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <Row>
        {currentProducts.map((item, index) => (
          <Col
            key={index}
            xxl="2"
            xl="3"
            lg="3"
            md="3"
            sm="6"
            xs="12"
            className="mb-4 mt-4"
          >
            <div style={{ height: "300px", cursor: "pointer" }}>
              <img
                src={item.productData.productMainImage}
                alt={item.productName}
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h6 className="mt-2 text-truncate" style={{ fontSize: "14px" }}>
                {item.productName}
              </h6>
            </div>
          </Col>
        ))}
      </Row>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
