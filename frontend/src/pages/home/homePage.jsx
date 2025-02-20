// import React from "react";
import { userAuthstore } from "../../store/authUser";
import AuthScreen from "./Authscreen"; 
import HomeScreen from "./Homescreen"; 

const HomePage = () => {
  const { user } = userAuthstore();
  
  return (
    <>{user ? <HomeScreen /> : <AuthScreen />} </>
  );
};

export default HomePage;
