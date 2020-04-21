import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mstp = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
});

const mdtp = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mstp, mdtp)(SessionForm);