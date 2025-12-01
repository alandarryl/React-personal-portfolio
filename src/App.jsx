import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import ContactForm from "./components/ContactForm/ContactForm";
import AboutSection from "./components/AboutSection/AboutSection";
// import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";

import Loader from "./components/Loader/Loader";

function App() {

  return (
    <>
    {/* <Loader /> */}
    <Header />
    <Intro />
    <AboutSection />
    {/* <PortfolioGrid /> */}
    <ContactForm />
    </>
  )
}

export default App
