import React, { Component, MouseEvent } from "react";

type ClassComponentPropsT = { text: string };
type ClassComponentStateT = { counter: number };

export class ClassComponent extends Component<
  ClassComponentPropsT,
  ClassComponentStateT
> {
  state = { counter: 0 };

  handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { counter } = this.state;

    this.setState({ counter: counter + 1 });
  };

  render() {
    const { text } = this.props;
    const { counter } = this.state;

    return (
      <button onClick={this.handleBtnClick}>
        {text} clicked times: {counter}
      </button>
    );
  }
}
