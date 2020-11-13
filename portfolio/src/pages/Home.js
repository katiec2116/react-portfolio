import About from "../components/About";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer"
function Home() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
  
  export default Home;
  