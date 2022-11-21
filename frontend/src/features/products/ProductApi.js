import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default class ProductApi {
  static getAllProducts() {
    return axios.get("http://localhost:3001/products");
  }

  static saveProduct(product) {
    product.id = uuidv4();
    return axios.post("http://localhost:3001/products", product);
  }

  static deleteProduct(id) {
    return axios.delete(`http://localhost:3001/products/${id}`);
  }
}
