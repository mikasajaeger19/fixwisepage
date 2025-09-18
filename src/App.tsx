import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProductSearch } from "./components/ProductSearch";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen">
      
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Hero />
                <Services />
                <Process />
                <Benefits />
                {/* <Testimonials /> */}
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        {/* Product Search Page */}
        <Route path="/search" element={<ProductSearch />} />
      </Routes>
    </div>
  );
}
