import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";

function App() {
  return (
    <div>
      <Navbar />
      <Slide />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
