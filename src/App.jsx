import React, { useState } from 'react';
import './App.css';
import Demo from './components/Demo';
import Exp1 from './components/Exp1';
import Exp2 from './components/Exp2';
import Exp3 from './components/Exp3';
import Exp4 from './components/Exp4';
import Exp5 from './components/Exp5';
import Exp6 from './components/Exp6';
import Exp7 from './components/Exp7';
import Exp8 from './components/Exp8';
import Exp9 from './components/Exp9';
import Exp10 from './components/Exp10';

const experiments = [
  { id: 'demo', title: 'Demo Component', concept: 'Component structure', description: 'A simple functional component used as the starting point.' },
  { id: 'exp1', title: 'Experiment 1', concept: 'State + controlled input', description: 'Reads text from an input and renders the current state.' },
  { id: 'exp2', title: 'Experiment 2', concept: 'Props + components', description: 'Passes values into reusable Header and Footer components.' },
  { id: 'exp3', title: 'Experiment 3', concept: 'Events + state', description: 'Builds a configurable counter with increase, decrease and reset actions.' },
  { id: 'exp4', title: 'Program 4', concept: 'Lists + conditional rendering', description: 'Functional To-Do list with add, complete and delete operations.' },
  { id: 'exp5', title: 'Program 5', concept: 'Composition + props', description: 'FigureList and BasicFigure components with dynamic image management.' },
  { id: 'exp6', title: 'Program 6', concept: 'Forms + validation', description: 'Name, email and password form with validation and show-password toggle.' },
  { id: 'exp7', title: 'Program 7', concept: 'Profile card + styling', description: 'ProfileCard using external CSS, inline styling and props.' },
  { id: 'exp8', title: 'Program 8', concept: 'Reminder + filtering', description: 'Due dates, completion status and all/completed/pending filters.' },
  { id: 'exp9', title: 'Program 9', concept: 'React Router', description: 'Home, About and Contact navigation using react-router-dom.' },
  { id: 'exp10', title: 'Program 10', concept: 'Class lifecycle + API', description: 'componentDidMount, componentDidUpdate and external API data.' }
];

function App() {
  const [active, setActive] = useState('overview');
  const renderExperiment = () => {
    switch (active) {
      case 'demo': return <Demo />;
      case 'exp1': return <Exp1 />;
      case 'exp2': return <Exp2 />;
      case 'exp3': return <Exp3 />;
      case 'exp4': return <Exp4 />;
      case 'exp5': return <Exp5 />;
      case 'exp6': return <Exp6 />;
      case 'exp7': return <Exp7 />;
      case 'exp8': return <Exp8 />;
      case 'exp9': return <Exp9 />;
      case 'exp10': return <Exp10 />;
      default: return null;
    }
  };
  return (
    <div className="lab-app">
      <header className="hero">
        <div className="eyebrow">VTU • React Laboratory • BCSL657B</div>
        <h1>React Lab Portfolio</h1>
        <p>A practical collection of React experiments developed while learning components, props, state, events, controlled forms and list rendering.</p>
        <div className="hero-meta"><span>React</span><span>Vite</span><span>JavaScript</span><span>Functional Components</span></div>
      </header>
      <main className="workspace">
        <aside className="sidebar">
          <div className="side-title">Experiments</div>
          <button className={active === 'overview' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActive('overview')}><strong>Overview</strong><small>Lab concepts</small></button>
          {experiments.map((item) => <button key={item.id} className={active === item.id ? 'nav-btn active' : 'nav-btn'} onClick={() => setActive(item.id)}><strong>{item.title}</strong><small>{item.concept}</small></button>)}
        </aside>
        <section className="content">
          {active === 'overview' ? (
            <>
              <div className="section-heading"><div><div className="eyebrow">Learning record</div><h2>What this repository demonstrates</h2></div><p>These are the original lab exercises, reorganized into a cleaner presentation without removing the underlying programs.</p></div>
              <div className="experiment-grid">{experiments.map((item,index) => <article className="experiment-card" key={item.id}><div className="number">0{index+1}</div><div><span className="tag">{item.concept}</span><h3>{item.title}</h3><p>{item.description}</p></div><button onClick={() => setActive(item.id)}>Open experiment →</button></article>)}</div>
              <div className="concept-panel"><h3>React concepts covered</h3><div className="concepts"><span>JSX</span><span>Functional components</span><span>useState</span><span>Props</span><span>Event handling</span><span>Controlled inputs</span><span>Array map()</span><span>Conditional rendering</span></div></div>
            </>
          ) : (
            <><button className="back-btn" onClick={() => setActive('overview')}>← Back to lab overview</button><div className="experiment-stage">{renderExperiment()}</div></>
          )}
        </section>
      </main>
      <footer><span>React Laboratory Practice Repository</span><span>Academic work • Built with React + Vite</span></footer>
    </div>
  );
}
export default App;
