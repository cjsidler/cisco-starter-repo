import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import IPViewer from "./components/IPViewer";

function App() {
    return (
        <div className="App">
            <Banner title="Sextant" />
            <Exhibit title="My ipv4 address">
                <IPViewer type="ipv4" />
            </Exhibit>
            <Exhibit title="My ipv6 address">
                <IPViewer type="ipv6" />
            </Exhibit>
        </div>
    );
}

export default App;
