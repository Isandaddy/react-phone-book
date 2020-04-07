import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {
    id = 2;
    state = {
        information : [
            //id값은 각 데이터를 식별하기 위함
            {
                id: 0,
                name: '김민준',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '홍길동',
                phone: '010-0000-0001'
            }
        ]
    }
    //자식 클래스(PhoneForm)에서 onCreate의 속성명의 props로 넘기고... handleSubmit()로 인자값 전달 받는다
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        })
    }

    render(){
        const { information } = this.state;
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                {/*JSON.stringify( )는 자바스크립트의 값을 JSON 문자열로 변환한다.*/}
                {JSON.stringify(information)}
            </div>
        );
    }
}

export default App;