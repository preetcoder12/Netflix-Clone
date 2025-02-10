// import React from "react";
import { userAuthstore } from "../../store/authUser";
import AuthScreen from "../home/authscreen"; // ✅ Use PascalCase
import HomeScreen from "../home/homescreen"; // ✅ Use PascalCase

const HomePage = () => {
  const { user } = userAuthstore();

  return (
    <>{user ? <HomeScreen /> : <AuthScreen />} </>
  );
};

export default HomePage;
