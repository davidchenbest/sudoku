import React, { Component } from 'react';
import Line from './line'
import './css/multiple.css'

class Multiple extends Component{
    constructor(){
        super()
        this.state={
            one:[3,6,,9,4,,7,1,2],two:[4,8,2,,1,3,5,,6],three:[,7,1,5,2,,4,3,8],four:[6,4,7,,3,9,1,2,5],five:[5,2,3,6,7,1,8,4,9],
            six:[8,1,,2,5,4,,6,7],seven:[7,,4,,6,5,,8,3],eight:[2,,8,4,,7,6,5,1],nine:[1,5,,3,8,,9,7,4],
            column: true, row: true
    
        }
    }

    submit=()=>{
        for(let i=0; i<9; i++){
            if(this.state.one[i] =="" || this.state.one.length != 9 || (new Set(this.state.one).size) != 9) {alert('not valid'); return;}
            if(this.state.two[i] =="" || this.state.two.length != 9 || (new Set(this.state.two).size) != 9) {alert('not valid'); return;}
            if(this.state.three[i] =="" || this.state.three.length != 9 || (new Set(this.state.three).size) != 9) {alert('not valid'); return;}
            if(this.state.four[i] =="" || this.state.four.length != 9 || (new Set(this.state.four).size) != 9) {alert('not valid'); return;}
            if(this.state.five[i] =="" || this.state.five.length != 9 || (new Set(this.state.five).size) != 9) {alert('not valid'); return;}
            if(this.state.six[i] =="" || this.state.six.length != 9 || (new Set(this.state.six).size) != 9) {alert('not valid'); return;}
            if(this.state.seven[i] =="" || this.state.seven.length != 9 || (new Set(this.state.seven).size) != 9) {alert('not valid'); return;}
            if(this.state.eight[i] =="" || this.state.eight.length != 9 || (new Set(this.state.eight).size) != 9) {alert('not valid'); return;}
            if(this.state.nine[i] =="" || this.state.nine.length != 9 || (new Set(this.state.nine).size) != 9) {alert('not valid'); return;}
        }

        let arr=[];
        for(let i=0; i<9; i++){
            arr.push(this.state.one[i]);
            arr.push(this.state.two[i]);
            arr.push(this.state.three[i]);
            arr.push(this.state.four[i]);
            arr.push(this.state.five[i]);
            arr.push(this.state.six[i]);
            arr.push(this.state.seven[i]);
            arr.push(this.state.eight[i]);
            arr.push(this.state.nine[i]);
            if((new Set(arr)).size != 9){alert('Error: column ' + ++i); return;}
            arr=[];
        }
            let arr2=[];
            let arr3=[];
        for(let i=0; i<9; i++){
            arr.push(this.state.one[i]);
            arr.push(this.state.two[i]);
            arr.push(this.state.three[i]);
            if(i==2 || i==5 || i==8){
                if((new Set(arr)).size != 9){alert('Error: box'); return;}
                arr=[];
            }
            arr2.push(this.state.four[i]);
            arr2.push(this.state.five[i]);
            arr2.push(this.state.six[i]);
            if(i==2 || i==5 || i==8){
                if((new Set(arr2)).size != 9){alert('Error: box'); return;}
                arr2=[];
            }
            arr3.push(this.state.seven[i]);
            arr3.push(this.state.eight[i]);
            arr3.push(this.state.nine[i]);
            if(i==2 || i==5 || i==8){
                if((new Set(arr3)).size != 9){alert('Error: box'); return;}
                arr3=[];
            }
            
        }
        alert('Correct!')
        
    }

    checkRow(arr, value){
        if (value> 0){
            for (let i=0; i<arr.length; i++){
                if(value == arr[i]) return false;
            }
        }
        return true;
    }
    checkColumn(column, value){
        let counter=0;
        if(value>0){
            if(this.state.one[column-1] == value) counter++;
            if(this.state.two[column-1] == value) counter++;
            if(this.state.three[column-1] == value) counter++;
            if(this.state.four[column-1] == value) counter++;
            if(this.state.five[column-1] == value) counter++;
            if(this.state.six[column-1] == value) counter++;
            if(this.state.seven[column-1] == value) counter++;
            if(this.state.eight[column-1] == value) counter++;
            if(this.state.nine[column-1] == value) counter++;
        }
        if(counter >1)return false;
        return true;

    }

    checkBox=(row,column, value)=>{
        let counter =0;
        let i;
        let len;
        if(value > 0){
            if(column<4)i=0;
        else if(column<7)i=3;
        else i=6;
        len=i+3;

        if(row<4){
            for(i; i<len; i++){
                if(this.state.one[i]==value) counter++;
                if(this.state.two[i]==value) counter++;
                if(this.state.three[i]==value) counter++;
            }
        }
        else if(row<7){
            for(i; i<len; i++){
                if(this.state.four[i]==value) counter++;
                if(this.state.five[i]==value) counter++;
                if(this.state.six[i]==value) counter++;
            }
        }
        else{
            for(i; i<len; i++){
                if(this.state.seven[i]==value) counter++;
                if(this.state.eight[i]==value) counter++;
                if(this.state.nine[i]==value) counter++;
            }
        }
        }

        if(counter >1)return false;
        return true;
    }

