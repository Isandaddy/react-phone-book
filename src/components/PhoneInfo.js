import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0
    }
  };
  //수정Update에서는 편집 전 후 상태가 필요하다.
  state = {
    //Update버튼이 눌렸을때 editing값을 true로 설정할필요가 있다.
    //값이 true일때 기존의 텍스트형태의 값을 input형태로 바꾸어준다.
    //초기값 false
    editing: false,
    //input값을 사용자입력값을 받기에 유동적. 값을 받기위해 각 필드준비
    name: "",
    phone: ""
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    //부모의 부모앱(App)컴포넌트의 삭제 함수 실행
    onRemove(info.id);
  };

  // editing 값을 반전시키는 함수입니다
  // true -> false, false -> true
  handelToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  //input에서 사용자 입력값이 들어왔을때 감지하는 함수
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      //여기 다시!!!!
      [name]: value
    });
  };

  //이 API는 컴포넌트에서 render() 를 호출하고난 다음에 발생하게 됩니다.
  //이 시점에선 this.props 와 this.state 가 바뀌어있습니다.
  //그리고 파라미터를 통해 이전의 값인 prevProps 와 prevState 를 조회 할 수 있습니다.
  componentDidUpdate(preProps, preState) {
    //console.log(preState);
    //console.log(this.state.editing);
    //state의 editing값이 바뀔때 처리 로직
    //Update눌렀을때 기존값이 input에 나타나고
    //input값들을 부모에게 전달
    const { info, onUpdate } = this.props;
    // editing 값이 false -> true 로 전환 될 때
    // info 의 값을 state 에 넣어준다
    if (!preState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }
    // editing 값이 true -> false 로 전환 될 때
    if (preState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps.info === this.props.info
    ) {
      return false;
    }
    // 나머지 경우엔 리렌더링함
    return true;
  }

  handleUpdate = () => {
    const { info, onUpdate } = this.props;

    //부모의 부모앱(App)컴포넌트의 삭제 함수 실행
    onUpdate(info.id);

    //Update가 되면 상태를 다시 변경하여 일반모드로 변경
    this.handelToggleEdit();
  };

  render() {
    console.log("render PhoneInfo " + this.props.info.id);
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };
    const { editing } = this.state;

    //수정 모드
    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="phone"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleUpdate}>Update</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }
    //일반모드

    const { name, phone } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>
          <b>{phone}</b>
        </div>
        <button onClick={this.handelToggleEdit}>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}
export default PhoneInfo;
