import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi, createNewUserTest } from '../../services/userService';

import axios from '../../axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowHidePassword: false,
            errMessage: ''
        }
    }

    async componentDidMount() {
        // let res = await axios.get('http://localhost:8081/api/v1/product')
        // console.log(res.data.dataProduct);
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value);
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleOnClickLogin = async () => {
        this.props.userLoginSuccess('helo')
        //alert('Hello');
        // this.setState({
        //     errMessage: ''
        // })
        // console.log('Username: ', this.state.username, 'Password: ', this.state.password);
        // console.log('all state: ', this.state);
        // try {
        //     let data = await createNewUserTest(this.state.username, this.state.password)
        //     console.log('hello', data);
        //     if (data && data.error !== 0) {
        //         this.setState({
        //             errMessage: data.message
        //         })
        //     }
        //     if (data && data.error === 0) {
        //         this.props.userLoginSuccess(data.userData)
        //         localStorage.setItem('user', data.userData)
        //         console.log('login success');
        //     }
        // } catch (e) {
        //     console.log('Loi ne: ', e.response);
        //     if (e.response) {
        //         if (e.response.data) {
        //             this.setState({
        //                 errMessage: e.response.data.message
        //             })
        //         }
        //     }
        // }

    }

    handleShowHidePassword = () => {
        // alert('Hello')
        this.setState({
            isShowHidePassword: !this.state.isShowHidePassword,
        })
    }
    render() {

        return (
            <div className='login-backgound'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>
                            Login
                        </div>
                        <div className='col-12 form-group input-login'>
                            <label>Username</label>
                            <input type='text' className='form-control'
                                value={this.state.username} onChange={(event) => this.handleOnChangeUsername(event)} placeholder='Enter your username'></input>
                        </div>
                        <div className='col-12 form-group input-login'>
                            <label>Password</label>
                            <div className='div-input-eye'>
                                <input type={this.state.isShowHidePassword ? 'password' : 'text'} className='form-control'
                                    value={this.state.password} onChange={(event) => this.handleOnChangePassword(event)} placeholder='Enter your password'></input>
                                <span onClick={() => this.handleShowHidePassword()}><i className={this.state.isShowHidePassword ? "fas fa-eye-slash eye" : "fas fa-eye eye"}></i></span>

                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 login'>
                            <button className='btn-login' onClick={this.handleOnClickLogin}>Log in</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 or-sign'>
                            <span >Or sign in with:</span>
                        </div>
                        <div className='col-12 social-login'>

                            <i className="fab fa-facebook-f facebook"></i>
                            <i className="fab fa-twitter twitter"></i>
                            <i className="fab fa-google-plus-g google"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
