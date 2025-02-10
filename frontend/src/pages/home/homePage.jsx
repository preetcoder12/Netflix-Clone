// import React from "react";
import { userAuthstore } from "../../store/authUser";
import AuthScreen from "../home/authscreen"; 
import HomeScreen from "../home/homescreen"; 

const HomePage = () => {
  const { user } = userAuthstore();
  
  return (
    <>{user ? <HomeScreen /> : <AuthScreen />} </>
  );
};

export default HomePage;
