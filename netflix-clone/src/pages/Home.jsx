import React from "react";
import MainHero from "../components/MainHero";
import Row from "../components/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <MainHero />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
