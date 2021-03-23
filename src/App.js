import React, { Component } from "react";

import Counter from "./components/Counter";
import MyName from "./components/MyName";
import MyComponent from "./components/MyComponent";
import PhoneForm from "./components/PhoneForm";

import './App.css';

class App extends Component {
  state = {
    counter: 1,
    information: [],
  };

  // constructor(컴포넌트 초기설정)
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // ComponentDidMount(DOM 관련 작업, 외부 라이브러리 연동, 이벤트 등록 등)
  componentDidMount() {
    console.log("ComponentDidMount");
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };


  handleCreate = (data) => {
    this.setState({
      information: this.state.information.concat(data)
    })
  }

  render() {
    const nickname = "leedev";

    return (
      <div className="App">
        <Counter />

        <MyName name="breadLee" />
        <MyName />
        <div>
          I'm <b>{nickname}</b>
        </div>

        <MyComponent value={this.state.counter} />
        <button onClick={this.handleClick}>Click</button>

        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
