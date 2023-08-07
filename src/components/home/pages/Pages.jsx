import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";
import { Home } from "../Home";
import { Details } from "../details/Details";

export const Pages = () => {
  return (
    <>
      <Header />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/:id" element={<Details />} />
      </Routes>
      
      
      
     
     
      <Footer />
    </>
  );
};
