import React, { Component } from 'react';
import Box from './box'
import './css/line.css'

class Line extends Component{
    
    change=(n)=>{
        console.log(this.refs.one.value)
        //this.props.change(num);
    }    
    
    render(){
        return(<div id='line'>
            <Box ref='one' change={()=>this.change({num:1})} >{this.props.digit1}</Box>
            <Box ref='two' change={this.props.change} >{this.props.digit2}</Box>
            <Box box='3' change={this.props.change} >{this.props.digit3}</Box>
            <Box box='4' change={this.props.change} >{this.props.digit4}</Box>
            <Box box='5' change={this.props.change} >{this.props.digit5}</Box>
            <Box box='6' change={this.props.change} >{this.props.digit6}</Box>
            <Box box='7' change={this.props.change} >{this.props.digit7}</Box>
            <Box box='8' change={this.props.change} >{this.props.digit8}</Box>
            <Box box='9' change={this.props.change} >{this.props.digit9}</Box>
            </div>);
    }
}

export default Line;

