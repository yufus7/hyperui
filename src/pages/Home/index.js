import React, { useEffect } from "react";

// redux toolkit
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/apps/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { products, productsLoading } = useSelector((state) => {
    return {
      products: state.product.products,
      productsLoading: state.product.productsLoading,
    };
  }, shallowEqual);

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

  return <div></div>;
};

export default Home;
