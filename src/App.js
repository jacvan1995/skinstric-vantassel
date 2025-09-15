import './App.css';
import React from "react";
import Landing from './pages/landing';
import Demograpics from "./pages/demographics"

function App() {
  return (
    <section className='skinstric-wrapper'>
    <Landing/>
    <Demograpics/>
    </section>
  );
}

export default App