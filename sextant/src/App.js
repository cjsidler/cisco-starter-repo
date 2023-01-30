import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

function App() {
    return (
        <div className="App">
            <Banner />
            <Exhibit>
                <div className="card">
                    <h4>Card #1</h4>
                    <p>Card Details</p>
                </div>
                <div className="card">
                    <h4>Card #2</h4>
                    <p>Card Details</p>
                </div>
                <div className="card">
                    <h4>Card #3</h4>
                    <p>Card Details</p>
                </div>
                <div className="card">
                    <h4>Card #4</h4>
                    <p>Card Details</p>
                </div>
                <div className="card">
                    <h4>Card #5</h4>
                    <p>Card Details</p>
                </div>
                <div className="card">
                    <h4>Card #6</h4>
                    <p>Card Details</p>
                </div>
                <div className="card">
                    <h4>Card #7</h4>
                    <p>Card Details</p>
                </div>
            </Exhibit>
        </div>
    );
}

export default App;
