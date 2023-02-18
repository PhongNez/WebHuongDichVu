import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UserManage } from './UserManage'
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            firstName: '',
            lastName: '',
            image: '',

            avatar: {
                selectedFile: null,
            }

        }
    }

    fileSelectedHandle = (event) => {
        this.setState({
            avatar: {
                ...this.state.avatar.selectedFile,
                selectedFile: event.target.files[0]
            }
        })

        const file = event.target.files[0]
        file.preview = URL.createObjectURL(file)
        this.setState({
            image: file.preview
        })
    }

    async componentDidMount() {

    }

    toggle = () => {
        this.props.toggleFromParent();
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

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'firstName', 'lastName', 'address', 'password']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing required: ' + arrInput[i])
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = async () => {
        //alert('Lưu Thành Công')
        let check = this.checkValidateInput();
        console.log(check);
        const { email, password, firstName, lastName } = this.state
        const { selectedFile } = this.state.avatar

        const fd = new FormData()
        fd.append('email', email)
        fd.append('password', password)
        fd.append('firstName', firstName)
        fd.append('lastName', lastName)
        fd.append('image', selectedFile, selectedFile.name)

        if (check === true) {
            let response = await this.props.createNewUser(fd)
            console.log(response);
        }
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.isOpen);
        return (
            <div>
                <Modal isOpen={this.props.openCloseModal}
                    toggle={() => { this.toggle() }}
                    className={'modal-add-new-user'}
                    size='lg'
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Create new user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email</label>
                                <input type='text'
                                    onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                    value={this.state.email}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Password</label>
                                <input type='password' onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                    value={this.state.password}></input>
                            </div>
                            <div className='input-container'>
                                <label >First Name</label>
                                <input type='text' onChange={(event) => this.handleOnChangeInput(event, 'firstName')}
                                    value={this.state.firstName}></input>
                            </div>
                            <div className='input-container'>
                                <label>Last Name</label>
                                <input type='text' onChange={(event) => this.handleOnChangeInput(event, 'lastName')}
                                    value={this.state.lastName}></input>
                            </div>
                            <div className='input-container max-width-modal'>
                                <label >Address</label>
                                <input type='text' onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                    value={this.state.address}></input>
                            </div>
                            <div className='input-container'>
                                <label >Image</label>
                                <input type='file' name='profile' onChange={(event) => this.fileSelectedHandle(event)}></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => this.handleAddNewUser()}>Save change</Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => this.toggle()}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);









