import react from "react";
import App from "../App";

class Calculator extends react.Component{

    constructor(props)
    {
        super(props);
        this.state = {x:0, y:0, result:0}; //변수를 JSON객체 형태로 여기에
    }

    onAdd = ()=>{
        //이벤트가 발생된 객체 정보가
        this.setState({"result":parseInt(this.state.x) + parseInt(this.state.y)});
        }

    onSub = ()=>{
        this.setState({"result":parseInt(this.state.x) - parseInt(this.state.y)});
    }

    onMul = ()=>{
        this.setState({"result":parseInt(this.state.x) * parseInt(this.state.y)});
    }

    onDiv = ()=>{
        this.setState({"result":parseInt(this.state.x) / parseInt(this.state.y)});
    }

    onChangeX = (e)=>{
        this.setState({x:e.target.value});
    }
    
    onChangeY = (e)=>{
        this.setState({y:e.target.value});
    }

    render(){
        return(
            <div>
                x : <input type="text" onChange={this.onChangeX} value={this.state.x} />
                y : <input type="text" onCahnge={this.onChangeY} value={this.state.y} />
                result : <span>{this.state.result}</span> <br/>

                <button type="button" onClick={this.onAdd}>+</button> &nbsp;&nbsp;
                <button type="button" onClick={this.onSub}>-</button> &nbsp;&nbsp;
                <button type="button" onClick={this.onMul}>*</button> &nbsp;&nbsp;
                <button type="button" onClick={this.onDiv}>/</button> &nbsp;&nbsp;
            </div>
        );
    };
};

export default Calculator;