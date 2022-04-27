import React from "react";
import SignIn from "../../components/sign-in/sign-in.comonent";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss"

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
);
export default SignInAndSignUp;