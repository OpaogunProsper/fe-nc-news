import Header from "./components/Header";
import Articles from "./components/Articles";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}
export default App;
