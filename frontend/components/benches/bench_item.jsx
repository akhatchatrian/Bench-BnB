import React from "react";

export const BenchItem = props => {
    return (
        <li className="bench-list__item">
            <p className="bench-list__item__description">
                {props.bench.description}
            </p>
        </li>
    )
};

