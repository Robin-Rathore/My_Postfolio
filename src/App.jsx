import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/intro/intro';
import About from './components/about/about';
import ProductList from './components/productList/productList';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App(){

  return (
      <div>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
        <Footer/>
      </div>
  );
};

export default App;
