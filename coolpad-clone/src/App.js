import { Routes, Route } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import LandingPage from "./pages/LandingPage";
import AddProduct from "./pages/Test/AddProduct";
import EditProduct from "./pages/Test/EditProduct";
import ShowProduct from "./pages/Test/ShowProducts";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/product" element={<ShowProduct />} />
      <Route exact path="/add" element={<AddProduct />} />
      <Route exact path="/product/edit/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
