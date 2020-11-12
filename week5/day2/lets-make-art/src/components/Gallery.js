import React from "react";
import Projects from "./Projects";
import axios from "axios";

class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            searchInput: "",
            displayAll: [],
        };
    }

    componentDidMount() {
        axios.get("/api/watercolor").then((res) => {
            this.setState({
                displayAll: res.data,
            });
        });
    }
}

export default Gallery;