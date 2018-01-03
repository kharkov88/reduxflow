import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './createActions';
import { Calendar } from './components';
import { reciveData } from './reducer/selectors';

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
        <Calendar data={this.props.data}/>
        <button onClick={this.increment.bind(this)}>click</button>
      </div>
    );
  }
  increment() {
    this.setState({ counter: ++this.state.counter})
  }
}
const mapStateToProps = (state) => {
  return {
    data: reciveData(state)()
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
