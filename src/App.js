import React from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Data from "./data";
import { Navbar } from "./components/Navbar";

const App = () => {
  const Cards = Data.map((item) => {
    return <Card key={item.key} {...item} />;
  });
  return (
    <>
      <Navbar />
      <section className="cards-list">{Cards}</section>
      <Footer />
    </>
  );
};
export default App;
