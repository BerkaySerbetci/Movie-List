import WebSite from "./Proje site/website";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import MostWatched from "./Proje site/header_sidebar/most_watched";
import TvShow from "./Proje site/header_sidebar/tvShow";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Website" element={<WebSite></WebSite>}/>
        <Route path="MostWatched" element={<MostWatched></MostWatched>} />
        <Route path="TvShow" element={<TvShow></TvShow>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
