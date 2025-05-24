// LoginButton.jsx
function LoginButton(props) {
    return (
        <button onClick={props.login}>
            Login
        </button>
    );
}

export default LoginButton;

/*
Explanation:

The LoginButton component is a simple functional component.

It receives a login function as a prop and binds it to the onClick event of the button.

When clicked, it triggers the login function to change the application state.
*/