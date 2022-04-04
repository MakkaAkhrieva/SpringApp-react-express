import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "../login/login";
import MainPage from "../pages/main-page";
import { store } from "../../store";
import { Provider } from "react-redux";

import "./app.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
