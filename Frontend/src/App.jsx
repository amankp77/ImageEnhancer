import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Crop from './Crop'; 
import EditImage from './EditImage';
import Home from './Home'


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="crop" element={<Crop/>}/>
          <Route path="edit_image" element={<EditImage/>}/>
        </Routes>
        
         
      </div>
    </Router>
  );
};

export default App;
