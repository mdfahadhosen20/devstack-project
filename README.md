# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a small React web app that helps developers explore frontend,
backend, database, and tooling technologies, and put together their own
personal "stack" by picking the tools they'd use on their next project.

## 🚀 About the project

Dev Stack loads a catalog of 16 technologies (frameworks, languages,
databases, and tools) from a JSON file and displays them as cards in a
responsive grid. Each card shows the technology's icon, category, difficulty,
and rating. You can add any technology to your personal "Your Stack" panel,
remove a single item, or clear the whole stack at once — with toast
notifications confirming every action.

## 🛠️ Technology used

- **React 19** (Vite) — component-based UI
- **Tailwind CSS v4 + DaisyUI** — styling and utility classes
- **React-Toastify** — toast notifications for add/remove actions
- **JSON** — local data source for the technology catalog
- **Vite** — dev server and build tool

## ✨ Features

1. **Interactive stack builder** — add and remove technologies from your
   personal stack with instant visual feedback (disabled button, ✓ state,
   and toast messages), including a guard against adding the same
   technology twice.
2. **Fully responsive layout** — a sticky navbar that collapses into a
   hamburger menu on mobile, and a technology grid that reflows from 3
   columns on desktop down to 1 column on small screens.
3. **Single-source gradient theme** — the orange → pink → violet brand
   gradient used across the logo, headline, and buttons is defined once as
   CSS variables in `src/index.css`, so the whole UI can be re-themed by
   editing three color values.

## 📦 Getting started

```bash
npm install
npm run dev
```

## ❓ React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly
inside JavaScript. React uses it because it makes components easier to
read and write — we can see the structure of the UI and the logic that
drives it in the same place, instead of building elements by hand with
plain JS function calls.

**2. What is the difference between props and state?**
Props are values passed into a component from its parent — the component
receiving them cannot change them itself. State is data a component
manages internally and can update over time (for example with
`useState`). In short: props come from outside and are read-only, state
lives inside the component and can change.

**3. What does the `useState` hook do, and where did you use it in this
project?**
`useState` lets a functional component hold a piece of data that can
change, and re-renders the component whenever that data updates. In this
project I used it in `TechnologyGrid.jsx` to keep track of the list of
technologies, the user's selected "stack", and the loading state, and in
`Navbar.jsx` to track whether the mobile menu is open and which nav link
is active.

**4. What does the `useEffect` hook do, and why did you need it to load
the JSON data?**
`useEffect` runs side effects — code that reaches outside of React's
rendering, like fetching data — after a component renders. I needed it
because fetching the technology JSON is an asynchronous side effect: it
shouldn't run during rendering itself, and it should only run once when
the component first mounts, so I used `useEffect` with an empty
dependency array to fetch the data and store it in state.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items in a list apart between renders. With
a stable, unique key, React can figure out which items were added,
removed, or reordered and update only what actually changed, instead of
re-rendering the whole list. Without unique keys, React can mix up items
and cause bugs or unnecessary re-renders.

**6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. I used it in
`YourStack.jsx`: when the stack array is empty, it renders a placeholder
message ("Pick a technology from the grid to start building your
stack."), and when it has items, it renders the list of selected
technologies instead.

**7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?**
A parent passes data down to a child through props, e.g.
`<TechCard tech={tech} isAdded={...} />`. For a child to send something
back up, the parent passes a function down as a prop (e.g. `onAdd`), and
the child calls that function — usually with some data as an argument —
whenever the relevant event happens. That's how `TechCard` tells
`TechnologyGrid` which technology was just clicked, without the child
needing to know how the parent's state actually works.

## 📤 Submission

- GitHub Repository Link:
- Live Site Link:
