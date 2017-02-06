import * as React from 'react';

export interface IHomeProps { title: string; }

class Home extends React.Component<IHomeProps, {}> {
  render() {
    return (
      <div>Test</div>
    );
  }
}

export default Home;