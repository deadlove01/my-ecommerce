import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <ShoppingList />
    </div>
  );
}

export default App;
