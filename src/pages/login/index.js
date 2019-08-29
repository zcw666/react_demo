import React, { Component } from "react";
import "./index.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.state = {
            text: "注册",
            getCodeText: "获取验证码",
            phoneNumber: "",
            code: ""
        };
    }
    render() {
        return (
            <div className="login">
                <div className="content">
                    <div className="title">知乎</div>
                    <div className="text">
                        {this.state.text}知乎，发现更多可信赖的解答
                    </div>
                    <div className="phone">
                        <div className="phone-title">手机号：</div>
                        <input
                            className="phone-num"
                            value={this.state.phoneNumber}
                            onChange={this.getPhone.bind(this)}
                        />
                    </div>
                    <div className="code">
                        <input
                            className="phone-code"
                            value={this.state.code}
                            onChange={this.chongeCode.bind(this)}
                        />
                        <div
                            className="get-code"
                            onClick={this.getCode.bind(this)}
                        >
                            {this.state.getCodeText}
                        </div>
                    </div>
                    <div className="register-button" onClick={this.register}>
                        注册
                    </div>
                </div>
            </div>
        );
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    register() {}
    getPhone(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    }
    chongeCode(e) {
        this.setState({
            code: e.target.value
        });
    }
    getCode() {
        this.setState({
            getCodeText: "60秒后可重发"
        });
        let num = 60;
        const set = setInterval(() => {
            console.log("获取验证码1");
            num--;

            this.setState({
                getCodeText: num + "秒后可重发"
            });
            if (num <= 0) {
                clearInterval(set);
                this.setState({
                    getCodeText: "重新获取验证码"
                });
            }
        }, 1000);
    }
}

export default Login;
