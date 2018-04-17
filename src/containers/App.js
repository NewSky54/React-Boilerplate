import React, { Component } from 'react';
import Child from '../components/child'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
     <div>
       <Child />
     </div>
   );
  }
}
export default App;