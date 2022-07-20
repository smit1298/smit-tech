import Home from "./components/pages/home/home";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import UserList from "./components/pages/userList/userList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
