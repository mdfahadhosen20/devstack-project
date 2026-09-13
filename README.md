# 🧱 Dev Stack Builder

## 📖 Description
Dev Stack is a React-based web application that helps developers explore various frontend, backend, database, and tooling technologies. Users can browse a catalog of tools and build their own personalized "stack" for their next project by selecting their favorite technologies.

## 🛠️ Technology Used
- **React.js** (via Vite)
- **Tailwind CSS & DaisyUI** for styling
- **React-Toastify** for alert notifications
- **JSON** for storing local technology data

## ✨ 3 Key Features
1. **Interactive Stack Builder:** Users can easily add or remove technologies from their personal "Your Stack" sidebar. The app prevents duplicate entries and shows instant visual feedback with toast notifications.
2. **Fully Responsive Layout:** The application includes a sticky navbar with a mobile hamburger menu and a responsive grid layout that adapts from 3 columns on desktop to 1 column on mobile screens.
3. **Dynamic Data Fetching:** Technology data is fetched asynchronously from a local JSON file, complete with a loading state before the UI renders.

---

## ❓ React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that allows us to write HTML-like code directly inside our JavaScript files. React uses it because it makes writing and reading components much easier—we can see our UI structure and our JavaScript logic combined in one place.

**2. What is the difference between props and state?**
Props are read-only data passed from a parent component down to a child component. State is internal data managed by the component itself that can change over time. In short: props are passed in, state is managed inside.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` allows a component to remember data and update it. Whenever the state updates, the component re-renders. I used it in this project to store the fetched JSON data, track which technologies were added to "Your Stack," and manage the loading state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` is used to run side effects (like data fetching) outside of the normal render cycle. I needed it because fetching the JSON file is an asynchronous task. By using `useEffect` with an empty dependency array `[]`, I made sure the data was fetched exactly once when the component first loaded.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop to keep track of individual elements in a list. If an item is added, removed, or changed, the unique key helps React figure out exactly which item needs to be updated without having to re-render the entire list, making the app much faster and preventing bugs.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing a different UI based on a specific condition (like an `if-else` statement). I used it in the "Your Stack" section: if the user hasn't selected anything, it displays an empty state message. If they have selected items, it renders the list of their chosen technologies instead.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using `props`. To send data back up, the parent passes a function down to the child as a prop. When an action happens in the child (like clicking the "Add to Stack" button), the child calls that function and passes the necessary data as an argument, which then updates the parent's state.

---

## 📤 Submission Links

- **GitHub Repository Link:** https://github.com/mdfahadhosen20/devstack-project
- **Live Site Link:**
