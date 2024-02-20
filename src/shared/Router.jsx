import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
