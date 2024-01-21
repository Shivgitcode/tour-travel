import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Navbar/SearchBar";
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  return (
    <div className="w-screen h-screen box-border m-0 p-0 overflow-hidden">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Hero></Hero>
      {/* <SearchBar></SearchBar> */}
    </div>
  );
}

export default App;
