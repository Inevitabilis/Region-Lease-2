import { Component } from "react";
import { ArrowRight } from "./ArrowRight";
import "./CollapsableList.css";

type CollapsableListProps = {
  array: string[];
  defaultOpen?: boolean;
};

type CollapsableState = {
  isOpen: boolean;
  currentArray: string[];
};

export class CollapsableList extends Component<CollapsableListProps> {
  state: CollapsableState = {
    isOpen: false,
    currentArray: [],
  };

  collapsedList = () => this.props.array.join(", ");

  handleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    if (this.state.currentArray != this.props.array) {
      this.state.currentArray = this.props.array;
      this.state.isOpen = false;
    }
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

