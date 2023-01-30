import React, { useState } from "react";
import { useEffect } from "react";

function IPViewer(props) {
    const [ipAddress, setIpAddress] = useState("");

    useEffect(() => {
        if (props.type === "ipv4") {
            fetch("https://api.ipify.org?format=json")
                .then((response) => response.json())
                .then((data) => setIpAddress(data.ip));
        }
        if (props.type === "ipv6") {
            fetch("https://api64.ipify.org?format=json")
                .then((response) => response.json())
                .then((data) => setIpAddress(data.ip));
        }
    }, [ipAddress]);

    return (
        <div>
            <p>{ipAddress}</p>
        </div>
    );
}

export default IPViewer;
