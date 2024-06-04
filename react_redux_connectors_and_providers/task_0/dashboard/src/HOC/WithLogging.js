import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${this.displayName || WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.displayName || WrappedComponent.name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Set displayName for debugging purposes
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

export default WithLogging;