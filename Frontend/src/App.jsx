import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Crop from "./Crop";
import EditImage from "./EditImage";
import Home from "./Home";
import Resize from "./Resize";
import AITags from "./AITags";

const App = () => {
  return (
    <Router>
      <div className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crop" element={<Crop />} />
          <Route path="edit_image" element={<EditImage />} />
          <Route path="resize" element={<Resize />} />
          <Route path="aitags" element={<AITags />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
