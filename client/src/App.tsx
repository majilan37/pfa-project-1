import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import Buy from "./pages/Buy";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
      <Cart />
      <ToastContainer />
    </div>
  );
}

export default App;
