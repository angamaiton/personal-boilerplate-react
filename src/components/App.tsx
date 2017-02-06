import * as React from 'react';

export interface IAppProps { compiler: string; framework: string; context: any; children: any; }

class App extends React.Component<IAppProps, undefined>{
  getChildContext() {
    return this.props.context;
  }
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>;
  }
}

export default App;