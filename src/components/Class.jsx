import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){

        setInterval(() => {
           this.tick() 
        }, 1000);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }
  render() {
    const {date} = this.state;
    return (
      <div>
        <p>Hi {this.props.name}</p>
        <h1>Local time is {date.toLocaleTimeString("bn-BD")}</h1>
      </div>
    )
  }
}
