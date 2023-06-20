import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header/>}/>
        {/* <Route path="/contact" element={}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
