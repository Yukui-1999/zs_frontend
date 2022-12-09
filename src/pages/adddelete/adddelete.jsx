import React,{ useState } from "react";

import { Table, Tag ,Input, Upload,Form, Button,Modal, Divider} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
const {TextArea} = Input;
const {Search}= Input
class adddelete extends React.Component{
    state = {
        ModalOpen:false,
        comfirmopen:false,
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
    columns1 = [
        {
          title: '工程机械id',
          dataIndex: 'id',
          key: 'id',
          width: '25%',
          align:'center'
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          width: '25%',
          align:'center'
        },
        {
          title: '最新运行状态',
          dataIndex: 'state',
          key: 'state',
          width:'25%',
          align:'center',
          render:(text) =><Tag  color={text==='normal'?'green':'red'}>{text}</Tag>
        },
        {
            title: '删除',
            dataIndex: 'delete',
            key: 'delete',
            width: '25%',
            align:'center' ,
            render:() =>
         
            <Button onClick={this.showModal}>
            删除
            </Button>
        }
     
        
      ];


    columns = [
        {
          title: '工程机械id',
          dataIndex: 'id',
          key: 'id',
          width: '30%',
          align:'center'
        },
        {
          title: '传感器传来的其他特征',
          dataIndex: 'feature',
          key: 'feature',
          width: '30%',
          align:'center'
        },
        {
          title: '添加',
          dataIndex: 'add',
          key: 'add',
          width:'40%',
          align:'center',
          render:() =>
          <div>
            <Button onClick={this.showModal2}>
            添加
            </Button>
           
          
          </div>
          
        },
     
        
      ];
     data = [
        {
          id: '1111',
          feature: '特征1',
          
        },
        {
            id: '2222',
            feature: '特征2',
            
          },
          {
            id: '3333',
            feature: '特征3',
            
          },
          {
            id: '4444',
            feature: '特征4',
            
          },
       
         
      ];
      data1 = [
        {
          id: '1111',
          name: '工程机械1',
          state:'normal',
        },
        {
            id: '2222',
            name: '工程机械2',
            state:'normal',
          },
          {
            id: '1111',
            name: '工程机械3',
            state:'normal',
          },
          {
            id: '1111',
            name: '工程机械4',
            state:'abnormal',
          },
       
         
      ];
    render(){
        return(
            <div>
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
                <br/><br/>
                <div style={{textAlign:"center",fontSize:"30px",fontWeight:500}}>已存在的工程机械</div>

                <Modal title="添加工程机械" 
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
                        <div>工程机械id:XXXX</div>
                        <br/>
                        <Form.Item label="机械名称">
                        <Input />
                        </Form.Item>
                        <Form.Item label="传感器类型">
                        <Input />
                        </Form.Item>
                        <Form.Item label="简介">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="上传图片" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                            <PlusOutlined />
                            <div
                                style={{
                                marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                            </div>
                        </Upload>
                        </Form.Item>

                       
                        
                    </Form>
                 </div>
                </Modal>
            <br/> <br/>
            <div style={{textAlign:'center'}}>

            <Search placeholder="input search id"style={{width:'300px'}} onSearch={this.onSearch} enterButton />
            </div>
            <br/>
                <Table columns={this.columns1} dataSource={this.data1} />
                <Divider>
                <div style={{textAlign:"center",fontSize:"30px"}}>可以添加的工程机械</div>
                </Divider>
                <Table columns={this.columns} dataSource={this.data} />
                
            </div>
        )
    }
}
export default adddelete