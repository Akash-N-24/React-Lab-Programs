# React Lab Portfolio — VTU 2022 Scheme

A practical React laboratory repository developed during B.E. Computer Science and Engineering coursework.

This repository started as a simple **My First React App** and now presents the same lab practice as a small, organized React learning portfolio.

## What is demonstrated?

| Experiment | Concept | Demonstration |
|---|---|---|
| Demo | Functional component | Basic reusable component structure |
| Experiment 1 | State + controlled input | useState, input events and live rendering |
| Experiment 2 | Props + components | Passing values into Header and Footer |
| Experiment 3 | State + events | Configurable counter with increase, decrease and reset |
| Program 4 | Lists + conditional rendering | Functional To-Do list with add, complete and delete |
| Program 5 | Component composition + props | FigureList / BasicFigure image gallery |
| Program 6 | Forms + validation | Name, email, password validation and show-password toggle |
| Program 7 | Styling + props | Responsive ProfileCard with external and inline styling |
| Program 8 | State + filtering | Reminder list with due dates and status filters |
| Program 9 | Routing | Home, About and Contact using react-router-dom |
| Program 10 | Class lifecycle + API | componentDidMount, componentDidUpdate and external API data |

## Learning progression

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

The repository records hands-on React practice and is intentionally presented as a learning/lab repository rather than a production application.

## Complete BCSL657B program set

The repository now contains Programs 1–10 from the BCSL657B React laboratory sequence. Programs 1–4 are the original exercises that were already present; Programs 5–10 have been added as separate components so each exercise can be studied and demonstrated independently.

The React Router demonstration is supported by a global BrowserRouter configuration, while the lifecycle/API exercise uses a class component as required by the laboratory objective.

## Technology

- React
- JavaScript / JSX
- Vite
- Functional components
- React useState
- CSS

## Structure

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

Build:

```bash
npm run build
```

## Viva revision

See [LAB_NOTES.md](LAB_NOTES.md) for short explanations and common viva questions.

## Future learning path

React Router → API integration → reusable forms → Context API → custom hooks → backend integration → authentication → deployment.
