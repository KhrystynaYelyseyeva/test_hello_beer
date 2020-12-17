import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base";
import { AuthContext } from "./Auth";

const Login = ({history}) => {
    const [ isLogin, setIsLogin ] = useState(false);

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

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <form className="Form" onSubmit={isLogin ? handleLogin : handleSingUp}>
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
            <div className="field is-grouped">
                <div className="control">
                    <button onClick={() => setIsLogin(true)} className="button is-link">Login</button>
                </div>
                <div className="control">
                    <button onClick={() => setIsLogin(false)} className="button is-link is-light">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

export default withRouter(Login);
