import React, { Component } from 'react';
import Line from './line'

class Multiple extends Component{
    constructor(){
        super()
        this.state={
            one:[],two:[],three:[],four:[],five:[],six:[],seven:[],eight:[],nine:[]
    
        }
        

    }

    change=(event)=>{
        
    }

    eachLine=(c)=>{
            
            return c
        
    }
    render(){
        return(<div >
            <Line digit1={this.state.one[0]} digit2={this.state.one[1]}digit3={this.state.one[2]}digit4={this.state.one[3]}digit5={this.state.one[4]}digit6={this.state.one[5]}digit7={this.state.one[6]}digit8={this.state.one[7]}digit9={this.state.one[8]}
                change={this.change}/>
            <Line digit1={this.state.two[0]} digit2={this.state.two[1]}digit3={this.state.two[2]}digit4={this.state.two[3]}digit5={this.state.two[4]}digit6={this.state.two[5]}digit7={this.state.two[6]}digit8={this.state.two[7]}digit9={this.state.two[8]}
                change={this.change} />

            <Line digit1={this.state.three[0]} digit2={this.state.three[1]}digit3={this.state.three[2]}digit4={this.state.three[3]}digit5={this.state.three[4]}digit6={this.state.three[5]}digit7={this.state.three[6]}digit8={this.state.three[7]}digit9={this.state.three[8]}
                change={this.change} />

            <Line digit1={this.state.four[0]} digit2={this.state.four[1]}digit3={this.state.four[2]}digit4={this.state.four[3]}digit5={this.state.four[4]}digit6={this.state.four[5]}digit7={this.state.four[6]}digit8={this.state.four[7]}digit9={this.state.four[8]}
                change={this.change} />

            <Line digit1={this.state.five[0]} digit2={this.state.five[1]}digit3={this.state.five[2]}digit4={this.state.five[3]}digit5={this.state.five[4]}digit6={this.state.five[5]}digit7={this.state.five[6]}digit8={this.state.five[7]}digit9={this.state.five[8]}
                change={this.change} />

            <Line digit1={this.state.six[0]} digit2={this.state.six[1]}digit3={this.state.six[2]}digit4={this.state.six[3]}digit5={this.state.six[4]}digit6={this.state.six[5]}digit7={this.state.six[6]}digit8={this.state.six[7]}digit9={this.state.six[8]}
                change={this.change} />

            <Line digit1={this.state.seven[0]} digit2={this.state.seven[1]}digit3={this.state.seven[2]}digit4={this.state.seven[3]}digit5={this.state.seven[4]}digit6={this.state.seven[5]}digit7={this.state.seven[6]}digit8={this.state.seven[7]}digit9={this.state.seven[8]}
                change={this.change} />

            <Line digit1={this.state.eight[0]} digit2={this.state.eight[1]}digit3={this.state.eight[2]}digit4={this.state.eight[3]}digit5={this.state.eight[4]}digit6={this.state.eight[5]}digit7={this.state.eight[6]}digit8={this.state.eight[7]}digit9={this.state.eight[8]}
                change={this.change} />

            <Line digit1={this.state.nine[0]} digit2={this.state.nine[1]}digit3={this.state.nine[2]}digit4={this.state.nine[3]}digit5={this.state.nine[4]}digit6={this.state.nine[5]}digit7={this.state.nine[6]}digit8={this.state.nine[7]}digit9={this.state.nine[8]}
                change={this.change} />

            </div>);
    }
}

export default Multiple;