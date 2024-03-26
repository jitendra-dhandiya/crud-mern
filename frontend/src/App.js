import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUserForm from "./components/CreateUserForm";
import { fetchAllUsersAsync } from "./features/userDetailSlice";
import { useDispatch} from "react-redux";
import Read from "./components/Read";
import UserDetailC from "./components/userDetailC";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersAsync());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CreateUserForm></CreateUserForm>} />
          <Route exact path="/read" element={<Read></Read>} />
          <Route exact path="/edit/:id" element={<UserDetailC></UserDetailC>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
