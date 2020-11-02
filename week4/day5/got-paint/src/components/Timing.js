import React from 'react';
import Picasso from "./Trial"

const Degas = (props) => {
    console.log(props.watercolor)
    const catalogue = props.getData.map((watercolor, index) => (
        <Picasso
        key={`${watercolor.id}}-${index}`}
        watercolor={watercolor}
        endProject={props.endProject}
        editArt={props.editArt}
        index={index}
        />
    ));
    
    
    return <ul className="catalogue">{catalogue}</ul>;
    };


export default Degas;