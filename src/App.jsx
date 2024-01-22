import "./App.css";
import Features from "./components/Features/Features";
import Slideshow from "./components/Features/Slideshow";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Navbar/SearchBar";
import Sidebar from "./components/Navbar/Sidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="w-screen h-screen box-border m-0 p-0">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Hero></Hero>
      <Slideshow></Slideshow>
      {/* <SearchBar></SearchBar> */}
    </div>
  );
}

export default App;
