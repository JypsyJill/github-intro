import React from "react";
import OKeefe from "./DryBrush";
import axios from "axios";


class Vermeer extends React.Component {
    constructor() {
        super();

        this.state = {
            minutesInput: "", 
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


    handleInput = (e) => {
        this.setState({ minutesInput: e.target.value });
        axios
            .get(`/api/watercolor?search=${e.target.value}`)
            .then((res) => {
                this.setState({ artGallery: res.data });
            })
            .catch((err) => console.log(err));
    };

    render() {
        let curatedArt = [];
        curatedArt = this.state.artGallery.map((watercolor) => (
            <OKeefe
                key={watercolor.id}
                project={watercolor}
                addColors={this.props.addColors}
            />
        ));
    return (
        <div>
            <input value={this.state.minutesInput} onChange={this.handleInput} />
            <ul className="yourList">{curatedArt}</ul>
        </div>
    );
    }
}
    
    export default Vermeer;
    