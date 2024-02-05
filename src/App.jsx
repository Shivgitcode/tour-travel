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
import Login from "./components/login/login";
import Head from "./components/Head/Head";
import Topdestinations from "./components/Top-Destinations/Topdestinations";
import Flexible from "./components/flexible/Flexible";
import TopAttraction from "./components/Top-Attractions/TopAttraction";
import TopTours from "./components/Top-tours/TopTours";
import { featuresCard } from "./constants";
import Reviews from "./components/Reviews/Reviews";
import WarmDestinations from "./components/WarmDestinations/WarmDestinations";

function App() {
  return (
    <div className="w-screen h-screen box-border m-0 p-0 overflow-x-hidden overflow-y-scroll">
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
      <Hero></Hero>
      <Features></Features>
      {/* <SearchBar></SearchBar> */}
      <Login></Login>
      <Head></Head>
      <Topdestinations></Topdestinations>
      <Flexible el={featuresCard[0]}></Flexible>
      <TopAttraction></TopAttraction>
      <TopTours></TopTours>
      <Flexible el={featuresCard[1]}></Flexible>
      <Reviews></Reviews>
      <WarmDestinations></WarmDestinations>
    </div>
  );
}

export default App;
