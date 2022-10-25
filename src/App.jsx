
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Users from "./components/Users";
import About from "./components/About";
import Search from "./components/products/Search";
import AddProduct from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";
import ErrorPage from "./components/ErrorPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
        <Link to="products"> Products </Link>


      </nav>
      <ErrorBoundary>
        
      <Routes>
        <Route path="/" element={<Home />} />
        
<Route path="*" element={<ErrorPage/>} />

        <Route path="about" element={<About />} />

        <Route path="/users" element={<Users />} />

        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
