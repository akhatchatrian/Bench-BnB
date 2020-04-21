import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className="errors">
                    {Object.values(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                    ))}
                </ul>
            )
        };
    };

    render() {
        return (
            <form className="session-form" onSubmit={this.handleSubmit}>
                <div className="session-form__input-fields">
                    <input 
                        value={this.state.username}
                        onChange={this.handleChange("username")}
                        placeholder="username" 
                        type="text"
                    />
                    <br/>
                    <input 
                        value={this.state.password}
                        onChange={this.handleChange("password")}
                        placeholder="password" 
                        type="password"
                    />
                </div>
                <button className="btn__submit" type="submit">{this.props.formType} &rarr;</button>
            </form>
        )
    }

}

export default SessionForm;