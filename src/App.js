import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import Main from "./layout/Main/Main";
import Clothes from "./pages/Clothes/Clothes";
import Tech from "./pages/Tech/Tech";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import DataBase from "./db.json";
import Notify from "./components/Notify/Notify";
import CardProduct from "./pages/CardProduct/CardProduct";

class App extends Component {
  constructor(props) {
    super(props);
    const allProducts = DataBase.data[0];
    const clothes = DataBase.data[1];
    const tech = DataBase.data[2];
    this.state = {
      specialProduct: [],
      allCurrency: allProducts.products[0].prices.map((item) => item.currency),
      currentCurrency: "USD",
      notify: false,
      cardProduct: "",
      howMany: 1,
      attributes: "",
      product: [
        {
          name: clothes.name,
          data: clothes.products,
        },
        {
          name: tech.name,
          data: tech.products,
        },
        {
          name: allProducts.name,
          data: allProducts.products,
        },
      ],
    };
  }

  getId = (id) => {
    let data = [];
    for (let i = 0; i < this.state.product.length; i++) {
      for (let j = 0; j < this.state.product[i].data.length; j++) {
        data.push(
          this.state.product[i].data[j].id === id &&
            this.state.product[i].data[j]
        );
      }
    }
    let specialProduct;
    for (let i = 0; i < data.length; i++) {
      if (data[i]) specialProduct = data[i];
    }
    this.setState({
      specialProduct: specialProduct.inStock ? specialProduct : "",
    });
  };

  getCurrentCurrency = (currentCurrency) => {
    this.setState({ currentCurrency: currentCurrency, notify: true });
  };

  getCardProd = (product) => {
    this.setState({ cardProduct: product });
  };

  getCardAttr = (attribute) => {
    this.setState({ attributes: attribute });
  };

  render() {
    return (
      <Fragment>
        <Main>
          <BrowserRouter>
            <Navbar
              currency={this.state.allCurrency}
              getCurrentCurrency={this.getCurrentCurrency}
            />
            <Routes>
              <Route
                path={"/tech"}
                element={
                  <Tech
                    currentCurrency={this.state.currentCurrency}
                    tech={this.state.product[1]}
                    getId={this.getId}
                  />
                }
              />
              <Route
                path={"/clothes"}
                element={
                  <Clothes
                    currentCurrency={this.state.currentCurrency}
                    clothes={this.state.product[0]}
                    getId={this.getId}
                  />
                }
              />
              <Route
                exact
                path={"/allproducts"}
                element={
                  <AllProducts
                    currentCurrency={this.state.currentCurrency}
                    allProducts={this.state.product[2]}
                    getId={this.getId}
                  />
                }
              />

              <Route
                path={"/information"}
                element={
                  <ProductInfo
                    getCardAttr={this.getCardAttr}
                    getCardProd={this.getCardProd}
                    currentCurrency={this.state.currentCurrency}
                    data={
                      this.state.specialProduct && this.state.specialProduct
                    }
                  />
                }
              />
              <Route
                path="/card"
                element={
                  <CardProduct
                    cardProduct={this.state.cardProduct}
                    howMany={this.state.howMany}
                    attribute={this.state.attributes}
                  />
                }
              />
            </Routes>
            <Notify notifyFunc={this.getCurrentCurrency} />
          </BrowserRouter>
        </Main>
      </Fragment>
    );
  }
}

export default App;
