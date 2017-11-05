import React from 'react';
import Bubble from './Bubble';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.number = 1;
    this.state = {
      number: this.number,
      levelDepth: 5,
      inLevelDepth: 5,
      xDiff: 25,
      yDiff: 25,
      interval: 1000
    };

    this.updateProps = this.updateProps.bind(this);
  }

  updateProps() {
    this.number = this.number === 9 ? 0 : this.number + 1;
    this.setState({
      number: this.number
    });
  }

  componentDidMount() {
    setInterval(this.updateProps, this.state.interval);
  }

  renderChild(depth, x, y) {
    if (depth === 0) return;
    return (
      <Bubble text={this.state.number} x={x + 'px'} y={y + 'px'}>
        {this.renderChild(
          depth - 1,
          x - this.state.xDiff,
          y + this.state.yDiff
        )}
        {this.renderChild(--depth, x + this.state.xDiff, y + this.state.yDiff)}
      </Bubble>
    );
  }

  render() {
    const topx = document.body.clientWidth / 2;
    const topy = 10;

    const depth = this.state.inLevelDepth,
      xDiff = this.state.xDiff,
      yDiff = this.state.yDiff;

    const children = [];
    for (let i = 1; i <= this.state.levelDepth; ++i) {
      for (let j = 1; j <= i; ++j) {
        children.push(
          this.renderChild(
            depth,
            topx + xDiff * (depth - 1) * (1 - i + 2 * (j - 1)),
            topy + yDiff * (depth - 1) * (i - 1)
          )
        );
      }
    }

    return <div>{children}</div>;
  }
}
