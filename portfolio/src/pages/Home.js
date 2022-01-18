import About from "../components/About";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NavVisible from "../components/NavVisible/index";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import React, { useState } from 'react'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  } 

  return (
    <div>
      <NavVisible isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
      <Header />
      {/* <About /> */}
      <Portfolio />
      <Resume />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;
