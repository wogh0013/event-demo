import React from 'react';

class Clock extends React.Component {
    constructor(props)
    {
        super(props); //젤 먼저 실행되어야 한다 
        this.state = { date:new Date() }
    }

    componentDidMount()
    {
        console.log("mount");
        this.timerID = setInterval( ()=> this.setState({date: new Date}), 1000 );
        //state 에 저장된 변수를 직접 바꾸면 시스템이 언제 변수가 바뀐건지 알수 없어서 반영을 못한다
        //그래서  setState라는 함수를 제공한다.  setState함수를 통해서  state변수의 값을 수정하면
        //변경된 값을 보고 화면을 다시 수정한다. (다시 랜더링한다)
    }

    componentWillUnmount(){
        console.log("unmount");
        clearInterval( this.timerID ); //이 컴포넌트 객체가 사라질때 이 함수가 호출된다. 
    }

    render(){
        return (
            <div>
                <h1 style={{'color':'red'}}>{this.state.date.toLocaleDateString()}
                                     {this.state.date.toLocaleTimeString()}</h1>
           </div>);
    };
};

export default Clock;