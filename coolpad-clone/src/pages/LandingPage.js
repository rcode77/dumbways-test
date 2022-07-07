import React from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Slide />
      <Content />
      <Footer />
    </div>
  );
}
