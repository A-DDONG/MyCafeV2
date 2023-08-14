import "./css/App.css";
import "./css/main.css";
import NavList from "./layout/NavList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <div className="head">
          <h1 className="title">나만의 카페 레시피</h1>
          <NavList />
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
