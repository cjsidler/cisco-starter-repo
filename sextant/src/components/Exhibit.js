import React from "react";

function Exhibit(props) {
    return (
        <div>
            <h1>Exhibit Title</h1>
            <div className="exhibit-card-wrapper">{props.children}</div>
        </div>
    );
}

export default Exhibit;
