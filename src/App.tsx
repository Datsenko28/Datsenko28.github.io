import React from 'react'; 
import './App.css';
import { Footer } from './common/footer/';
import { Header } from './common/header/';

function App() {
  return (
    <div className="App">
      <Header title="Users" />
      <Footer />
    </div>
  );
}

export default App;
