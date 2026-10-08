import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

function Home() { return <div className="route-page"><h2>Home</h2><p>Welcome to the React routing demonstration.</p></div>; }
function About() { return <div className="route-page"><h2>About</h2><p>This page demonstrates client-side navigation using React Router.</p></div>; }
function Contact() { return <div className="route-page"><h2>Contact</h2><p>Contact page for the routing experiment.</p></div>; }

export default function Exp9() {
  return (
    <section className="lab-program">
      <h1>Program 9: React Router</h1>
      <p>Demonstrates navigation between Home, About and Contact pages using react-router-dom.</p>
      <nav className="route-nav">
        <NavLink to="/react-lab/home">Home</NavLink>
        <NavLink to="/react-lab/about">About</NavLink>
        <NavLink to="/react-lab/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/react-lab/home" element={<Home />} />
        <Route path="/react-lab/about" element={<About />} />
        <Route path="/react-lab/contact" element={<Contact />} />
        <Route path="*" element={<div className="route-page"><h2>Select a page</h2><p>Use the navigation links above.</p></div>} />
      </Routes>
      <p className="muted"><Link to="/react-lab/home">Return to Home</Link></p>
    </section>
  );
}