import React from "react";
import Black from "./components/Black/Black";
import Cards from "./components/Cards/Cards";
import Comment from "./components/Comment/Comment";
import Cook from "./components/Cook/Cook";
import Dishes from "./components/Dishes/Dishes";
import Galery from "./components/Galery/Galery";
import Header from "./components/Header/Header";
import History from "./components/History/History";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Header/>
      <Cards/>
      <History/>
      <Black/>
      <Dishes/>
      <Menu/>
      <Comment/>
      <Galery/>
      <Cook/>


    </div>
  );
}

export default App;
