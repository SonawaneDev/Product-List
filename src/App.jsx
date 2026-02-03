import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ariststation from "./Ariststation";
import Product from "./product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ariststation />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
