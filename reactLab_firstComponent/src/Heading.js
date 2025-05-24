// NOTE: All that you would need to do to make it a JavaScript module is use the export syntax. more customizable and have more composable parts. A module can be as simple as a single function in a separate file.
// NOTE: there can be only (1)one default export, but as many named exports as you want.

// #1.a default export: export default keyword in front of the function declaration.
export default function Heading(props) {
    return (
        <>
            <h1>This is an h1 heading</h1>
            <h1>Hello, {props.firstname}</h1>
        </>
    );
}

//NOTE: Named exports are a way to export only certain parts of a given JavaScript file.
//NOTE: In contrast with default exports, you can export as many items from any JavaScript file as you want.

// #1.b named exports: export keyword in front of the function declaration.
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
}

// #2.a default export: Alternative export default at the end of the file.
//export default Heading //<- Uncomment this and remove the `export default` at the beginning of the function.
// #2.b named export: Alternative export at the end of the file.
//export { addTwo, addThree };  //<- Uncomment this and remove the `export default` at the beginning of the function.