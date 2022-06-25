import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Buy from "./pages/Buy";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
