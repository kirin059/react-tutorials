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
        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone,
        })
    }

    render() {
        return (
            <div className="phoneform">
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