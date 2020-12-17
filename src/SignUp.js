import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";


const SignUp = ({ history }) => {
    const handleSingUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <form className="Form" onSubmit={handleSingUp}>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input name="email" className="input" type="email" placeholder="Email" />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input name="password" className="input" type="password" placeholder="Password" />
                </div>
            </div>
            <div className="control">
                <button className="button is-link">Sing Up</button>
            </div>
        </form>
    );
}

export default withRouter(SignUp);
