import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fact: 'Chuck Norris does not use github, github uses him to support developers.'
    };
    
    this.getFact = this.getFact.bind(this);
  }
  
  getFact() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
      this.setState({fact: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return (
      <div className="App">
       
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width= "70" src="application.svg"/>
              </td>
              <td>
              <h1 className='header'> ChuckNorris.io</h1>
              </td>
            </tr>
            </tbody> 
        </table>

          <h1 className='cat'>Chuck's Vibes</h1>
          
          <div className="vibes">
          <h1>{'"' + this.state.fact + '"'}</h1>
          
          <button type="button" className="btn btn-primary" onClick={this.getFact}> More Jokes
          </button>
      </div>
      </div>

      
    );
  }
}

export default App;
