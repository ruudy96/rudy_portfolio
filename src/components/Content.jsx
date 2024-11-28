import Navigation from "./Navigation";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Project from "../page/Project";
import Footer from "../page/Footer";


const Content = () => {
  return (
    <div className="App bg-ungu2 " id="App">
        <Navigation />
        <Home />
        <About />
        <Project/>
        <Contact />
        <Footer />
    </div>
  );
};
export default Content;
