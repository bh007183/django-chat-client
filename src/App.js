import logo from "./logo.svg";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInLogin from "./SignInLogin";
import Core from "./pages/Core"
import Dashboard from "./pages/Dashboard"

import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Core/>}>
            <Route index element={<Dashboard/>}/>
          </Route>
          <Route path="*" element={<SignInLogin />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
