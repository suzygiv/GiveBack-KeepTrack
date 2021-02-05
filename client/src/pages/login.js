//use axios to talk to the back end (make the API)-- this gives you info back; if it's unauthorized, add an error message; if it's correct then you need a redirect to the welcome page!
//set up routes folder
//handleformsubmit
import React from "react";
import LoginForm from "../components/LoginForm"
const Login = () => {
    return (
        <div>
            <LoginForm />
        </div>
    );
}
export default Login;