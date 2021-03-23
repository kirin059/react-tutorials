import React, { Component } from "react";

class MyName extends Component {
    // default값 설정
    static defaultProps = {
        name: "기본이름"
    };

    render() {
        return (
            <div className="myname">
                안녕하세요. 제 이름은 <strong>{this.props.name}</strong> 입니다.
            </div>
        );
    }
}

export default MyName;
