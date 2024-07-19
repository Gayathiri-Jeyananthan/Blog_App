import React from "react";
import "./App.css";
 
import Posts from "../src/Components/Post";
import Navbar from "../src/Components/BlogNav"
 
const App = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <Navbar />
            <Posts />
        </div>
    );
};
 
export default App;