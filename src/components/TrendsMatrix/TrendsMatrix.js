import React, { Component } from 'react';
import { array } from 'prop-types';

import './TrendsMatrix.scss';
import Cell from '../Cell';

class TrendsMatrix extends Component {
    static propTypes = {
        data: array
    };

    // set the maximum possible value for the random animal assignment
    // based on the data provided
    static getDerivedStateFromProps(props, state) {
        if (!state.max) {
                return { max: props.data.length }
        }
        return null;
    }

    state = {
        max: 0,
    }

    // generate random int based on dataset and use to access value via index
    // since each cell and subsequent typer will manage animation and state,
    // pass this function to each Cell instance
    fetchAnimal = () => (
        this.props.data[
            Math.floor(
                Math.random() * Math.floor(this.state.max)
            )
        ]
    )

    // render the exact number of cells defined in state
    getCells = () => {
        let i = 0;
        let cells = [];

        do {
            cells.push(<Cell key={i} fetchAnimal={this.fetchAnimal}></Cell>);
            i++;
        }
        while (this.props.cellCount > i);
        return cells;
    }

    render = () => {
        return (
            <div className='matrix'>
                {this.getCells()}
            </div>
        );
    };
};

export default TrendsMatrix;
