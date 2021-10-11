import {useState} from "react";
import {MaterialPicker} from 'react-color'
import './styles/ColorBox.css';

export default function ColorBox(props) {
    const [color, setColor] = useState(props.color);
    const [rgb, setRgb] = useState(`rgb(${ color.r }, ${ color.g }, ${ color.b })`);

    const updateColor = (color) => {
        setColor(color);
        setRgb(color.hex);
        props.bubbleUpdate(color);
    }

    return (
        <div className="box1">
            <p>transparent</p>
            <div className="colorbox" style={{backgroundColor: rgb, opacity: props.alpha}} />
            <div className="colorbox-popover">
                <MaterialPicker color={ color } onChange={(color) => updateColor(color)} />
            </div>
        </div>
    )
};
