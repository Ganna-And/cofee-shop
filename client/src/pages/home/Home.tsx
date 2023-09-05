import React from "react";
import Intro from "./intro/Intro";
import "./Home.css";
import About from "./About";
import { useTranslations } from "../../hooks/useData";
import ProductGroup from "./PrductGroup/ProductGroup";
import News from "./news/News";
import Footer from "./Footer";


function Home() {
  const { translations } = useTranslations();
  const data = translations.header;
  return (
    <div className="container">
      <Intro />
      <About data={data.about} />
      <ProductGroup /* data={data.menu} */ />
      <News data={data.news}/>
      <Footer />
    </div>
  );
}

export default Home;
