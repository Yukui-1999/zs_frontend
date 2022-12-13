import React,{ useState } from "react";

import { Table,Form,Input,Radio,Button,message,Modal,Spin} from 'antd';
import axios from 'axios'
import { Link} from 'react-router-dom';
import * as echarts from 'echarts'; 
import { EyeInvisibleOutlined, LockOutlined ,UserOutlined} from '@ant-design/icons';
class peoplemanage extends React.Component{
    state = {
        ModalOpen:false,
        comfirmopen:false,
        ModalOpen1:false,
        comfirmopen1:false,
        ModalOpen2:false,
        comfirmopen2:false,
        data:[],
        updateusername:'',
        deleteusername:'',
        createusername:'',
        createpwd:'',
        createtype:'',
        spin:true,
    }
    isModalOpen = e =>{
        this.setState({ModalOpen:true})
    }
    handleOk = e =>{
        let that=this
        this.setState({comfirmopen:true})
        console.log(this.state.deleteusername)
        axios.post('http://localhost:8080/index/deleteuser', {
            username:this.state.deleteusername
        })
          .then(function (response) {
            that.setState({
                ModalOpen:false,
                comfirmopen:false
            })
            console.log(response)
                if (response.data.msg === 'fail'){
                    message.error('删除失败,请联系管理员',3)
                }
                else{
                  message.success('删除成功')
                  setTimeout(() => {
                    window.location.reload()
                }, 1000);
                }

          })



    
    }
    handleCancel = e =>{
        this.setState({ModalOpen:false})
    }
    showModal = e =>{
        console.log(e)
        this.setState({
            ModalOpen:true,
            deleteusername:e
        })
    }

    isModalOpen1 = e =>{
        this.setState({ModalOpe1:true})
    }
    handleOk1 = e =>{
        let that=this
        this.setState({comfirmopen1:true})
        console.log(this.state.updateusername)
        axios.post('http://localhost:8080/index/resetpwd', {
            username:this.state.updateusername
        })
          .then(function (response) {
            that.setState({
                ModalOpen1:false,
                comfirmopen1:false
            })
            console.log(response)
                if (response.data.msg === 'fail'){
                    message.error('重置失败,请联系管理员',3)
                }
                else{
                  message.success('重置成功')
                }

          })
   
    }
    handleCancel1 = e =>{
        this.setState({ModalOpen1:false})
    }
    showModal1 = e =>{
        console.log(e)
        this.setState({
            ModalOpen1:true,
            updateusername:e,
        })
    }

    isModalOpen2 = e =>{
        this.setState({ModalOpe2:true})
    }
    handleOk2 = e =>{
        
       let that=this
        this.setState({comfirmopen2:true})
        axios.post('http://localhost:8080/index/createuser', {
            username:this.state.createusername,
            password:this.state.createpwd,
            type:this.state.createtype,
        })
          .then(function (response) {
            that.setState({
                ModalOpen2:false,
                comfirmopen2:false
            })
            console.log(response)
                if (response.data.msg === 'success'){
                    message.success('创建成功',3)
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                }
                else if(response.data.msg === 'reuse'){
                    message.info('用户名已存在,更换用户名')
                }
                else{
                  message.success('创建失败')
                }

          })
    
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
          align:'center',
          render:(text)=>
          <div>
           {text==="1"?"管理员":"普通监管者"}
          </div>
        },
        {
          title: '操作',
          dataIndex: 'op',
          key: 'op',
          width:'40%',
          align:'center',
          render:(text,record) =>
          <div>
            <Button onClick={this.showModal1.bind(record.username,record.username)}>
            {text[0]}
            </Button>
            &nbsp;&nbsp;
            {text.length===2?
                <Button danger onClick={this.showModal.bind(record.username,record.username)}>
            {text[1]}
          </Button>:<div></div>
            }
          
          </div>
          
        },
     
        
      ];
       
      componentDidMount(){
        console.log(this.data)
        let data
        axios.post('http://localhost:8080/index/peoplemanage', {
            msg:111
        })
          .then(function (response) {
            console.log(response)
             data = response.data
                if (response.status !== 200){
                    message.error('出现问题,请联系管理员',3)
                }
                else{
                  console.log(data.data)
                }

          }).then(()=>{
            this.setState({
                spin:false,
                data:data.data,
            })
          })
      }
      handleusername=e=>{
        console.log(e.target.value)
        this.setState({
            createusername:e.target.value
        })
      }
      handlepassword=e=>{
        console.log(e.target.value)
        this.setState({
            createpwd:e.target.value
        })
      }
      handletype=e=>{
        console.log(e.target.value)
        this.setState({
            createtype:e.target.value
        })
      }
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
         
            
            
            <Spin spinning={this.state.spin}>
                <Table columns={this.columns} dataSource={this.state.data}/> 
            </Spin>
         
    
            
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
                onCancel={
                    this.handleCancel2}
                footer={null}
                >
                
                 <div>
                    <Form
                      layout="horizontal"
                      name="form"
                      onFinish={this.handleOk2}
                      >
                        <Form.Item label="账号"
                        name='user'
                        initialValues={{ remember: true }}
                        rules={[
                            {
                                required: true,
                                message: '请输入要创建的用户名!',
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
                        <Input  onChange={this.handleusername}/>
                        </Form.Item>
                        <Form.Item label="密码"
                        initialValues={{ remember: true }}
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: '请输入要创建的密码!',
                            },
                        ]}>
                        <Input.Password
                                prefix={<LockOutlined />}
                                type="password"
                
                                onChange={this.handlepassword}
                            />
                        </Form.Item>
                        <Form.Item label="用户类型"
                        name='type'
                        rules={[
                            {
                                required: true,
                                message: '请选择要创建的用户类型!',
                            },
                        ]}>
                            <Radio.Group onChange={this.handletype}>
                                <Radio value="1"> 管理员 </Radio>
                                <Radio value="0"> 普通监管者 </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item style={{textAlign:'center'}}>
                            <Button type="primary" htmlType="submit" >
                            创建
                            </Button>
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