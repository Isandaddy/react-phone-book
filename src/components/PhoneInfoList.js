import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined")
  };
  //그냥 단순히 다음 받아올 data 가 현재 data 랑 다른 배열일 때 true 로 설정
  shouldComponentUpdate(nextProps, nextState) {
    //그러면 이제 변화가 필요하지 않을 때는 render 함수가 호출되지 않게 됩니다.
    //우리는 shouldComponentUpdate 로직을 굉장히 간단하게 작성해주었는데 어떻게 이런게 가능 한 것일까요?
    return nextProps.data !== this.props.data;
  }

  render() {
    //부모컴퍼넌트에서 information,onRemove(handleRemove),onUpdate(handleUpdate)를 받이와서
    //PhoneInfo에 넘긴다.
    console.log("render PhoneInfoList");
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(info => (
      <PhoneInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));
    return <div>{list}</div>;
  }
}
export default PhoneInfoList;
