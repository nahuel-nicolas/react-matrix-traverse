import React from 'react';
import Matrix from '../Matrix/Matrix';
import traverseAlgorithm from '../../utilities/traverse-algorithms';
import './MatrixBuilder.css';

class MatrixBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            traverseType: "vertical",
            isMatrixReady: false
        }
    }
    
    componentDidMount() {
        // const {top, left, width, height} = element.getBoundingClientRect();
        const { width, height } = document.querySelector("body").getBoundingClientRect();
        this.matrixHeight = Math.max(Math.floor(height / 40 - 5), 4);
        this.matrixWidth = Math.max(Math.floor(width / 40 - 5), 4);
        this.matrixRef = new Array(this.height);
        this.setState({isMatrixReady: true});
    }

    componentDidUpdate() {
        console.log(this.state.traverseType);
        console.log(this.matrixRef);
    }

    onChangeHandler = (event) => {
        this.setState({traverseType: event.target.value});
    }

    render() {
        let elementToRender;
        if (this.state.isMatrixReady) {
            elementToRender = (
                <React.Fragment>
                    <Matrix 
                        height={this.matrixHeight} 
                        width={this.matrixWidth}
                        matrixRef={this.matrixRef} 
                    />
                    <div id="matrix-control">
                        <label htmlFor="traverse-type-select">traverse-type:</label>
                        <select 
                            name="traverse-type-select" 
                            id="traverse-type-select" 
                            value={this.state.traverseType}
                            onChange={this.onChangeHandler}
                        >
                            {
                                ["vertical", "horizontal", "zigzag", "spiral"]
                                .map(traverseType => {
                                    return (
                                        <option
                                            key={traverseType} 
                                            value={traverseType}
                                            style={{textTransform: 'capitalize'}}
                                        >
                                            {traverseType}
                                        </option>
                                    );
                                })
                            }
                        </select>
                        <button 
                            id="play-button" 
                            onClick={
                                traverseAlgorithm.bind(this, 
                                this.state.traverseType, this.matrixRef)
                            }
                        >
                            Play
                        </button>
                    </div>
                </React.Fragment>
            );
        } else {
            elementToRender = <div><h1>Loading...</h1></div>;
        }
        return elementToRender;
    }
}

export default MatrixBuilder;