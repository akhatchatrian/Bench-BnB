import React from "react";

export const BenchItem = props => {
    return (
        <li className="bench-item__container">
            <p className="bench-item__description">
                {props.bench.description}
            </p>
        </li>
    )
};

