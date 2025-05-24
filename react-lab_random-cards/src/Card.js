/*
This functional component named Card renders a card that displays a random number and evaluates whether the number is “High” (greater than 50) or “Low” (50 or below).
*/

function Card(props) {
    // Accept props and use props.num to display the card’s value.
    // Add conditional logic to determine whether the card is "High" or "Low".
    return (
        <div className="card">
            <h1>This card's value is {props.num}</h1>
            <p>This card is: {props.num > 50 ? "High" : "Low"}</p>
        </div>
    );
}

export default Card;
/*
Explanation:

1. Function Definition: The Card component is a functional React component that takes props as its argument to receive data.

2. Container Element: It returns a <div> element with the class card, serving as the main container for the component.

3. Dynamic Heading: Inside the <h1> tag, it dynamically displays the num value passed through props.

4. Conditional Rendering: The <p> tag uses a conditional expression to display "High" if props.num is greater than 50, or "Low" otherwise.

5. Exporting Component: The Card component is exported as the default export, allowing it to be imported and used in other parts of the application.
*/