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
            <section className ="section-benches">
                <h1 className="benches-title">Benches</h1>
                <br/>
                <div bench="benchs-container">
                    {this.assignBenches()}
                </div>
            </section>
        );
    };
}

export default BenchIndex;