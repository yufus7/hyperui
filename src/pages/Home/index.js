import React, { useEffect, useState } from "react";

// redux toolkit
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/apps/productSlice";

// reactstrap
import {
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Sadece 5 sayfa numarası göstermek için hesaplama
  const getPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (productsLoading) {
    return null;
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
            className="mb-4"
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

      {/* <Pagination className="mt-3 justify-content-center">
        <PaginationItem disabled={currentPage <= 1}>
          <PaginationLink
            previous
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {getPageNumbers().map((page) => (
          <PaginationItem key={page} active={currentPage === page}>
            <PaginationLink onClick={() => handlePageChange(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage >= totalPages}>
          <PaginationLink
            next
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </Pagination> */}
    </div>
  );
};

export default Home;
