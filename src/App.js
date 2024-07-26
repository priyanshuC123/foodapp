
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from './components/home';
import {Auth} from './components/auth';
import {SavedRecipes} from './components/SavedRecipe';
import {CreateRecipe} from './components/CreateRecipe';
import Navbar from './components/Navbar';

//<Route path="/SavedRecipe" element={SavedRecipe} />

function App() {
  return (
    <div className="App">
    <Router>
      
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/savedRecipe" element={<SavedRecipes />} />
          <Route path="/CreateRecipe" element={<CreateRecipe />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
