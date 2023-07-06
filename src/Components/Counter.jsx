import React from 'react';
import './style.css'
import Total from './Total';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleIncrement = () => {
    const { value } = this.state;
    const { onIncrement } = this.props;
    const newValue = value + 1;
    this.setState({ value: newValue });
    onIncrement(newValue);
  }

  handleDecrement = () => {
    const { value } = this.state;
    const { onDecrement } = this.props;
    if(value > 0) {
      const newValue = value - 1;
      this.setState({ value: newValue });
      onDecrement(newValue);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{value}</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

<Total />
