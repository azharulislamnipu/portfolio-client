import React, { Component } from 'react';
import CounterItem from './CounterItem';

export default class Counters extends Component {

  state = {
    data: [{
      counternumber: 490,
      type:"lins of code",
      icon:'faCoffee'
    
    },
    {
      counternumber: 545,
      type:"Cup of Tea",
      icon:'faCoffee'
    
    },
    {
      counternumber: 490,
      type:"lins of code",
      icon:'faCoffee'
    
    },
    {
      counternumber: 990,
      type:"lins of code",
      icon:'faCoffee'
    
    },
      
    ]
}




showCounterItem = () => (
  this.state.data.map((items,key) => (
      <CounterItem key={key} number={items.counternumber} type={items.type} icon={items.icon} />
  ))
)

 
  render() {

    return (
      <div className="counter-area">
        <div className="container">
          <div className="row align-items-center">
         
           {this.showCounterItem()}
          
          </div>
        </div>
      </div>
    )
  }
}
