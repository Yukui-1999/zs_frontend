import React,{ useState } from "react";

import { Table, Tag ,Input, Upload,Form, Button,Modal, Divider,message, Spin} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
const {TextArea} = Input;
const {Search}= Input
class adddelete extends React.Component{
    state = {
        ModalOpen:false,
        comfirmopen:false,
        ModalOpen2:false,
        comfirmopen2:false,
        data1:[],
        uploadpicurl:'null',
        deleteid:'',
        spin:true,
        
    }
    lable=['静止，不转，大瓶，空瓶','逆时针转，快速，大瓶，空瓶','逆时针转，快速，大瓶，空瓶',
  '逆时针转，慢速，大瓶，空瓶','逆时针转，慢速，大瓶，满水','逆时针转，慢速，小瓶，空瓶',
'逆时针转，慢速，小瓶，满水','顺时针转，快速，大瓶，空瓶','顺时针转，快速，小瓶，空瓶','顺时针转，慢速，大瓶，空瓶',
'顺时针转，慢速，大瓶，满水','顺时针转，慢速，小瓶，空瓶','顺时针转，慢速，小瓶，满水']

    isModalOpen = e =>{
        this.setState({ModalOpen:true})
    }
    handleOk = e =>{
      let that=this
      this.setState({comfirmopen:true})
      console.log(this.state.deleteid)
      axios.post('http://localhost:8080/index/deletemachine', {
          id:this.state.deleteid
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
          deleteid:e,
        })
    }

    isModalOpen2 = e =>{
        this.setState({ModalOpe2:true})
    }
    handleOk2 = e =>{
      
        console.log(e)
        this.setState({comfirmopen2:true})
        let that=this
        axios.post('http://localhost:8080/index/addmachine', {
            id:e.machineid,
            intro:e.machineintro,
            name:e.machinename,
            sensor:e.machinesensor,
            url:this.state.uploadpicurl
        })
          .then(function (response) {
            that.setState({ModalOpen2:false})
            that.setState({comfirmopen2:false})
            console.log(response)
            if (response.data.msg === 'success'){
              message.success('添加成功',3)
              setTimeout(() => {
                  window.location.reload()
              }, 1000);
              }
              else if(response.data.msg === 'reuse'){
                  message.info('该工程机械id已存在,请更换')
              }
              else{
                message.success('添加失败')
              }

          })
        
    setTimeout(() => {
        
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
          render:(text) =><Tag>{this.lable[text-1]}</Tag>
        },
        {
            title: '删除',
            dataIndex: 'delete',
            key: 'delete',
            width: '25%',
            align:'center' ,
            render:(text,record) =>
         
            <Button onClick={this.showModal.bind(record.id,record.id)}>
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
      
      componentDidMount(){
        console.log(this.data)
        let data
        axios.post('http://localhost:8080/index/machinemanage', {
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
                data1:data.data,
                spin:false,
            })
          })
      }
       myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'yukui', 
        uploadPreset: 'sjl8ryfd'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: '); 
            console.log(result)
            console.log(result.info.id)
            console.log(result.info.url)
            this.setState({
              uploadpicurl:result.info.url,
            })
            // const data=this.state.pictureurl;
            // data.push(result.info.url)
            // console.log(data)
            // this.setState({
            //   pictureurl:data
            // })
            // console.log(this.state.pictureurl[0])
          }
        }
      )

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
                footer={null}
                onCancel={
                    this.handleCancel2}
                >
                 <div>
                    <Form
                    name="uploadmachine"
                    onFinish={this.handleOk2}
                    
                      layout="horizontal">
                        <br/>
                        
                        <Form.Item label="id"
                        name='machineid'
                        rules={[
                          {
                              required: true,
                              message: '请输入要添加的工程机械id!',
                          },
                      ]}>
                        <Input />
                        </Form.Item>
                        <Form.Item label="机械名称"
                        name='machinename'
                        rules={[
                          {
                              required: true,
                              message: '请输入要添加的工程机械名称!',
                          },
                      ]}>
                        <Input />
                        </Form.Item>
                        <Form.Item label="传感器类型"
                        name='machinesensor'
                        rules={[
                          {
                              required: true,
                              message: '请输入要添加的工程机械传感器类型',
                          },
                      ]}>
                        <Input />
                        </Form.Item>
                        <Form.Item label="简介"
                        name='machineintro'
                        rules={[
                          {
                              required: true,
                              message: '请输入要添加的工程机械简介!',
                          },
                      ]}>
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="上传图片" valuePropName="fileList"
                        name='machinepic'
                        >
                        <div>
                        <Button icon={<UploadOutlined />} id="upload_widget" onClick={()=>{this.myWidget.open();}}>点击上传图片</Button>
                        </div>
                        
                        <img src={this.state.uploadpicurl} width='100px'></img>
                        
                        </Form.Item>
                        <Form.Item style={{textAlign:'center'}}>
                            <Button type="primary" htmlType="submit" >
                            添加
                            </Button>
                        </Form.Item>

                       
                        
                    </Form>
                 </div>
                </Modal>
            <br/> <br/>
            <div style={{textAlign:'center'}}>

            <Search placeholder="input search id"style={{width:'300px'}} onSearch={this.onSearch} enterButton />
            </div>
            <br/>
            <Spin spinning={this.state.spin}>

           
                <Table columns={this.columns1} dataSource={this.state.data1} />
                </Spin >
                <Divider>
                <div style={{textAlign:"center",fontSize:"30px"}}>可以添加的工程机械</div>
                </Divider>
                <Table columns={this.columns} dataSource={this.data} />
                
            </div>
        )
    }
}
export default adddelete