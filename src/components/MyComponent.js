import React, { Component } from "react";

class MyComponent extends Component {
    state = {
        value: 0
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 특정 조건에 따라 렌더링을 막아준다(10은 출력이 안된다)
        if (nextProps.value === 10) return false;
        return true;
    }

    render() {
        return (
            <div>
                <p> props: {this.props.value} </p>
                <p> state: {this.state.value} </p>
            </div>
        );
    }
}

export default MyComponent;
