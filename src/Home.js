import React from "react";
import app from "./base";

export const Home = () => {
    return (
        <>
            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Hello Beer
                        </h1>
                        <h2 className="subtitle">
                            =^^=
                        </h2>
                        <span className="navbar-item" style={{"display": "block"}}>
                          <a onClick={() => app.auth().signOut()} className="button is-primary is-inverted">
                            <span>Sign out</span>
                          </a>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}