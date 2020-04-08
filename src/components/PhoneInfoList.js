import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn("onRemove not defined")
  };

  render() {
    //부모컴퍼넌트에서 information,onRemove(handleRemove)를 받이와서
    //PhoneInfo에 넘긴다.
    const { data, onRemove } = this.props;
    const list = data.map(info => (
      <PhoneInfo key={info.id} info={info} onRemove={onRemove} />
    ));
    return <div>{list}</div>;
  }
}
export default PhoneInfoList;
