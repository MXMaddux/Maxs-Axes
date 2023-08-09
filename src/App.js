import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Error from "./pages/ErrorPage";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import Axes from "./pages/Axes";
import SingleGuitar from "./pages/SingleGuitar";
import Cart from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthWrapper } from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router >
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="axes" element={<Axes />} />
          <Route path=":id" element={<SingleGuitar />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      </AuthWrapper>
  );
}

export default App;
