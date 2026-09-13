# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive web application that helps users explore different web development technologies and build their own technology stack. Users can select technologies, view their details, and manage their selected stack easily.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

- 🔍 **Explore Technologies** — Browse different technologies with their category, difficulty, rating, and description.
- 🧰 **Build Your Stack** — Add technologies to your personal stack and remove them whenever needed.
- 📱 **Fully Responsive** — Works smoothly on desktop, tablet, and mobile devices.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

useState is used to create and manage changing data in a React component. In this project, I used it to manage the selected technologies in the stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to load the technology data from the JSON file when the Technology section starts.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps React update the correct item efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the Your Stack section:

- If the stack is empty, it shows an empty message.
- If technologies are selected, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a function that the parent passes through props.