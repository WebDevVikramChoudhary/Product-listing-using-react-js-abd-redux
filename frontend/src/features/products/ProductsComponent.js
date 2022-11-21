import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { deleteProductAsync } from "./ProductsSlice";
import ProductComponent from "./ProductComponent";
import toastr from "toastr";
import "toastr/build/toastr.css";

export const ProductsComponent = (props) => {
  toastr.options.timeOut = 1000;
  // const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);

  return (
    <div>
      <table>
        <tr>
          {/* <th>ID</th> */}
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>

        {products.map((product) => (
          <ProductComponent
            key={product.id}
            id={product.id}
            Name={product.Name}
            Quantity={product.Quantity}
            Price={product.Price}
          />
        ))}
      </table>

      <Link to="/addProduct">Add Product</Link>
    </div>
  );
};
