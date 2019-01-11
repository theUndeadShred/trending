import React, { Component } from 'react';
import { string } from 'prop-types';
import './Typer.scss';

const Cursor = ({isTyping}) => (
    <span className="cursor">{isTyping ? '|' : ''}</span>
)

class Typer extends Component {
    static displayName = 'Typer';

    static propTypes = {
        input: string.isRequired
    }

    static defaultProps = {
        input: 'Liger'
    }

    state = {
        animatedInput: '',
        currentIndex: 0,
        isTyping: true,
    }

    componentDidMount = () => {
        this.renderTyperAnimation()
    }

    componentDidUpdate = () => {
        this.renderTyperAnimation()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.input !== prevState.input) {
            return { currentIndex: 0, animatedInput: ''}
        }
        return null
    }

    renderTyperAnimation = () => {
        let split = this.props.input.split('');

        // If we have iterated thorugh the input completely,
        //  invoke a new animal input! This will also cause a
        // state reset via getDerivedStateFromProps()
        if (split.length < this.state.currentIndex) {
            this.props.reset()
            return;
        }

        // each time we run through the loop, randomize the interval
        // to help naturalize the typing
        let interval = Math.floor(Math.random() * Math.floor(1000));

        setTimeout(function () {
            this.setState({
                animatedInput: this.state.animatedInput + split[this.state.currentIndex],
                currentIndex: this.state.currentIndex + 1,
                input: this.props.input
            });
        }.bind(this), interval);
    }

    render = () => {
        return(
            <div className="typer">
                {this.state.animatedInput}
                <Cursor isTyping={this.state.isTyping} />
            </div>

        )
    };
};

export default Typer;
