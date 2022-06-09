import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import Jumbo from "./Jumbo";
import LatestBlog from "./LatestBlog";
import Testimonials from "./Testimonials";
import TopProducts from "./TopProducts";
import Modal from "./Modal";

function Main() {
  // fetching data from api
  const [session, setSession] = useState("");
  useEffect(()=>{
    fetch('/cabinet')
        .then(response => response.json())
        .then(data => (setSession(data)))
},[session['status']])

  console.log(session['status']);

  // states
  const [hidden, setHidden] = useState(true);
  const [light, setDark] = useState(true);
  const modalHandler = (e) => {
    setHidden(!hidden);
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
     
      <Header sign_in={session['status']} modal={modalHandler} />
      <Modal modal={modalHandler} hidden={hidden} setHidden={setHidden} />
      <Carousel />
      <Categories />
      <TopProducts />
      <Jumbo />
      <LatestBlog />
      <Testimonials />
      {/* <GetInTouch /> */}
      <Footer />
    </React.Fragment>
  );
}

export default Main;
