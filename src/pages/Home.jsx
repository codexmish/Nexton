import React from "react";
import Banner from "../components/Banner";
import Brandinfo from "../components/Brandinfo";
import Exploring from "../components/Exploring";
import Recommendation from "../components/Recommendation";
import Sellers from "../components/Sellers";

const Home = () => {
  return (
    <>
      <Banner />
      <Brandinfo />
      <Exploring />
      <Recommendation/>
      <Sellers/>
    </>
  );
};

export default Home;
