import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Styles.css";

const ProductDetails = (props) => {
  return (
    <>
      <h1>Product Name</h1>
      <p>
        <strong>Name: </strong> {props.Name}
      </p>

      <br />

      <Link to="/products">
        <strong>Back</strong>
      </Link>
    </>
  );
};

export default ProductDetails;
