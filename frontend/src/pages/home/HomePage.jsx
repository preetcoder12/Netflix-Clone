// import React from "react";
import { userAuthstore } from "../../Store/authUser";
import AuthScreen from "./authscreen"; 
import HomeScreen from "./homescreen"; 

const HomePage = () => {
  const { user } = userAuthstore();
  
  return (
    <>{user ? <HomeScreen /> : <AuthScreen />} </>
  );
};

export default HomePage;
