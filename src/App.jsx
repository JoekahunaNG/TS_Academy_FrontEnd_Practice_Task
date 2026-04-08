import React from 'react';
import Header from './components/Header';
import PlanetsSection from './components/PlanetsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <PlanetsSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
