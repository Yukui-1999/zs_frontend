import React,{ useState } from "react";

import { Table, Tag, Space ,Input,message, Button,Spin} from 'antd';
import axios from 'axios'
import { Link} from 'react-router-dom';
const { Search } = Input;
class allmachine extends React.Component{
    state={
      data:[],
      spin:true,
    }
     lable=['逆时针转，快速，大瓶，空瓶','逆时针转，快速，小瓶，空瓶',
      '逆时针转，慢速，大瓶，空瓶','逆时针转，慢速，大瓶，满水','逆时针转，慢速，小瓶，空瓶',
    '逆时针转，慢速，小瓶，满水','顺时针转，快速，大瓶，空瓶','顺时针转，快速，小瓶，空瓶','顺时针转，慢速，大瓶，空瓶',
    '顺时针转，慢速，大瓶，满水','顺时针转，慢速，小瓶，空瓶','顺时针转，慢速，小瓶，满水']
    todetail =e =>{
      console.log(e)
      this.props.history.push({ pathname : '/index/detail' , state : { 
        id : e ,
      }})
    }
     onSearch = (value) =>{
      let that=this
      console.log(value)
      console.log(value===''?1:0)
      if(value===''){
       
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
                data:data.data,
                
            })
          })
      }
      else{
        let data
        axios.post('http://localhost:8080/index/machinesearch', {
            id:value
        })
          .then(function (response) {
            console.log(response)
             data = response.data
                if (response.status !== 200){
                    message.error('出现问题,请联系管理员',3)
                }
                else if(response.data.data==='notfind'){
                  message.error('不存在该工程机械',3)
                }
                else{
                  console.log(data.data)
                  that.setState({
                    data:data.data,
                })
                }

          })
      }
     } 
     columns = [
        {
          title: '工程机械编号',
          dataIndex: 'id',
          key: 'id',
          
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '最新运行状态',
          dataIndex: 'state',
          key: 'state',
          render:(text) =><Tag>{this.lable[text-1]}</Tag>
        },
        {
          title: '详情',
          key: 'detail',
          dataIndex: 'detail',
          render: (text,record) => <Button onClick={this.todetail.bind(record.id,record.id)} >{'查看'}</Button>,
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
                data:data.data,
                spin:false,
            })
          })
      }
    render(){
      
        return(
            
           <div>
            <br></br>
            <br/>
            <div style={{textAlign:"center",fontSize:"30px"}}>工程机械管理</div>
            <br/> <br/>
            <div style={{textAlign:'center'}}>

                <Search placeholder="input search id"style={{width:'300px'}}size='large' onSearch={this.onSearch} enterButton />
            </div>
            <br/>
            <Spin spinning={this.state.spin}>
              <Table columns={this.columns} dataSource={this.state.data} />
            </Spin>
           </div>
               
                
        )
    }
}
export default allmachine