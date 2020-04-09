import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 2;
  state = {
    information: [
      //id값은 각 데이터를 식별하기 위함
      {
        id: 0,
        name: "김민준",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "홍길동",
        phone: "010-0000-0001"
      }
    ],
    keyword: ""
  };

  //input에서 감지한 값을 keyword에 넣어줌
  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  //자식 클래스(PhoneForm)에서 onCreate의 속성명의 props로 넘기고... handleSubmit()로 인자값 전달 받는다
  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info =>
          id === info.id
            ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info // 기존의 값을 그대로 유지
      )
    });
  };

  render() {
    const { information, keyword } = this.state;
    //information객체를 filter로 순회 하면서 각 객체의 name값을 검색어에서 찾아서 있으면 새로운
    //객체로 만들고 filteredList에 대입
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {/*JSON.stringify( )는 자바스크립트의 값을 JSON 문자열로 변환한다.*/}
        {/*JSON.stringify(information)*/}
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            value={keyword}
            onChange={this.handleChange}
          />
        </p>
        <hr />
        <PhoneInfoList
          //필터링된 데이터가 들어감
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
