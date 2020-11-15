import React from 'react';
import Trial from "./Trial"

const Timing = (props) => {
    const catalogue = props.trial.map((watercolor, index) => (
        <Trial
        key={`${watercolor.id}}-${index}`}
        watercolor={watercolor}
        endProject={props.endProject}
        editArt={props.editArt}
        index={index}
        />
    ));
    
    
    return <ul className="catalogue">{catalogue}</ul>;
    };


export default Timing;