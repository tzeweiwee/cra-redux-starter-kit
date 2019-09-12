import React from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/NavBar/Navbar";
import styles from "./App.module.scss";

const App = () => {
  
  return (
    <div className={styles.container}>
      <Navbar />
      <AppRouter />
    </div>
  );
};


export default App;
