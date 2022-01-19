import Header from "./components/Header";
import Navigation from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"
import React, { useState } from 'react'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  } 

  return (
    <div>
      <Navigation toggle={toggle} />
      <Header />
      <Portfolio id="projects" />
      <Footer />
    </div>
  );
}

export default App;
