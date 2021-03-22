import React, { Component } from 'react';
import Row from './row/Row';
import './Matrix.css';

class Matrix extends Component {
    buildMatrix() {
        const matrix = [];
        for (let i = 0; i < this.props.height; i++) {
            matrix.push(
                <Row 
                    key={i}
                    rowPosition={i}
                    width={this.props.width}
                    matrixRef={this.props.matrixRef} 
                />
            );
        }
        return matrix;
    }

    render() {
        return <div id="matrix">{this.buildMatrix()}</div>;
    }
}

export default Matrix;