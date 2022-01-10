import React from 'react';

class Counter extends React.Component{
    
    //함수를 생성자에서 등록과정을 거쳐야 한다.
    constructor(props)
    {
        super(props);
        this.state={"count":0}; //변수를 JSON객체 형태로 여기에

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    //onIncrease 변수에 화살표함수 저장
    onIncrease=()=>{
        this.setState({"count":this.state.count+1});
    }

    onDecrease=()=>{
        this.setState({"count":this.state.count-1});
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button type="button" onClick={this.onIncrease}>+</button> &nbsp;&nbsp;
                <button type="button" onClick={this.onDecrease}>-</button>
            </div>
        );
    };
};

export default Counter;