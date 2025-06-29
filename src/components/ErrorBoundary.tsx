import React from "react";

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log error to service if needed
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red", padding: 40 }}>
          Something went wrong. Please reload the page.
        </div>
      );
    }
    return this.props.children;
  }
}
