import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "context/AuthContext";

function PrivateRoute({ element, path }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate replace to="/login" state={{ from: path }} />
  );
}

function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/detail/:id"
            element={<PrivateRoute element={<Detail />} path="/detail/:id" />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} path="/profile" />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;
