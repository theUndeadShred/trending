import React, { Component } from 'react';
import { func } from 'prop-types'

import './Cell.scss';
import Typer from '../Typer';

class Cell extends Component {
    static propTypes = {
        fetchAnimal: func,
        reset: func
    }

    state = {
        animal: ''
    }

    reset = () => {
        console.log('setting state in reset')
        this.setState({
            animal: this.props.fetchAnimal()
        })
    }

    render = () => {
        let colorKey = Math.floor(Math.random() * Math.floor(8));
        return (
            <div className={`Cell color${colorKey}`}>
                <Typer reset={this.reset} input={this.props.fetchAnimal()}></Typer>
            </div>
        );
    }
};

export default Cell;