    change1=(t,n)=>{
        let error =[]
        let arr = this.state.one;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({one: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(1, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change2=(t,n)=>{
        let error =[]
        let arr = this.state.two;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({two: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(3, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change3=(t,n)=>{
        let error =[]
        let arr = this.state.three;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({three: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(3, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change4=(t,n)=>{
        let error =[]
        let arr = this.state.four;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({four: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(4, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change5=(t,n)=>{
        let error =[]
        let arr = this.state.five;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({five: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(5, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change6=(t,n)=>{
        let error =[]
        let arr = this.state.six;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({six: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(6, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change7=(t,n)=>{
        let error =[]
        let arr = this.state.seven;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({seven: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(7, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change8=(t,n)=>{
        let error =[]
        let arr = this.state.eight;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({eight: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(8, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }
    change9=(t,n)=>{
        let error =[]
        let arr = this.state.nine;
        if(!this.checkRow(arr,t.target.value)) error.push('Row error');
        arr[n-1]= parseInt(t.target.value);
        this.setState({nine: arr});
        if(!this.checkColumn(n,t.target.value)) error.push('Column error');
        if(!this.checkBox(9, n, t.target.value)) error.push('Box error');
        if(error.length > 0)alert(error.join(" "))
    }

    
    
    render(){
        return(<div id='container' ><div id='puzzle'>
            <Line digit1={this.state.one[0]} digit2={this.state.one[1]}digit3={this.state.one[2]}digit4={this.state.one[3]}digit5={this.state.one[4]}digit6={this.state.one[5]}digit7={this.state.one[6]}digit8={this.state.one[7]}digit9={this.state.one[8]}
                change={this.change1}/>
            <Line digit1={this.state.two[0]} digit2={this.state.two[1]}digit3={this.state.two[2]}digit4={this.state.two[3]}digit5={this.state.two[4]}digit6={this.state.two[5]}digit7={this.state.two[6]}digit8={this.state.two[7]}digit9={this.state.two[8]}
                change={this.change2} />

            <Line digit1={this.state.three[0]} digit2={this.state.three[1]}digit3={this.state.three[2]}digit4={this.state.three[3]}digit5={this.state.three[4]}digit6={this.state.three[5]}digit7={this.state.three[6]}digit8={this.state.three[7]}digit9={this.state.three[8]}
                change={this.change3} />

            <div id='row'></div>

            <Line digit1={this.state.four[0]} digit2={this.state.four[1]}digit3={this.state.four[2]}digit4={this.state.four[3]}digit5={this.state.four[4]}digit6={this.state.four[5]}digit7={this.state.four[6]}digit8={this.state.four[7]}digit9={this.state.four[8]}
                change={this.change4} />

            <Line digit1={this.state.five[0]} digit2={this.state.five[1]}digit3={this.state.five[2]}digit4={this.state.five[3]}digit5={this.state.five[4]}digit6={this.state.five[5]}digit7={this.state.five[6]}digit8={this.state.five[7]}digit9={this.state.five[8]}
                change={this.change5} />

            <Line digit1={this.state.six[0]} digit2={this.state.six[1]}digit3={this.state.six[2]}digit4={this.state.six[3]}digit5={this.state.six[4]}digit6={this.state.six[5]}digit7={this.state.six[6]}digit8={this.state.six[7]}digit9={this.state.six[8]}
                change={this.change6} />

            <div id='row'></div>

            <Line digit1={this.state.seven[0]} digit2={this.state.seven[1]}digit3={this.state.seven[2]}digit4={this.state.seven[3]}digit5={this.state.seven[4]}digit6={this.state.seven[5]}digit7={this.state.seven[6]}digit8={this.state.seven[7]}digit9={this.state.seven[8]}
                change={this.change7} />

            <Line digit1={this.state.eight[0]} digit2={this.state.eight[1]}digit3={this.state.eight[2]}digit4={this.state.eight[3]}digit5={this.state.eight[4]}digit6={this.state.eight[5]}digit7={this.state.eight[6]}digit8={this.state.eight[7]}digit9={this.state.eight[8]}
                change={this.change8} />

            <Line digit1={this.state.nine[0]} digit2={this.state.nine[1]}digit3={this.state.nine[2]}digit4={this.state.nine[3]}digit5={this.state.nine[4]}digit6={this.state.nine[5]}digit7={this.state.nine[6]}digit8={this.state.nine[7]}digit9={this.state.nine[8]}
                change={this.change9} />
            <button id='submit' onClick={this.submit}>Check</button>
            </div>

            </div>);
    }
}

export default Multiple;