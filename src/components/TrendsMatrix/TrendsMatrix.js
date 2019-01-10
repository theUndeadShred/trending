import React, { Component } from 'react';
import { array } from 'prop-types';

import './TrendsMatrix.scss';
import Cell from '../Cell';

class TrendsMatrix extends Component {
    static propTypes = {
        data: array
    };

    // static getDerivedStateFromProps(props, state) {
    //     if (!state || state.max) {
    //         this.setState({
    //             max: props.data.length
    //         })
    //     }
    // }

    fetchAnimal = () => {
        const max = this.props.data.length
        return this.props.data[Math.floor(Math.random() * Math.floor(max))];
    }

    render = () => {
        return (
            <div className='matrix'>
                <Cell key="1" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="2" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="3" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="4" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="5" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="6" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="7" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="8" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="9" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="10" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="11" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="12" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="13" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="14" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="15" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="16" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="17" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="18" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="19" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="20" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="21" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="22" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="23" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="24" fetchAnimal={this.fetchAnimal}></Cell>
                <Cell key="25" fetchAnimal={this.fetchAnimal}></Cell>
            </div>
        );
    };
};

export default TrendsMatrix;
