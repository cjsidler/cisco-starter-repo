import React from "react";

function Exhibit(props) {
    return (
        <div className="exhibit-container">
            <h2>{props.title}</h2>
            <div className="exhibit-content">{props.children}</div>
        </div>
    );
}

export default Exhibit;
