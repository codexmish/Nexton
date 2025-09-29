import React from "react";
import Banner from "../components/Banner";
import Brandinfo from "../components/Brandinfo";
import Exploring from "../components/Exploring";
import Recommendation from "../components/Recommendation";

const Home = () => {
  return (
    <>
      <Banner />
      <Brandinfo />
      <Exploring />
      <Recommendation/>
    </>
  );
};

export default Home;
