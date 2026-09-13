# 🧱 Dev Stack Builder

## 📖 Description
Picking a tech stack for a new project usually means jumping between a dozen tabs — docs, blog posts, "best of 2026" lists. Dev Stack Builder puts that whole decision in one place: browse frontend, backend, database, and tooling options side by side, and drag your favorites into a personal "stack" so you actually walk away with a plan instead of more open tabs.

## 🛠️ Technology Used
- **React.js** (via Vite)
- **Tailwind CSS & DaisyUI** for styling
- **React-Toastify** for alert notifications
- **JSON** for storing local technology data

## ✨ 3 Key Features
1. **Build your own stack** — add or remove technologies from the "Your Stack" panel with one click. Try to add the same tool twice and it'll warn you instead of silently duplicating it, and every action gets a toast so you always know what just happened.
2. **Actually responsive, not just resized** — a sticky navbar that turns into a hamburger menu on phones, and a card grid that goes from 3 columns down to 1 as the screen shrinks, so it holds up on mobile, tablet, and desktop alike.
3. **Data-driven, not hardcoded** — every technology card is rendered from a local JSON file that's fetched asynchronously, with a real loading state in between so the UI never flashes empty content.

---

## ❓ React Q&A

**1. What is JSX, and why is it used in React?**
JSX lets you write markup that looks like HTML right inside your JavaScript. It's used because it keeps a component's structure and its logic in the same place — you can look at one file and immediately see what renders and why, instead of piecing it together from separate `createElement` calls.

**2. What is the difference between props and state?**
Props are handed to a component by its parent and the component can't change them — they're read-only from its point of view. State is data the component owns and can update itself, usually with `useState`. Simple way to remember it: props come from above, state lives inside.

**3. What does the `useState` hook do, and where did you use it in this project?**
It gives a component a piece of data that can change, and re-renders that component whenever it does. In this project it holds the fetched technology list, the current "stack" of selected items, and the loading flag — plus, in the navbar, whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after render, for things that reach outside React — like fetching data. Loading the JSON file is exactly that kind of side effect, so it can't just happen during render. Using `useEffect` with an empty dependency array means the fetch runs once, right when the component first mounts, and nowhere else.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React needs some way to tell which rendered item is which between renders. A stable, unique key lets it match old items to new ones and only update what actually changed — added, removed, or reordered — instead of tearing down and rebuilding the whole list. Skip the key (or reuse index-based ones carelessly) and you risk mismatched state or weird re-render bugs.

**6. What is conditional rendering? Show one place you used it.**
It's rendering different UI depending on a condition, instead of always showing the same thing. The clearest example here is the "Your Stack" panel: if nothing's been added yet, it shows a friendly empty-state message; the moment you add something, that message swaps out for the actual list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent to child is just props — you pass values down like `<TechCard tech={tech} />`. Going the other way, the parent hands the child a function as a prop (like `onAdd`), and the child calls it when something happens, usually passing along whatever data is relevant. That's how a click on "Add to Stack" inside `TechCard` ends up updating state that actually lives in `TechnologyGrid`.

---

## 📤 Submission Links

- **GitHub Repository Link:** https://github.com/mdfahadhosen20/devstack-project
- **Live Site Link:**
