import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "./Footer";
import {CreditCard} from "../Component/CreditCard"

function Payment() {
  return (
    <div>
      {" "}
      <Navbar />
        <CreditCard />
      <Footer />
    </div>
  );
}

export default Payment;
