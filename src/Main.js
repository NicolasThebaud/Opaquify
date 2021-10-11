import "./styles/Main.css";

import {useState} from "react";
import {MaterialPicker} from 'react-color'

import RuleY from "./RuleY";
import ColorBox from "./ColorBox.js";

export default function Main(props) {
    const [bg] = useState(props.bg);
    const [color, setColor] = useState({
        r: '20',
        g: '26',
        b: '190',
    });
    const [alpha, setAlpha] = useState(0.5);
    const [computedColor, setComputedColor] = useState(`rgb(${ color.r }, ${ color.g }, ${ color.b })`);

    const updateComputation = (c, a = alpha) => {
        console.warn(c.rgb || c, a);
        setColor(c);

        const r = Math.floor(bg[0] - a * (bg[0] - +(c.rgb ? c.rgb.r : c.r)));
        const g = Math.floor(bg[1] - a * (bg[1] - +(c.rgb ? c.rgb.g : c.g)));
        const b = Math.floor(bg[2] - a * (bg[2] - +(c.rgb ? c.rgb.b : c.b)));
        setComputedColor(`rgb(${r}, ${g}, ${b})`);
    };

    const updateAlpha = (a, c) => {
        setAlpha(a);
        updateComputation(c, a);
    };

    return (
        <div className="App">
            <ColorBox color={color} alpha={alpha} bubbleUpdate={updateComputation} />
            <div className="box2" style={{backgroundColor: computedColor}}>
                <p>opaque</p>
            </div>

            <div className="slidecontainer">
                <input type="range" min="0" max="1" step="0.1" className="slider"
                       value={alpha} onChange={e => updateAlpha(e.target.value, color)} />
                <p>opacity {alpha}</p>
            </div>

            <div className="color-result">
                <MaterialPicker color={computedColor}/>
            </div>

            {[...Array(50)].map((x, i) =>
                <RuleY key={i} left={i * 15 - 200} />
            )}
        </div>
    );
}
