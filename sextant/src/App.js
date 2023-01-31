import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import IPViewer from "./components/IPViewer";
import PacketLatency from "./components/PacketLatency";

function App() {
    return (
        <div className="App">
            <Banner title="Sextant" />
            <Exhibit title="IPv4 address">
                <IPViewer type="ipv4" />
            </Exhibit>
            <Exhibit title="IPv6 address">
                <IPViewer type="ipv6" />
            </Exhibit>
            <Exhibit title="Pylon Packet Latency">
                <PacketLatency />
            </Exhibit>
        </div>
    );
}

export default App;
