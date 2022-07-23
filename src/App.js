import ReactDOM from "react-dom/client";
import {Routes,Route,Link} from "react-router-dom";
import HoloCouncil from "./componets/HoloCouncil";



const App = () => {
  return (
      <>
          <Routes>
            <Route path ="/" element={<HoloCouncil />}/>
            <Route path="Council" element={<HoloCouncil />}/>
          </Routes>
      </>
  );
}

export default App;
