import React from "react";



const DryBrush = (props) => {
    return (
        <li
            onClick={() => {
                props.addColors(proj.id);
            }}
        >
            <h1>{proj}</h1>
            <h2>{proj}</h2> 
        </li>    
    );
};

export default DryBrush;
