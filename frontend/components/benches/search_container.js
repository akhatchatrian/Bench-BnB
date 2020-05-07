import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { Search } from "./search";
import { asArray } from "../../../selectors";


const mstp = (state) => ({
    benches: asArray(state.entities)
});

const mdtp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mstp, mdtp)(Search);