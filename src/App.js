import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import CheckOutAd from "./components/CheckOutAd";
import ShoppingBasket from "./components/ShoppingBasket";
import React from "react";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={
          <React.Fragment>
            <Banner/>
            <ProductList/>
          </React.Fragment>
        }/>
        <Route exact path="/checkout" element={
          <React.Fragment>
            <CheckOutAd/>
            <ShoppingBasket/>
          </React.Fragment>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
