import React, { Component } from "react";
import Popup from "../../components/Popup";
import { Props, State } from "./types";

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Popup>
          Something went wrong, Please contact your IT admin
        </Popup>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
