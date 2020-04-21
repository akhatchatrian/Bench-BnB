import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => {
        return (
            <div className="greeting-links">
                <Link className="btn" to="/login">Login</Link>
                <Link className="btn" to="/signup">Sign-up</Link>
            </div>
        )
    }

    const currentUserGreeting = () => {
        return (
            <div className="greeting-welcome">
                <h3>Welcome {currentUser.username}!</h3>
                <button className="btn" onClick={logout}>Sign out</button>
            </div>
        )
    }

    return currentUser ? currentUserGreeting() : sessionLinks()
}

export default Greeting; 