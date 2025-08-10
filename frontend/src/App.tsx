import { useState } from "react";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import ProductGrid from "./components/ui/ProductGrid";
import CategoryGrid from "./components/ui/CategoryGrid";
import Footer from "./components/sections/Footer";
import ParallaxWaves from "./components/ui/Wave";


export const App = () => {

  return (
    <>
      <Navbar />
      <Hero />

      <ProductGrid />
      <CategoryGrid />
      <Footer />


    </>
  )
}

export default App;