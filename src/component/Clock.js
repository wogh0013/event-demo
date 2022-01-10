import React from 'react';

class Clock extends React.component{
    constructor(props)
    {
        super(props); //제일 먼저 실행돼야 한다.
        this.state = {date:new Date()}
    }

    componentDidMount()
    {
        console.log("mount");
        this.timerID = setInterval(()=>this.setState({date: new Date}), 1000);
        //state에 저장된 변수를 직접 바꾸면 시스템이 언제 변수가 바뀐 건지 알 수 없어서 반영을 못한다.
        //그래서 setState라는 함수를 제공한다. setState함수를 통해서 state변수의 값을 수정하면
        //변경된 값을 보고 화면을 다시 수정한다. (다시 렌더링한다.)
    }

    componentWillUnMount(){
        console.log("unmount");
        clearInterval(this.timerID); //이 컴포넌트 객체가 사라질 때 이 함수가 호출된다.
    }

    render(){
        return(
            <div>
                <h1 style="color:red">{this.state.date.toLocaleDateString()}</h1>
            </div>
        );
    };
};

export default Clock;