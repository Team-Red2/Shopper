import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SingupForm/SignupForm";

import { userActions } from "../store/userState/userSlice";

import Container from "./ui/Container";
import CategoriesPage from "../pages/CategoriesPage";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(userActions.checkUserLocalStorage());
  }, []);

  console.log(user);
  return (
    <Container>
      <div className="App">
        <LoginForm />
        {/* <SignupForm /> */}
        <CategoriesPage />
      </div>
    </Container>
  );
};

export default App;
