import Articles from "./components/Articles";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import "../src/App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
