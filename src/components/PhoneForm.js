import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: " ",
        phone: " ",
    }

    handleChange = (e) => {
        //console.log(e.target)
        this.setState({
            // name: e.target.value  >> name 대신, e.target.name을 써주면 input의  name값에 따라 다른 value가 적용된다
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // App.js에서 만들어준 onCreate함수를 props로 받아온다
        this.props.onCreate(this.state);
        // this.props.onCreate({
        //     name: this.state.name,
        //     phone: this.state.phone,
        // })

        // 입력한 후 input안의 값은 초기화 하기
        this.setState({
            name: '',
            phone: '',

        })
    }

    render() {
        return (
            <div className="phoneform">
                {/* form에 onSubmit함수를 추가 해주면, 전송 버튼을 클릭할 때 함수를 호출하라는 뜻  */}
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <input
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                    <button type="submit">등록</button>
                </form>

                <div>
                    {this.state.name}
                    {this.state.phone}
                </div>
            </div>

        );
    }
}

export default PhoneForm;