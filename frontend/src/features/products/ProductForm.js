import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductAsync } from "./ProductsSlice";
import toastr from "toastr";
import "toastr/build/toastr.css";

const ProductForm = (props) => {
  toastr.options.timeOut = 1000;
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addProductAsync(product))
      .then(() => toastr.success("product added"))
      .catch((err) => {
        alert(err);
      });
  };
  const onAddProduct = (product) => addProduct(product);
  const initialValues = {
    Name: "",
    Quantity: "",
    Price: ""
  };
  const validationSchema = Yup.object({
    Name: Yup.string().required("Product Name is Required"),
    Quantity: Yup.string().required("Required"),
    Price: Yup.string().required("Required")
  });
  const onSubmit = (values, props) => {
    let product = {};
    product.Name = values.Name;
    product.Quantity = values.Quantity;
    product.Price = values.Price;
    onAddProduct(product);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      props.setSubmitting(false);
      window.location.reload();
    }, 400);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <div className="form-control">
            <label htmlFor="Name">*Product Name</label>
            <Field type="text" name="Name" id="Name" placeholder="Name" />
            <ErrorMessage name="Name">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
            <br />

            <label htmlFor="Quantity">*Quantity</label>

            <Field type="number" name="Quantity" id="Quantity"></Field>

            <ErrorMessage name="Quantity">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
            <br />

            <label htmlFor="Price">*Price</label>

            <Field type="number" name="Price" id="Price"></Field>

            <ErrorMessage name="Price">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <button type="submit">Submit</button>
          <br />
          <br />
          <Link to="/">Back</Link>
        </Form>
      )}
    </Formik>
  );
};
export default ProductForm;
