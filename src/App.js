import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//Pages import
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const {user}= useSelector((state)=>state.user)
  console.log(user)
  return (
    <div className='dark'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
        <div className='dark'></div>
      </Router>
  </div>
  );
}

export default App;
