import React from "react";
import { Carousel, MenuCatalog } from "../components";

function Home({onClickCategory}) {
  return (
    <div>
      <Carousel />
      <MenuCatalog onClickCategory={onClickCategory}/>
    </div>
  );
}

export default Home;
