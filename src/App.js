import logo from "./logo.svg";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInLogin from "./SignInLogin";
import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          
          <Route path="*" element={<SignInLogin />} />
         
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
