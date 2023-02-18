import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { handleGetAllUser, createNewUser, handleGetAllUserShop } from '../../services/userService'
import axios from 'axios';
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false,
            arrUser: [],
        }
    }

    async componentDidMount() {
        this.getAllUser();
    }

    getAllUser = async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hY2NvdW50IjoxLCJlbWFpbCI6ImFkbWluLmZvb2RvcmRlckBnbWFpbC5jb20iLCJwaG9uZSI6IjAzMjEiLCJuYW1lIjoiS2ltIMSQ4bqhaSBQaG9uZyIsImNyZWF0ZWRfdGltZSI6IjIwMjItMDktMjFUMDU6MTI6MjYuMDAwWiIsImFkZHJlc3MiOiI1MiIsImF2YXRhciI6IicnIiwic3RhdHVzIjowLCJyb2xlIjoxLCJpYXQiOjE2NzY1MzE0MzV9.Ngwuj6tqRhjZngTiHdgi5HWyHAyyd5_thccp28m-slg'
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //let response = await handleGetAllUser('ALL');
        //let response = await handleGetAllUserShop()
        let response = await axios.get('http://localhost:8081/api/v1/admin/account')
        console.log(response);
        console.log("Check array user: ", response.data);
        this.setState({
            arrUser: response.data
        })
    }

    toggleFromParent = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        })
    }

    handleOnClickAddNewUser = () => {
        this.toggleFromParent();
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUser(data)
            //console.log(response);
            if (response && response.errCode === 0) {
                await this.getAllUser()
            }
            else {
                alert('Missing required: ' + response.errMessage)
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUser = this.state.arrUser
        return (<>
            <ModalUser
                openCloseModal={this.state.isOpenModal}
                toggleFromParent={() => this.toggleFromParent()}
                createNewUser={(data) => this.createNewUser(data)}
            />
            <div className="title text-center">DANH SÁCH USER 2</div>
            <button className='btn-add-new-user mx-2 px-2 py-2' onClick={() => this.handleOnClickAddNewUser()}><i className="fas fa-plus"></i>Thêm mới người dùng</button>
            <div className='table-user mt-2 mx-2'>
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Avatar</th>
                            <th>Họ tên</th>
                            <th>số điện thoại</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>

                        </tr>
                        {

                            arrUser && arrUser.map((item, index) => {
                                return (
                                    <tr>

                                        <td><img src={item.image} alt="" height={50} width={50} /></td>

                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>

                                        <td>
                                            <button className='btn-edit'><i className="fas fa-pencil-alt"></i> </button>
                                            <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
