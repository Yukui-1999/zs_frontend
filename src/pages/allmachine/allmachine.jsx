import React,{ useState } from "react";

import { Table, Tag, Space ,Input} from 'antd';
import axios from 'axios'
import { Link} from 'react-router-dom';
const { Search } = Input;
class allmachine extends React.Component{
    
     onSearch = (value) => console.log(value);
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
          render:(text) =><Tag  color={text==='normal'?'green':'red'}>{text}</Tag>
        },
        {
          title: '详情',
          key: 'detail',
          dataIndex: 'detail',
          render: (text) => <Link to="/index/detail">{text}</Link>,
        },
        
      ];
     data = [
        {
          id: '1',
          name: '机械1号',
          detail: '查看',
          state: 'normal',
        },
        {
          id: '2',
          name: '机械2号',
          detail: '查看',
          state: 'normal',
        },
        {
          id: '3',
          name: '机械3号',
          detail: '查看',
          state: 'normal',
        },
        {
            id: '3',
            name: '机械3号',
            detail: '查看',
            state: 'normal',
          },
          {
            id: '4',
            name: '机械4号',
            detail: '查看',
            state: 'normal',
          },
          {
            id: '5',
            name: '机械5号',
            detail: '查看',
            state: 'normal',
          },
          {
            id: '6',
            name: '机械6号',
            detail: '查看',
            state: 'normal',
          },
          {
            id: '7',
            name: '机械7号',
            detail: '查看',
            state: 'abnormal',
          },
      ];
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
            <Table columns={this.columns} dataSource={this.data} />
           </div>
               
                
        )
    }
}
export default allmachine