import React from "react";

import { BenchItem } from "./bench_item";

class BenchIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchBenches();
    };

    assignBenches() {
        return (
            <ul className="bench-list">
                {Object.values(this.props.benches).map((bench) => (
                    <BenchItem bench={bench} key={bench.id} />
                ))}
            </ul>
        );
    }

    render () {
        if (!this.props.benches || Object.values(this.props.benches).length === 0) {
            return null
        }

        return (
            <div className ="benches">
                <h1 className="benches__title">Benches</h1>
                <br/>
                <div bench="benches__container">
                    {this.assignBenches()}
                </div>
            </div>
        );
    };
}

export default BenchIndex;