import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//Pages import
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
    </Routes>
    <div className='dark'></div>
  </Router>
  );
}

export default App;
