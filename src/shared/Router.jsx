import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";

function PrivateRoute({ element, path }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate replace to="/login" state={{ from: path }} />
  );
}

function Router() {
  const { isLoggedIn, login } = useAuth();
  const handleLoginSuccess = () => {
    login();
    return <Navigate replace to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/detail/:id"
          element={<PrivateRoute element={<Detail />} path="/detail/:id" />}
        />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
