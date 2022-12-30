import React from "react";
import { Layout, Menu,Button,message,Form,Modal,Input } from 'antd';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import {PieChartOutlined,DatabaseOutlined,UserOutlined,MenuOutlined ,LineChartOutlined,LockOutlined,ProfileOutlined,FormOutlined} from '@ant-design/icons';
import homepage from "../homepage/homepage";
import "./Index.css"
import 'antd/dist/reset.css';
import cookie from 'react-cookies'
import allmachine from "../allmachine/allmachine";
import detail from "../detail/detail";
import showdata from "../showdata/showdata";
import peoplemanage from "../peoplemanage/peoplemanage";
import adddelete from "../adddelete/adddelete";
import axios from "axios";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Index extends React.Component {
  state = {
    collapsed: false,
    username:cookie.load('username'),
    ModalOpen2:false,
    comfirmopen2:false,
    oldpwd:'',
    newpwd:'',
    type:cookie.load('usertype'),
  };
  componentDidMount () {
    console.log(this.state.type)
    const success = cookie.load('loginSuccess')
    if (success !== undefined) {
        message.success('登陆成功。欢迎您，' + this.state.username, 5)
            .then(value => console.log(value), reason => console.log(reason))
        cookie.remove('loginSuccess',{ path: '/' })
    }
  }
    
   
  
  

  constructor (props) {
      super (props);
      const username = cookie.load('username');
      console.log(username)
      if(username === undefined) {
          window.location.href = '/login'
      }
  }
  
  handleLoginOut = () => {
      cookie.remove('username', { path: '/' })
      cookie.remove('loginSuccess', { path: '/' })
      cookie.remove('type', {path:'/'})
      window.location.href = '/login'
  }
  changePage = name => {
      this.setState({currentPage:name});
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  isModalOpen2 = e =>{
    this.setState({ModalOpe2:true})
}
handleOk2 = e =>{
    
   
    this.setState({comfirmopen2:true})
setTimeout(() => {
    this.setState({ModalOpen2:false})
    this.setState({comfirmopen2:false})
}, 2000);
}
handleCancel2 = e =>{
    this.setState({ModalOpen2:false})
}
showModal2 = e =>{
    this.setState({ModalOpen2:true})
}
repeatPwd = (rule, value) => {
  if (value && value !== this.state.newpwd) return Promise.reject('两次密码不一致')
  return Promise.resolve()
}
handleOldPassword= e =>{
  this.setState({
    oldpwd:e.target.value
  })
}
handleNewPassword =e =>{
this.setState({
  newpwd:e.target.value
})
}
handlesubmit=e=>{
//   this.setState({comfirmopen2:true})
// setTimeout(() => {
//     this.setState({ModalOpen2:false})
//     this.setState({comfirmopen2:false})
// }, 2000);


  let that=this
  this.setState({comfirmopen2:true})
  axios.post('http://localhost:8080/index/changepwd', {
      username:this.state.username,
      oldpwd:this.state.oldpwd,
      newpwd:this.state.newpwd,
  })
    .then(function (response) {
      that.setState({
          ModalOpen2:false,
          comfirmopen2:false
      })
      console.log(response)
          if (response.data.msg === 'success'){
              message.success('修改成功',3)
           
          }
          else if(response.data.msg === 'oldpwderror'){
            message.error('原始密码错误')
          }
          else{
            message.error('修改失败,请联系管理员')
          }

    })

}
  
  render() {
  
    const { collapsed } = this.state;
    return (
      <div>
        <Modal title="修改密码" 
                open={this.state.ModalOpen2}
                footer={null}
                onCancel={this.handleCancel2}
                >
                 
                    <Form
                    name="form11"
                    onFinish={this.handlesubmit}
                    layout="horizontal"
                    >
                      
                        <Form.Item 
                        label="旧密码"
                        initialValues={{ remember: true }}
                        name='oldpwd'
                        rules={[
                          {
                              required: true,
                              message: '请输入旧密码',
                          },
                        
                      ]}>
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="旧密码"
                            onChange={this.handleOldPassword}
                        />
                        </Form.Item> 
                         <Form.Item label="新密码"
                        name='password1'
                        rules={[
                          {
                              required: true,
                              message: '请输入新密码',
                          },
                        
                      ]}>
                        <Input.Password
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="新密码"
                            onChange={this.handleNewPassword}
                        />
                        </Form.Item> 

                         <Form.Item
                        label="确认新密码"
                        name="password2"
                        rules={[
                            {
                                required: true,
                                message: '请再次确认密码',
                            },
                            {
                                validator: this.repeatPwd
                            }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="确认新密码"
                            onChange={e => this.verifyPwd = e.target.value}
                        />
                    </Form.Item>
                    <Form.Item name='btt' style={{textAlign:'center'}}>
                        
                            

                            <Button type="primary" htmlType="submit"  >
                                修改密码
                            </Button>
                      
                    </Form.Item> 
                     </Form> 
                 
                </Modal>


                {/* <Modal title="添加用户" 
                open={this.state.ModalOpen2}
                onOk={this.handleOk2}
                footer={null}
                onCancel={
                    this.handleCancel2}
                >
                 <div>
                    <Form
                    name="formmmmm1"
                    onFinish={this.handlesubmit}
                    labelCol={{
                        span: 4,
                      }}
                      wrapperCol={{
                        span: 14,
                      }}
                      layout="horizontal">
                        <br/>
                        <Form.Item label="旧密码">
                        <Input.Password
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        </Form.Item>
                        <Form.Item label="新密码">
                        <Input.Password
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        </Form.Item>
                        <Form.Item label="密码确认"
                        rules={[
                          {
                              required: true,
                              message: '请再次确认密码',
                          },
                          {
                              validator: this.repeatPwd
                          }
                      ]}>
                        <Input.Password
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                                修改密码
                            </Button>
                        </Form.Item>
                    </Form>
                 </div>
                </Modal> */}
      <Layout >
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">工程机械监管平台</div>
          <Menu theme="dark"  mode="inline" selectedKeys={this.props.location.pathname}
          >
            <Menu.Item key="/index/homepage" icon={<MenuOutlined />}>
                <Link to="/index/homepage">
                首页
                </Link>
            </Menu.Item>
            <Menu.Item key="/index/allmachine" icon={<DatabaseOutlined />}>
              <Link to="/index/allmachine">
                全部
                </Link>
            </Menu.Item>
            <Menu.Item key="/index/detail" icon={<ProfileOutlined />}>
                详情
            </Menu.Item>
            <Menu.Item key="/index/showdata" icon={<LineChartOutlined />}>
                数据展示
            </Menu.Item>
            
              {this.state.type==='0'?<></>:
              <Menu.Item key="/index/peoplemanage" icon={<UserOutlined />}  >
              <Link to="/index/peoplemanage" >
              人员管理
              </Link>
              </Menu.Item>
              }
      
      {this.state.type==='0'?<></>:
            <Menu.Item key="/index/adddelete" icon={<FormOutlined />} >
            <Link to="/index/adddelete" >
                设备增删
                </Link>
            </Menu.Item>
            }
          </Menu>
          
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"  >
            
            <span id='username' style={{color:'white'}}>username : {this.state.username}</span>
          <Button type="primary" id="exitBtn" onClick = {this.handleLoginOut}>退出登录</Button>
          <Button type="primary" id='changepwd'  onClick = {this.showModal2}>修改密码</Button>
            
            
          </Header>
          <Content style={{ margin: '0 16px' }} >
            <div className="content-layout-background" style={{ padding: 0, minHeight: 650}}>
              <Switch>
                <Route  path="/index/adddelete" component={adddelete}/>
                <Route  path="/index/peoplemanage" component={peoplemanage}/>
                
                <Route  path="/index/showdata" component={showdata}/>
                <Route  path="/index/detail" component={detail}/>
                <Route path="/index/allmachine" component={allmachine}/> 
                <Route  path="/index/homepage" component={homepage}/>
                <Redirect to= "/index/homepage" />                
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Image data annotation ©2021 Created by dzy</Footer>
        </Layout>
      </Layout>
      </div>
    );
  }
}
export default Index;
