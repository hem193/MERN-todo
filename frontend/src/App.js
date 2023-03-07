import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getUser } from "./apiCalls/user";
import "./App.css";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UnProtectedRoutes from "./components/UnProtectedRoutes";
import { UserContext } from "./Context/UserContext";
import CreateTodo from "./pages/CreateTodo";
import Home from "./pages/Home";
import LoggedInHome from "./pages/LoggedInHome";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getUser();
  //     setUser(res.data.user);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <Routes>
        <Route path="/" element={user._id ? <LoggedInHome /> : <Home />} />
        <Route
          path="user/register"
          element={
            <UnProtectedRoutes loggedIn={user._id ? true : false}>
              <Register />
            </UnProtectedRoutes>
          }
        ></Route>
        <Route
          path="user/login"
          element={
            <UnProtectedRoutes loggedIn={user._id ? true : false}>
              <Login />
            </UnProtectedRoutes>
          }
        />
        <Route
          path="user/profile"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="user/create"
          element={
            <ProtectedRoutes loggedIn={user._id ? true : false}>
              <CreateTodo />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
