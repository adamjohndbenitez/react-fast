// LogoutButton.jsx
function LogoutButton(props) {
    return (
        <button onClick={props.logout}>
            Logout
        </button>
    );
}

export default LogoutButton;

/*
Explanation 

Similar to LoginButton, the LogoutButton receives a logout function as a prop.

It binds this function to the onClick event of the button to handle logout logic when clicked.
*/