import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mstp = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup'
});

const mdtp = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mstp, mdtp)(SessionForm);