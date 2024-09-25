import React, { Fragment } from "react";
import ShopPage from "./Pages/ShopPage";
import Effect from "./Components/Effect";
import FormVali from "./Components/FormVali";
import Example from "./Components/Example";
import ProductsFetch from "./Components/ProductsFetch";
import TopNav from "./Components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFount from "./Pages/PageNotFount";
import A from "./Pages/A";
import B from "./Pages/B";
import Formik from "./Components/Formik";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/shop" Component={ShopPage}/>
        <Route path="/first" Component={A}/>
        <Route path="/second" Component={B}/> */}

        <Route path="/">
          <Route path="" Component={Formik} />
          <Route path="">
              <Route path="first" Component={A}/>
              <Route path="second" Component={B}/>
          </Route>
        </Route>

        <Route path="*" element={<PageNotFount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;