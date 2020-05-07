import React from "react";
import BenchMap from "./bench_map";
import BenchIndex from "./bench_index";

export const Search = (props) => (
    <section className="section-main">
        <BenchMap benches={props.benches}/>
        <BenchIndex 
            benches={props.benches}
            fetchBenches={props.fetchBenches} />
    </section>
);