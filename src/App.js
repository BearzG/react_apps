import logo from './logo.svg';
import './App.css';
import react from 'react'

import { products } from './cont.json';


class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/')
    .then(data => data.json())
    .then(value => this.setState({'data': value}))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.data.map(curr => <h3>{curr.Name + ' ' + curr.Email}</h3>)
        }

        {products.map(actual => <h3>{actual.Milk}</h3>)}
      </div>
    );
  }
}

export default App;
