import Home from './components/pages/home/home';
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import WidgetSm from './components/widgetSm/widgetSm';
import WidgetLg from './components/widgetLg/widgetLg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
       
      </div>
    </div>
  );
}

export default App;
