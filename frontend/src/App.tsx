import { Route, Routes } from "react-router-dom";
import AllTypes from "./pages/AllTypes";
import HeroSection from "./components/sections/HeroSection";

export const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/all-items" element={<AllTypes />} />
    </Routes>

    </>
  )
}

export default App;