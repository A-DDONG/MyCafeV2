import { HashRouter, Route, Routes } from "react-router-dom";
import CafeMain from "../comps/CafeMain";
import CafeInput from "../comps/CafeInput";
import CafeList from "../comps/CafeList";
import CafeUpdate from "../comps/CafeUpdate";
import Home from "../comps/Home";
import App from "../App";

const MainRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="recipe" element={<CafeMain />}>
            <Route path="insert" element={<CafeInput />} />
            <Route path="list" element={<CafeList />} />
            <Route path="update/:id" element={<CafeUpdate />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default MainRouter;
