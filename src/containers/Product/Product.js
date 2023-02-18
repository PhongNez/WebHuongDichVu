import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import { handleLoginApi, createNewUserTest } from '../../services/userService';

import axios from '../../axios'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            name: '',
            detail: '',
            price: '',
            images: '',
            id_category: ''
        }
    }

    async componentDidMount() {
        // let token = localStorage.getItem('user')
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // let res = await axios.get('http://localhost:8081/api/v1/admin/getcategory')
        // this.setState({
        //     arr: res.get
        // })
        // console.log(res.get);
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
    handleAddProduct = async () => {
        // let token = localStorage.getItem('user')
        // console.log('Token: ', token);
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // //let response = await handleGetAllUser('ALL');
        // //let response = await handleGetAllUserShop()
        // let response = await axios.post('http://localhost:8081/api/v1/admin/createNewProduct',
        //     { name: this.state.name, price: this.state.price, images: this.state.images, detail: this.state.detail, id_category: this.state.id_category })
        // console.log(response);
    }
    handleOnClick = (event) => {
        console.log('hello');
        this.setState({
            id_category: event.target.value
        })
    }

    render() {
        let arr = this.state.arr
        return (
            <>
                <div className='input-container'>
                    <label>Name</label>
                    <input type='text'
                        onChange={(event) => this.handleOnChangeInput(event, 'name')}
                        value={this.state.email}
                    ></input>
                </div>
                <div className='input-container'>
                    <label>Detail</label>
                    <input onChange={(event) => this.handleOnChangeInput(event, 'detail')}
                        value={this.state.password}></input>
                </div>
                <div className='input-container'>
                    <label>Price</label>
                    <input onChange={(event) => this.handleOnChangeInput(event, 'price')}
                        value={this.state.password}></input>
                </div>
                <div className='input-container'>
                    <label>Images</label>
                    <input onChange={(event) => this.handleOnChangeInput(event, 'images')}
                        value={this.state.password}></input>
                </div>
                <select onChange={(event) => this.handleOnChangeInput(event, 'id_category')}>
                    {

                        arr && arr.map((item, index) => {
                            return (<>

                                < option key={item.id} value={item.id_category}>{item.name} + {item.id_category} </option>
                            </>
                            )
                        })
                    }
                    {/* <input onChange={(event) => this.handleOnChangeInput(event, 'id_category')} value={item.id_category} hidden></input> */}
                </select>
                <div><button onClick={() => this.handleAddProduct()}>Add</button></div>
                {/* <select name="cars" id="cars">

                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select> */}
                <div>Phong hello</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
