import React from 'react';
import DogsHome from './components/DogsHome';
import DogInfo from './components/DogInfo';
import NotFound from './components/common/NotFound';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = {
    dogs: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:3002/api/dogs')
      .then(res => {
        this.setState({ dogs: res.data });
      });
  };

  render() {

    return (
      <main role="main" className="container">
        <h2 className="mt-5 mb-5">Who let the dogs out?</h2>
        <Switch>
          <Route exact path='/dog-info/:id' render={props =>
            <DogInfo {...props} />} >
          </Route>
          <Route exact path='/dogs-home' render={props =>
            <DogsHome dogs={this.state.dogs} {...props} />} />
          <Redirect exact from='/' to='dogs-home' />
          <Route path='*' component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
