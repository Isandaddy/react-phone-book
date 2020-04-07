import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: ''
    }
    //onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있습니다. 
    //해당 값을 state 의 name 부분으로 설정
    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        //페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모(App.js)에게 전달
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}> 
                <input
                    placeholder='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    name='name'
                />
                <input
                    placeholder='phone'
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name='phone'
                />
                {/*<div>{this.state.name}=>{this.state.phone}</div>*/}
                <br/>
                <button type="submit">registe</button>
            </form>
        );
    }
}

export default PhoneForm;