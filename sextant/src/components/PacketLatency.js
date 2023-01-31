import React from "react";
import { useState, useEffect } from "react";
import { w3cwebsocket } from "websocket";
const client = new w3cwebsocket("ws://localhost:55455");

function PacketLatency() {
    const [latency, setLatency] = useState(0);

    useEffect(() => {
        client.onmessage = (message) => setLatency(Date.now() - parseInt(message.data));
    });

    return (
        <div>
            <p>{latency} ms</p>
        </div>
    );
}

export default PacketLatency;
