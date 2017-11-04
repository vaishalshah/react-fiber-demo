import React from 'react';
import Bubble from './Bubble';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.number = 1;
    this.state = {
      number: this.number
    };

    this.updateProps = this.updateProps.bind(this);
  }

  updateProps() {
    this.number = this.number === 9 ? 0 : this.number + 1;
    this.setState({
      number: this.number
    });
    console.log(this.number);
  }

  componentDidMount() {
    setInterval(this.updateProps, 2000);
  }

  renderChild(depth, x, y) {
    if (depth === 0) return;
    return (
      <Bubble text={this.state.number} x={x + 'px'} y={y + 'px'}>
        {this.renderChild(depth - 1, x - 25, y + 25)}
        {this.renderChild(--depth, x + 25, y + 25)}
      </Bubble>
    );
  }

  render() {
    const topx = document.body.clientWidth / 2;
    const topy = 20;
    const children = this.renderChild(10, topx, topy);
    return <div>{children}</div>;
  }
}
