import React, { Component } from 'react'

export default class ClickButton extends Component {
    state = {
        count: 0
    }
    handleButton = (e) =>{
        this.setState(
            {count : this.state.count + 1}
        )
    }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.handleButton}>Click</button>
      </div>
    )
  }
}
