import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0
    }
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    //부모의 부모앱(App)컴포넌트의 삭제 함수 실행
    onRemove(info.id);
  };

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };
    const { name, phone } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>
          <b>{phone}</b>
        </div>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}
export default PhoneInfo;
