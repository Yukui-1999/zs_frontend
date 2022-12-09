import React from "react";
import { Layout, Menu,Button,message,Form,Modal,Input } from 'antd';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import {PieChartOutlined,DatabaseOutlined,UserOutlined,EyeInvisibleOutlined,EyeTwoTone} from '@ant-design/icons';
import homepage from "../homepage/homepage";
import "./Index.css"
import 'antd/dist/reset.css';
import cookie from 'react-cookies'
import allmachine from "../allmachine/allmachine";
import detail from "../detail/detail";
import showdata from "../showdata/showdata";
import peoplemanage from "../peoplemanage/peoplemanage";
import adddelete from "../adddelete/adddelete";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Index extends React.Component {
  state = {
    collapsed: false,
    username:cookie.load('username'),
    ModalOpen2:false,
    comfirmopen2:false,
    
  
  };
  componentDidMount () {
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
      cookie.remove('email', {path:'/'})
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
  
  render() {
  
    const { collapsed } = this.state;
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <Modal title="添加用户" 
                open={this.state.ModalOpen2}
                onOk={this.handleOk2}
                okText='修改'
                cancelText='取消'
                confirmLoading={this.state.comfirmopen2}
                onCancel={
                    this.handleCancel2}
                >
                 <div>
                    <Form
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
                        
                    </Form>
                 </div>
                </Modal>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">工程机械监管平台</div>
          <Menu theme="dark"  mode="inline" selectedKeys={this.props.location.pathname}
          >
            <Menu.Item key="/index/homepage" icon={<DatabaseOutlined />}>
                <Link to="/index/homepage">
                首页
                </Link>
            </Menu.Item>
            <Menu.Item key="/index/allmachine" icon={<DatabaseOutlined />}>
              <Link to="/index/allmachine">
                全部
                </Link>
            </Menu.Item>
            <Menu.Item key="/index/detail" icon={<UserOutlined />}>
                <Link to="/index/detail">
                详情
                </Link>
            </Menu.Item>
            <Menu.Item key="/index/showdata" icon={<UserOutlined />}>
                <Link to="/index/showdata">
                数据展示
                </Link>
            </Menu.Item>
            <Menu.Item key="/index/peoplemanage" icon={<PieChartOutlined />} >
            <Link to="/index/peoplemanage">
                人员管理
                </Link>
            </Menu.Item>
            <Menu.Item key="/index/adddelete" icon={<PieChartOutlined />} >
            <Link to="/index/adddelete">
                设备增删
                </Link>
            </Menu.Item>
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
    );
  }
}
export default Index;
