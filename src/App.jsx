import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Herosec from './Herosec';
import { Helmet } from 'react-helmet-async';   // 👈 Add this

const App = () => {
  return (
    <BrowserRouter>
      {/* Global meta tags */}
      <Helmet>
        <title>Harsh Portfolio</title>
        <meta
          name="description"
          content="React portfolio showcasing projects and skills."
        />
      </Helmet>

      <Header />
      <Herosec />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
