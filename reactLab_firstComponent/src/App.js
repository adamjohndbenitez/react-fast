import Heading from "./Heading"; // #1.c default export: syntactically, import keyword, then the <function_name> under which you’ll use this imported code. You would then type the keyword `from`, and finally the "./location" of the file, without the .js extension.
import { addTwo, addThree } from "./Heading"; // #2.c named export: `import` { <function_name1>, <function_name2> } `from` "./localtion"; , without the .js extension.
import "./App.css";
import Card from "./Card"

function App() {
  return ( 
    <div className="App"> 
      This is the starting code for "Your first component" ungraded lab 
      <Heading firstname="Bob"/>
      <Heading firstname="Sonia"/>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h1" />
      <Card h3="First card's h2" />
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </div> 
  ); 
} 
 
export default App;
