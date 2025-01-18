import { PureComponent } from "react";

export interface CounterButtonClassProps {
  title?: string;
  startCount?: number;
}

interface CounterButtonClassState {
  count: number;
}

export default class CounterButtonClass extends PureComponent<
  CounterButtonClassProps,
  CounterButtonClassState
> {
  constructor(props: Readonly<CounterButtonClassProps>) {
    super(props);
    this.state = { count: props.startCount ?? 0 };
  }

  handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.title ?? "count is"} {this.state.count}
      </button>
    );
  }
}
