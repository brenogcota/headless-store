import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import ErrorPage from '../pages/Error';
import Layout from "../Layout";
import Product from "../pages/Product";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":slug/p" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
