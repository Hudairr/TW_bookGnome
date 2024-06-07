import React from 'react'
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Books from "../components/books";
import Footer from "../components/footer";


function home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Books />
      <Footer />
    </>
  );
}

export default home
