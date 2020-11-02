import React, { Component } from "react";

class Picasso extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addColors: props.watercolor.color,
            toggleEdit: false,
        };
    }

    handleChange = (event) => {
        this.setState({ addColors: event.target.value });
    };

    toggleEdit = () => {
        this.setState({ toggleEdit: !this.state.toggleEdit });
    };

    render() {
        const { watercolor } = this.props;
        return (
            <li className="watercolor">
                <p
                    className="remove-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        this.props.endProject(this.props.index);
                    }}
                >
                    {" I've finished this project "}
                </p>
                <h1>{watercolor.name} </h1>

                {this.state.toggleEdit ? (
                    <input
                        value={this.state.addColors}
                    onChange={this.handleChange}
                    />
                ) : (
                    <h2>New Project: {watercolor.name}</h2>
                )}

                {this.state.toggleEdit ? (
                    <div>
                    <button
                    onClick={() => {
                      this.props.editArt(
                        this.props.index,
                        this.state.addColors
                      );
                      this.toggleEdit();
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      this.setState({ addColors: watercolor.color });
                      this.toggleEdit();
                    }}
                  >
                      Cancel
                    </button>
                  </div>
            ) : null}

            <button onClick={this.toggleEdit}>Edit</button>
            <h2>{watercolor.tutorialTime}</h2> : null
          </li>
        );
    }
}
export default Picasso;