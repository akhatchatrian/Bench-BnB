import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => {
        return (
            <div className="section-greeting__links">
                <Link className="btn__primary" to="/login">Login</Link>
                <Link className="btn__primary" to="/signup">Sign up</Link>
            </div>
        )
    }

    const currentUserGreeting = () => {
        return (
            <div className="section-greeting__welcome">
                <h3>Welcome {currentUser.username}!</h3>
                <button className="btn__primary" onClick={logout}>Sign out</button>
            </div>
        )
    }

    return (
        <section className="section-greeting">
            {currentUser ? currentUserGreeting() : sessionLinks()}
        </section>            
    )
}

export default Greeting; 