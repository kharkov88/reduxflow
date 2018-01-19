import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './createActions';
import { Calendar } from './components';
import { reciveData } from './reducer/selectors';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <div className="App"><img src={logo} className="App-logo" alt="logo" /></div>
        <Calendar data={this.props.data}/>
        <button onClick={this.increment.bind(this)}>click</button><span>{this.state.counter}</span>
      </div>
    );
  }
  increment() {
    this.setState({ counter: ++this.state.counter})
  }
}
const mapStateToProps = (state) => {
  return {
    //data: reciveData(state)()
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getData())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
