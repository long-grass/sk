import React from 'react';
const classNames = require('classnames');

import { setResult, setAmount } from '../actions/currency';
import { connect } from 'react-redux';

class Chooser extends React.Component {
    constructor(props) {
      super(props);
      console.log(props)
      const { result, base, target, amount } = props
      this.state = {result}
  
      this.handleAmount = this.handleAmount.bind(this);
      this.handleTarget = this.handleTarget.bind(this);
      this.handleBase = this.handleBase.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleAmount(event) {
      this.setState({amount: event.target.value});
    }
    handleBase(event) {
    
        // console.log(this.props.rates.rates[])
        this.setState({base: event.target.value});
      }
      handleTarget(event) {
        this.setState({target: event.target.value});
      }
  
    handleSubmit(event) {
    
      event.preventDefault();
      this.props.setResult(this.state) 
    }
  
    render() {

      const style = {
        row:{marginBottom:'50px'}
      }
      return (
        this.props.rates.base ? 
        <form onSubmit={this.handleSubmit}>
        <div style={style.row}>
        <span>base</span>
        <select onChange={this.handleBase} className="ui selection dropdown">
        <option key="g">{this.props.rates.base}</option>
        {Object.entries(this.props.rates.rates).map(([k,v]) => <option key={k}>{k}</option>) }
      </select>
      </div>
      <div style={style.row}>
      <span>target</span>
      <select onChange={this.handleTarget} className="ui selection dropdown" >
      {Object.entries(this.props.rates.rates).map(([k,v]) => <option key={k}>{k}</option>) }
    </select>
   </div>
   <div style={style.row}>
   <span>amount</span>
          <label>
           
            <div className="ui input">
            <input placeholder="amount" type="text" value={this.state.value} onChange={this.handleAmount} />
          </div>
          </label>
          </div>
          <div style={style.row}>
          <input className="ui teal basic button" type="submit" value="Convert Amount" />
          </div>
        </form>
        : null
      );
    }
  }

 export default connect (null, {setResult, setAmount})(Chooser)