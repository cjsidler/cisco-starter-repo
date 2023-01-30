import React from "react";
import useWebSocket from "react-use-websocket";
import { useState, useEffect } from "react";

function PacketLatency(props) {
    const [latency, setLatency] = useState(0);
    const [curTime, setCurTime] = useState(Date.now());
    const { lastJsonMessage } = useWebSocket(props.endPoint);

    useEffect(() => {
        setCurTime((prevTime) => {
            setLatency(lastJsonMessage - prevTime);
            return lastJsonMessage;
        });
    }, [lastJsonMessage]);

    return (
        <div>
            <p>Packet latency from {props.endPoint}</p>
            <p>{latency} ms</p>
        </div>
    );
}

export default PacketLatency;
