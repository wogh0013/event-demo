import React from 'react';
import PropTypes from 'prop-types';

//클래스 컴포넌트 -> 함수 컴포넌트로 바뀌었다.
class ShoppingList extends React.Component{
    //값을 유지하기 위해서 state 객체를 사용한다
    constructor(props) //생성자를 자바스크립트에서는 constructor
    {                  //react에서는 부모로부터 props를 받아야 한다
        super(props);  //부모생성자 호출 - 맨 처음 와야 함.
        //이 공간에 공통으로 사용하고자 하는 데이터를 저장해야 한다.
        //JSON 객체로 저장해야 한다.
        this.state = {
            date:new Date()
        }
        
    }
    render(){
        return(
            <div>
                <h1>쇼핑목록 {this.props.name} {this.props.address}</h1>
                <ul>
                    <li>인스타그램</li>
                    <li>페이스북</li>
                    <li>구글</li>
                </ul>
                <p>{this.state.date.toLocaleDateString()}</p>
            </div>
        );
    };
};

export default ShoppingList;