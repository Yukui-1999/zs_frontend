import React,{ useState } from "react";

import { Table,Form,Input,Radio,Button,Image,Modal} from 'antd';
import axios from 'axios'
import { Link} from 'react-router-dom';
import * as echarts from 'echarts'; 
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
class peoplemanage extends React.Component{
    state = {
        ModalOpen:false,
        comfirmopen:false,
        ModalOpen1:false,
        comfirmopen1:false,
        ModalOpen2:false,
        comfirmopen2:false,
    }
    isModalOpen = e =>{
        this.setState({ModalOpen:true})
    }
    handleOk = e =>{
        
       
        this.setState({comfirmopen:true})
    setTimeout(() => {
        this.setState({ModalOpen:false})
        this.setState({comfirmopen:false})
    }, 2000);
    }
    handleCancel = e =>{
        this.setState({ModalOpen:false})
    }
    showModal = e =>{
        this.setState({ModalOpen:true})
    }

    isModalOpen1 = e =>{
        this.setState({ModalOpe1:true})
    }
    handleOk1 = e =>{
        
       
        this.setState({comfirmopen1:true})
    setTimeout(() => {
        this.setState({ModalOpen1:false})
        this.setState({comfirmopen1:false})
    }, 2000);
    }
    handleCancel1 = e =>{
        this.setState({ModalOpen1:false})
    }
    showModal1 = e =>{
        this.setState({ModalOpen1:true})
    }

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
    columns = [
        {
          title: '用户名',
          dataIndex: 'username',
          key: 'username',
          width: '30%',
          align:'center'
        },
        {
          title: '用户类型',
          dataIndex: 'usertype',
          key: 'usertype',
          width: '30%',
          align:'center'
        },
        {
          title: '操作',
          dataIndex: 'op',
          key: 'op',
          width:'40%',
          align:'center',
          render:(text) =>
          <div>
            <Button onClick={this.showModal1}>
            {text[0]}
            </Button>
            &nbsp;&nbsp;
            {text.length===2?
                <Button danger onClick={this.showModal}>
            {text[1]}
          </Button>:<div></div>
            }
          
          </div>
          
        },
     
        
      ];
     data = [
        {
          username: 'aaa',
          usertype: '普通监管者',
          op: ['重置密码','删除用户'],
        },
         {
          username: 'bbb',
          usertype: '普通监管者',
          op: ['重置密码','删除用户'],
        },
        {
            username: 'ccc',
            usertype: '普通监管者',
            op: ['重置密码','删除用户'],
          },
          {
            username: 'manager',
            usertype: '管理员',
            op: ['重置密码'],
          },
         
      ];
    render(){
        
        return(
            <div>
                 <br></br>
            <br/>
            <div style={{textAlign:"center",fontSize:"30px"}}>人员管理</div>
            <br/> <br/>
            <div style={{textAlign:'center'}}>

            
            </div>
            <br/>
            <Table columns={this.columns} dataSource={this.data} />
            <div style={{textAlign:'center'}}>
                <Button onClick={this.showModal2}  type="primary" size="large" width='100px'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;添加用户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                <Modal title="提示" 
                open={this.state.ModalOpen}
                onOk={this.handleOk}
                okText='确定'
                cancelText='取消'
                confirmLoading={this.state.comfirmopen}
                onCancel={
                    this.handleCancel}
                >
                                <p>确定删除吗</p>
                </Modal>
                <Modal title="提示" 
                open={this.state.ModalOpen1}
                onOk={this.handleOk1}
                okText='确定'
                cancelText='取消'
                confirmLoading={this.state.comfirmopen1}
                onCancel={
                    this.handleCancel1}
                >
                                <p>确定重置吗</p>
                </Modal>

                <Modal title="添加用户" 
                open={this.state.ModalOpen2}
                onOk={this.handleOk2}
                okText='添加'
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
                        <Form.Item label="账号">
                        <Input />
                        </Form.Item>
                        <Form.Item label="密码">
                        <Input.Password
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        </Form.Item>
                        <Form.Item label="用户类型">
                        
                            <Radio.Group>
                                <Radio value="apple"> 管理员 </Radio>
                                <Radio value="pear"> 普通监管者 </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Form>
                 </div>
                </Modal>
            </div>
            </div>
        )
    }
}
export default peoplemanage