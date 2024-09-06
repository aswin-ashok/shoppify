import React, { Fragment } from "react";
import ShopPage from "./Pages/ShopPage";
import Effect from "./Components/Effect";
import FormVali from "./Components/FormVali";
import Example from "./Components/Example";
import ProductsFetch from "./Components/ProductsFetch";
import TopNav from "./Components/TopNav";

const App = () => {
  return (
    <Fragment>
      {/* <ShopPage /> */}
      {/* <Effect /> */}
      {/* <FormVali /> */}
      {/* <Example /> */}
      <TopNav />
      <ProductsFetch />
    </Fragment>
  )
}

export default App;