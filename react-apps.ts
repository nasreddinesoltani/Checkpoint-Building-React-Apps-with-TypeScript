//Code 01: Greeting Component
import React from 'react';  

// Define an interface for the props  
interface GreetingProps {  
  name: string; // Prop name should be a string  
}  

// Convert the functional component to TypeScript  
const Greeting: React.FC<GreetingProps> = ({ name }) => {  
  return <div>Hello, {name}!</div>; // Using the prop in JSX  
};  

export default Greeting;

//Code 02: Counter Component
import React, { Component } from 'react';  

// Define an interface for the state  
interface CounterState {  
  count: number; // State count should be a number  
}  

// Convert the class component to TypeScript  
class Counter extends Component<{}, CounterState> {  
  state: CounterState = {   
    count: 0   
  };  

  increment = () => {  
    this.setState({ count: this.state.count + 1 }); // Incrementing count  
  };  

  render() {  
    return (  
      <div>  
        <p>Count: {this.state.count}</p> // Displaying current count  
        <button onClick={this.increment}>Increment</button> // Button to increment count  
      </div>  
    );  
  }  
}  

export default Counter;

//