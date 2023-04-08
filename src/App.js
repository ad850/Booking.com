import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/list/List";
import Hotel from "./Pages/Hotel/Hotel";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels:id" element={<Hotel />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
