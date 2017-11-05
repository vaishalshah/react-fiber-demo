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

    const depth = this.state.levelDepth,
      xDiff = this.state.xDiff,
      yDiff = this.state.yDiff;
    const children1 = this.renderChild(depth, topx, topy);
    const children2 = this.renderChild(
      depth,
      topx - xDiff * (depth - 1),
      topy + yDiff * (depth - 1)
    );
    const children3 = this.renderChild(
      depth,
      topx + xDiff * (depth - 1),
      topy + yDiff * (depth - 1)
    );
    const children4 = this.renderChild(
      depth,
      topx - xDiff * (depth - 1) * 2,
      topy + yDiff * (depth - 1) * 2
    );
    const children5 = this.renderChild(
      depth,
      topx,
      topy + yDiff * (depth - 1) * 2
    );
    const children6 = this.renderChild(
      depth,
      topx + xDiff * (depth - 1) * 2,
      topy + yDiff * (depth - 1) * 2
    );
    const children7 = this.renderChild(
      depth,
      topx - xDiff * (depth - 1) * 3,
      topy + yDiff * (depth - 1) * 3
    );
    const children8 = this.renderChild(
      depth,
      topx - xDiff * (depth - 1),
      topy + yDiff * (depth - 1) * 3
    );
    const children9 = this.renderChild(
      depth,
      topx + xDiff * (depth - 1),
      topy + yDiff * (depth - 1) * 3
    );
    const children10 = this.renderChild(
      depth,
      topx + xDiff * (depth - 1) * 3,
      topy + yDiff * (depth - 1) * 3
    );
    const children11 = this.renderChild(
      depth,
      topx - xDiff * (depth - 1) * 4,
      topy + yDiff * (depth - 1) * 4
    );
    const children12 = this.renderChild(
      depth,
      topx - xDiff * (depth - 1) * 2,
      topy + yDiff * (depth - 1) * 4
    );
    const children13 = this.renderChild(
      depth,
      topx,
      topy + yDiff * (depth - 1) * 4
    );
    const children14 = this.renderChild(
      depth,
      topx + xDiff * (depth - 1) * 2,
      topy + yDiff * (depth - 1) * 4
    );
    const children15 = this.renderChild(
      depth,
      topx + xDiff * (depth - 1) * 4,
      topy + yDiff * (depth - 1) * 4
    );

    return (
      <div>
        {children1}
        {children2}
        {children3}
        {children4}
        {children5}
        {children6}
        {children7}
        {children8}
        {children9}
        {children10}
        {children11}
        {children12}
        {children13}
        {children14}
        {children15}
      </div>
    );
  }
}
