import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';

//Pages import
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import { io } from 'socket.io-client';
import { useEffect } from 'react';
import SocketContext from './context/SocketContext';
import { useSelector } from 'react-redux';

const socket=io(process.env.REACT_APP_API_ENDPOINT.split('/api/v1')[0]);


function App() {

  const {user} = useSelector((state) => state.user);
  const {token} = user;
  console.log(token);
  return (
    <div className='dark'>
      <SocketContext.Provider value={socket}>
        <Router>
          <Routes>
            <Route exact path="/" element={token ? <Home socket={socket}/> : <Navigate to="/login"/>} />
            <Route exact path="/login" element={token ? <Login/> : <Navigate to="/"/>} />
            <Route exact path="/register" element={<Register/>} />
          </Routes>
          <div className='dark'></div>
        </Router>
      </SocketContext.Provider>
  </div>
  );
}

export default App;
