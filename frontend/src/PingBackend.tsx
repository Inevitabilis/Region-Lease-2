import { PureComponent } from "react";

export type BackendPingerProps = unknown;
type BackendPingerState = { status: string };

export class BackendPinger extends PureComponent<BackendPingerProps, BackendPingerState> {
  state: Readonly<BackendPingerState> = { status: "click button to ping" };

  pingBackend = async () => {
    this.setState({ status: "pinging..." });
    try {
      const response = await fetch("http://127.0.0.1:3000/test", { method: "GET" });
      const text = await response.text();
      this.setState({ status: `Got: ${text}` });
    } catch (e) {
      if (e instanceof Error) {
        this.setState({ status: `Error: ${e.message}` });
      }
    }
  };

  render() {
    return (
      <>
        <button onClick={this.pingBackend}>ping backend</button>
        <br />
        {this.state.status}
      </>
    );
  }
}
