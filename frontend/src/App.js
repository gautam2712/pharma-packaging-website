import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Industries from "@/pages/Industries";
import Manufacturing from "@/pages/Manufacturing";
import QualityAssurance from "@/pages/QualityAssurance";
import Certifications from "@/pages/Certifications";
import ExportMarkets from "@/pages/ExportMarkets";
import Sustainability from "@/pages/Sustainability";
import Blog from "@/pages/Blog";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import RFQ from "@/pages/RFQ";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/quality" element={<QualityAssurance />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/exports" element={<ExportMarkets />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rfq" element={<RFQ />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
