import React, { Component } from 'react';
import './css/box.css'

class Box extends Component{
    state={edit:false}

    edit=()=>{
        if(this.state.edit){
           this.setState({edit:false}) 
        }
        this.setState({edit:true}) 
        
    }
    checkNumber=(event)=>{
        let num =parseInt(event.target.value)
        if(num >= 10 || num<=0 ){
            
            alert('wrong input');
            event.target.value='';
        }

        
    }

    renderEdit(){
        return(<input  onKeyUp={this.checkNumber} box="{this.props.box}" id='box' className='editing' defaultValue={this.props.children} onChange={this.props.change}/>);
    }
    renderNormal(){
        return(<h1 box={this.props.box} id='box' onClick={this.edit}>{this.props.children}</h1>);
    }

    render(){
        if(this.state.edit){
            return this.renderEdit();
        }
        return this.renderNormal();
        
    }
}

export default Box;