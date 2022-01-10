import react from "react";
import App from "../App";

class Input extends react.Component{

    constructor(props)
    {
        super(props);
        //컨트롤에서 사용하는
        this.state = {"name":"홍길동", "address":"인천시 남동구", "phone":"010-0000-0000"}    
    }

    onChangeName = (e)=>{
        //이벤트가 발생된 객체 정보가
        this.setState({"name":e.target.value}); //state필드의 name 속성을 변경한다.
        }
    onChangeAddress = (e)=>{
        this.setState({"address":e.target.value}); //state필드의 address 속성을 변경한다.
        }

    onChangePhone = (e)=>{
        this.setState({"phone":e.targete.value}); //state필드의 phone 속성을 변경한다.
        }
    
    confirm=()=>{
        console.log(this.state.name);
        console.log(this.state.address);
        console.log(this.state.phone);
    }

    render(){
        return(
            <div>
                이름 : <input type="text" onChange={this.onChangeName} value={this.state.name}/> <br/>
                주소 : <input type="text" onChange={this.onChangeAddress} value={this.state.address}/> <br/>
                전화 : <input type="text" onChange={this.onChangePhone} value={this.state.phone}/> <br/>
                <button type="button" onClick={this.confirm}>확인</button>
            </div>
        );
    };
};

export default Input;