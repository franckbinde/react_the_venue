import React from "react";
import Header from "./components/header_footer/Header";
import "./resources/styles.css";
import { Element } from "react-scroll";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlight from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueNFO">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
