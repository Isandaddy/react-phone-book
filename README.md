This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### README를 노트로 ... 내가 볼라구

### 파편들

- 컴포넌트만들기
- props 부모 컴포넌트에서 속성으로 전달받는 값
- state 자기자신 컴포넌트의 속성(데이터)
- props,state가 바뀌면 리렌더링 render() 한다.
- LifeCycle API 를 통해서 컴포넌트 마운트, 업데이트, 언마운트 전후로 처리 할 로직을 설정하거나 리렌더링을 막아줄수(shouldComponentUpdate)도 있습니다.

- 리액트에서는 데이터의 직접 변경을 하면 안되므로 변경불가성(immutability)
  ・filter() 배열을 순회 하면서 각 요소에 대해 인자로 주어진 콜백함수의 결과값이 참인 것만 따로 새 배열로 만든다.
  ・indexOf() 인자로 지정된 요소를 배열에서 검색하여 그 인덱스를 반환한다.없으면 -1반환
- shouldComponetUpdate 빈번한 리렌더링으로 낭비되고있는 리소스를 줄이기위해 인자값을 상태 데이터를 비교해서 리렌더링을 방지할수있다.

### ref 감사

https://velopert.com

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
