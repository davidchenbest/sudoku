import React, { Component } from 'react';
import Box from './box'
import './css/line.css'

class Line extends Component{
    
    change1=(event)=>{
        this.props.change(event, 1);
    }  
    change2=(event)=>{
        this.props.change(event, 2);
    }  
    change3=(event)=>{
        this.props.change(event, 3);
    }  
    change4=(event)=>{
        this.props.change(event, 4);
    }  
    change5=(event)=>{
        this.props.change(event, 5);
    }  
    change6=(event)=>{
        this.props.change(event, 6);
    }  
    change7=(event)=>{
        this.props.change(event, 7);
    }  
    change8=(event)=>{
        this.props.change(event, 8);
    }  
    change9=(event)=>{
        this.props.change(event, 9);
    }    
    
    render(){
        return(<div id='line'>
            <Box box='1' change={this.change1} >{this.props.digit1}</Box>
            <Box ref='two' change={this.change2} >{this.props.digit2}</Box>
            <Box box='3' change={this.change3} >{this.props.digit3}</Box>
            <div id='column'></div>
            <Box box='4' change={this.change4} >{this.props.digit4}</Box>
            <Box box='5' change={this.change5} >{this.props.digit5}</Box>
            <Box box='6' change={this.change6} >{this.props.digit6}</Box>
            <div id='column'></div>
            <Box box='7' change={this.change7} >{this.props.digit7}</Box>
            <Box box='8' change={this.change8} >{this.props.digit8}</Box>
            <Box box='9' change={this.change9} >{this.props.digit9}</Box>
            </div>);
    }
}

export default Line;

