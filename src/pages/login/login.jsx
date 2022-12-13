import React, {Component} from 'react';
import axios from "axios";
import { Form, Input, Button, Checkbox, message,Modal} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import cookie from 'react-cookies'
import './login.css'
import {Link} from "react-router-dom";
import 'antd/dist/reset.css';

class Login extends Component {
    //防止修改url访问
    componentWillMount () {
        const username = cookie.load('username');
        const change = cookie.load('successalter');
        if (username !== undefined) window.location.href = '/index';
        if(change !== undefined){
            message.success("密码修改成功，请重新登录", 2);
            cookie.remove('successalter', {path:'/'})
        }
    }

   

    state = {
        username: '',
        password:'',
        ModalOpen:false,
    }
    handleUsername = e => {
        this.setState({username: e.target.value})
    }

    //保存用户输入的密码
    handlePassword = e => {
        this.setState({password: e.target.value})
    }
    isModalOpen = e =>{
        this.setState({ModalOpen:true})
    }
    handleOk = e =>{
        this.setState({ModalOpen:false})
    }
    handleCancel = e =>{
        this.setState({ModalOpen:false})
    }
    showModal = e =>{
        this.setState({ModalOpen:true})
    }
    //保存用户输入的用户名
    handleUsername = e => {
        this.setState({username: e.target.value})
    }

    //保存用户输入的密码
    handlePassword = e => {
        this.setState({password: e.target.value})
    }

    //处理表单请求
    handleSubmit = () => {
        // cookie.save('username', this.state.username, { path: '/' });
        // cookie.save('loginSuccess', true, { path: '/' });
                  
        // window.location.href = '/index';
        let that = this
        const {username, password} = that.state
        if (username === '' && password === '') return
        axios.post('http://localhost:8080/login', {
            username:username,
            password:password,
        })
            .then(function (response) {
                console.log(response)
                const data = response.data
                const result = data.data
                if (result === 'success'){
                    cookie.save('username', that.state.username, { path: '/' });
                    cookie.save('loginSuccess', true, { path: '/' });
                    cookie.save('usertype',data.msg,{path:'/'})
                    window.location.href = '/index';
                }
                else{
                    message.warning('账号或密码错误', 2)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //跳转注册界面
    goRegister = () => {
        window.location.href = '/register'
    }

    render () {
        return (
           <div>
               <br/>  <br/>  <br/>
               <div style={{textAlign:'center',fontSize:40,fontFamily: 'cursive'}}>工程机械监管平台</div>
            <div className='myForm'>
                <img src={'./images/loginPicture.jpg'} alt={'loginPicture'} className='leftPicture'/>
                <div className='right'>
                    <h6 className='title'>用户登录</h6>
                    <hr className='line'/>
                    <Form
                        name="normal_login"
                        className="trueForm"
                        onFinish={this.handleSubmit}
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            name="usename"
                           
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的用户名',
                                    trigger: 'blur'
                                },
                                {
                                    min: 4,
                                    max: 18,
                                    message: '用户名长度应为4-18个字符',
                                    trigger: 'blur'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" onChange={this.handleUsername}/>
                        </Form.Item>
                        <Form.Item
                            name="pwd"
                            
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码！',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                                onChange={this.handlePassword}
                            />
                        </Form.Item>
                        <Form.Item >
                            <Form.Item name="remember" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <Link className="login-form-forgot" onClick={this.showModal} id="forgetPassword" >
                                忘记密码？
                            </Link>
                            <Modal title="提示" open={this.state.ModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
                                <p>请联系管理员重置密码</p>
                            </Modal>
                        </Form.Item>

                        <Form.Item id='buttons' name='bt'>
                            <div className='myBtn'>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                       >
                                    登录
                                </Button>
                               
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;