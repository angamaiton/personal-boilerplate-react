import * as React from 'react';

export interface IAppProps { context: any;}

class App extends React.Component<IAppProps, undefined>{
  getChildContext() {
    return this.props.context;
  }
  render() {
    return <h1></h1>;
  }
}

export default App;