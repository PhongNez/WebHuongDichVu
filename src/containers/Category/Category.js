import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import { handleLoginApi, createNewUserTest } from '../../services/userService';

import axios from '../../axios'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            logo: '',
            isShowHidePassword: false,
            errMessage: ''
        }
    }

    async componentDidMount() {

    }
    handleOnChangeInput = (event, id) => {
        // this.setState({
        //     item: event.target.value
        // }, () => console.log(this.state.email))

        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => console.log('Check: ', this.state))
    }
    handleAddCategory = async () => {
        //Token admin
        // //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hY2NvdW50IjoxLCJlbWFpbCI6ImFkbWluLmZvb2RvcmRlckBnbWFpbC5jb20iLCJwaG9uZSI6IjAzMjEiLCJuYW1lIjoiS2ltIMSQ4bqhaSBQaG9uZyIsImNyZWF0ZWRfdGltZSI6IjIwMjItMDktMjFUMDU6MTI6MjYuMDAwWiIsImFkZHJlc3MiOiI1MiIsImF2YXRhciI6IicnIiwic3RhdHVzIjowLCJyb2xlIjoxLCJpYXQiOjE2NzY1Mzk4MTh9.LxoMY89ZgQjEYxGtRtcVwvxvcjlpQxSArMkhrS_X1Go'
        // let token = localStorage.getItem('user')
        // console.log('Token: ', token);
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // //let response = await handleGetAllUser('ALL');
        // //let response = await handleGetAllUserShop()
        // let response = await axios.post('http://localhost:8081/api/v1/admin/category', { name: this.state.name, logo: this.state.logo })
        // console.log(response);
    }

    render() {

        return (
            <>
                <div className='input-container'>
                    <label>Email</label>
                    <input type='text'
                        onChange={(event) => this.handleOnChangeInput(event, 'name')}
                        value={this.state.email}
                    ></input>
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input onChange={(event) => this.handleOnChangeInput(event, 'logo')}
                        value={this.state.password}></input>
                </div>
                <div><button onClick={() => this.handleAddCategory()}>Add</button></div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
