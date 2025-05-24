import './App.css';
import Card from "./Card";

// Use a utility function randNum to generate random numbers.
const randNum = () => Math.floor(Math.random() * 100) + 1;

/*
This functional component named App generates and renders three Card elements, each with a random value.  
*/

function App() {
  // Render three Card components and pass random values as the num prop.
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Card num={randNum()} />
    </div>
  );
}

export default App;

/*
Explanation:

1. Import Statements: The code imports the App.css file for styling and the Card component from a separate module for reuse.

2. Random Number Generator: A function randNum is defined to generate a random number between 1 and 100, which will be passed as a prop to the Card components.

3. App Component: The App function defines a React functional component that serves as the main structure of the application.

4. JSX Structure: Inside the App component, a div contains an h1 heading and three Card components, each receiving a unique random number via the num prop.

5. Export: The App component is exported as the default export, making it accessible for use in other parts of the application.
*/