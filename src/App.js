import './styles/App.css';

import Main from "./Main.js";
import {useState} from "react";

function App() {
    const [bg1] = useState([255, 255, 255]);
    const [bg2] = useState([50, 50, 50]);

    return (
        <div>
            <div id="bg1" style={{backgroundColor: `rgb(${bg1[0]}, ${bg1[1]}, ${bg1[2]})`}}>
                <Main bg={bg1} />
            </div>
            <div id="bg2" style={{backgroundColor: `rgb(${bg2[0]}, ${bg2[1]}, ${bg2[2]})`}}>
                <Main bg={bg2} />
            </div>
        </div>
    )
}

export default App;
