import React from "react";
import DryBrush from "./DryBrush";
import axios from "axios";


class Primer extends React.Component {
    constructor() {
        super();

        this.state = {
            searchInput: "", 
            artGallery: [],
        };
    }
    componentDidMount() {
        axios.get("/api/watercolor").then((res) => {
            this.setState({
                artGallery: res.data,
            });
        });
    }

    render() {
        let curatedArt = [];
        curatedArt = this.state.artGallery.map((watercolor) => (
            <DryBrush
                key={watercolor.id}
                watercolor={watercolor}
                addToProj={this.props.addToProj}
            />
        ));
    return <ul className="yourList">{curatedArt}</ul>;
        
    }
}
    
    export default Primer;
    