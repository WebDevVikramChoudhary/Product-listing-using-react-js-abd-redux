import { useDispatch } from "react-redux";
import "./App.css";
import { loadProductAsync } from "./features/products/ProductsSlice";
import { ProductsComponent } from "./features/products/ProductsComponent";
import ProductDetails from "./features/products/ProductDetails";
import About from "./features/products/About";
import Nav from "./features/products/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductForm from "./features/products/ProductForm";
function App() {
  const dispatch = useDispatch();
  dispatch(loadProductAsync());

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/addProduct" element={<ProductForm />} />
          <Route path="/Product/:Name" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
