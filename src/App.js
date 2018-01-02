import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './createActions';
import {Calendar} from './components';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <Calendar data={this.props.data}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
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
