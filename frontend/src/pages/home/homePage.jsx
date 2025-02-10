// import React from "react";
import AuthScreen from "../home/authscreen"; // ✅ Use PascalCase
import HomeScreen from "../home/homescreen"; // ✅ Use PascalCase

const HomePage = () => {
  const user = false;

  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  );
};

export default HomePage;
