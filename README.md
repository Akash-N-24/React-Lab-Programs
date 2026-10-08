# React Lab Portfolio — VTU 2022 Scheme

A practical React laboratory repository developed during B.E. Computer Science and Engineering coursework.

This repository started as a simple **"My First React App"** and now presents the same lab practice as a small, organized React learning portfolio.

## What is demonstrated?

The current exercises cover core React concepts through small working programs:

| Experiment | Concept | Demonstration |
|---|---|---|
| Demo | Functional component | Basic reusable component structure |
| Experiment 1 | State + controlled input | `useState`, input events and live rendering |
| Experiment 2 | Props + components | Passing data into Header and Footer components |
| Experiment 3 | State + events | Configurable counter with increase, decrease and reset |
| Experiment 4 | Lists + conditional rendering | Functional To-Do list with add, complete and delete |

## Why keep this repository?

This is intentionally a **learning/lab repository**, not a claim of being a major production project.

It records the progression from:
```
JSX
  ↓
Components
  ↓
Props
  ↓
State
  ↓
Events and controlled inputs
  ↓
List rendering and conditional UI
```

That makes it useful as a coursework reference and as evidence of hands-on React practice.

## Technology

- React
- JavaScript / JSX
- Vite
- Functional components
- React `useState`
- CSS

## Project structure

```
src/
├── App.jsx
├── App.css
├── main.jsx
└── components/
    ├── Demo.jsx
    ├── Exp1.jsx
    ├── Exp2.jsx
    ├── Exp3.jsx
    ├── Exp4.jsx
    └── ToDoFunction.css
```

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Academic note

The repository preserves the original laboratory exercises while improving their presentation with an experiment selector and concept overview. The purpose is learning and revision rather than production deployment.

## Future learning path

The natural next steps after these exercises are:

- React Router
- reusable form components
- API integration with `fetch`
- component composition
- Context API
- custom hooks
- backend integration
- authentication
- deployment

