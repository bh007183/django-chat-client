import logo from './logo.svg';
import store from "./redux/store"
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import './App.css';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    
    
    </Provider>
    </Router>
  );
}

export default App;
