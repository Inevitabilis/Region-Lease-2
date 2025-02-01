import { Component } from "react";
import { ArrowRight } from "./ArrowRight";
import "./CollapsableList.css";

type CollapsableListProps = {
  array: string[];
  defaultOpen?: boolean;
};

type CollapsableState = {
  isOpen: boolean;
};

export class CollapsableList extends Component<CollapsableListProps> {
  state: Readonly<CollapsableState> = {
    isOpen: false,
  };

  collapsedList = () => this.props.array.join(", ");

  handleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return this.state.isOpen ? (
      <>
        <ArrowRight className="arrow-open" />
        <div className="collapse open" onClick={this.handleCollapse}>
          {this.props.array.map((arrayMember, index) => (
            <div key={index}>{arrayMember}</div>
          ))}
        </div>
      </>
    ) : (
      <div className="collapse close" onClick={this.handleCollapse}>
        <span>{this.collapsedList()}</span>
        <ArrowRight className="arrow-close" />
      </div>
    );
  }
}

