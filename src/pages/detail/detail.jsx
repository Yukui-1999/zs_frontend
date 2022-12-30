import React,{ useState } from "react";

import { Table, Tag, Space ,Input, Row,Col, Button,Image,Divider,message} from 'antd';
import axios from 'axios'
import { Link} from 'react-router-dom';
import * as echarts from 'echarts'; 
class detail extends React.Component{
    state={
      id:this.props.location.state.id,
      intro:'',
      imgurl:'',
      sensor:'',
      name:'',
    }


    gridStyle = {
        width: '25%',
        textAlign: 'center',
      };
       data = [];
       now = new Date(1997, 9, 3);
       oneDay = 24 * 3600 * 1000;
       value = Math.random()>0.2?1:0;
       
        randomData(){
        this.now = new Date(+this.now + this.oneDay);
        this.value = Math.random()>0.3?1:0
        return {
          name: this.now.toString(),
          value: [
            [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
            Math.round(this.value)
          ]
        };
      }
    
      componentDidMount(){  
        let lable=['静止，不转，大瓶，空瓶','逆时针转，快速，大瓶，空瓶','逆时针转，快速，大瓶，空瓶',
      '逆时针转，慢速，大瓶，空瓶','逆时针转，慢速，大瓶，满水','逆时针转，慢速，小瓶，空瓶',
    '逆时针转，慢速，小瓶，满水','顺时针转，快速，大瓶，空瓶','顺时针转，快速，小瓶，空瓶','顺时针转，慢速，大瓶，空瓶',
    '顺时针转，慢速，大瓶，满水','顺时针转，慢速，小瓶，空瓶','顺时针转，慢速，小瓶，满水']
        let that=this
        let series=[]
        let times=[]
        let legend=[]
        console.log('id is '+this.state.id)
        let machinedata
        axios.post('http://localhost:8080/index/machinedetail', {
            id:this.state.id
        })
          .then(function (response) {
            console.log(response)
            machinedata = response.data
            series=machinedata.line
            times=machinedata.time
            series.forEach(function(item,index,self){
              item.name=lable[item.name-1]
              legend[index]=item.name
              item.stack='Total'
              item.areaStyle={}
              item.emphasis={focus:'series'}
              item.type='line'
            })
            that.setState({
              intro:machinedata.data.intro,
              name:machinedata.data.name,
              sensor:machinedata.data.sensor,
              imgurl:machinedata.data.imgurl,
          })
                if (response.data.msg !=='success'){
                    message.error('出现问题,请联系管理员',3)
                }
                else{
                  console.log(times)
                  console.log(legend)
                  console.log(series)
                }
          }).then(()=>{
            var mychart1 = echarts.init(document.getElementById('line1'))  
            var option1 = {
              title: {
                text: '工程机械状态随时间变化',
                left: 'center'   
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              legend: {
                data: legend,
                top:'10%',
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'20%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: times
                }

              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: series
            };
            
            
            
            option1&&mychart1.setOption(option1)
          })

      
      
       
  

    }          
    render(){
        return(
            <div>
                <Row>
                <Col span={12} style={{textAlign:'center'}}>
                    <br/><br/>
                   <div style={{fontSize:'32px'}}>{this.state.name}</div>
                   <br/><br/><br/>
                   <div style={{fontSize:'18px'}}>{this.state.intro}</div>
                   <br/>
                   <div style={{fontSize:'18px'}}>{this.state.sensor}</div>
                   <br/>
                   <a href="http://localhost:8080/index/load" download="file">下载文件</a>
                   {/* <Button type="primary" ghost size="large">下载近期原始数据</Button> */}

                </Col>
                <Col span={12} style={{textAlign:'center'}}>
                    <br/> <br/>
                    <Image style={{width:'500px',height:'300px'}}  src={this.state.imgurl}></Image>
                </Col>
                </Row>
                <br/>
                <Divider orientation="left">原始数据部分展示</Divider>
                <br/><br/>
                <div id="line1" style={{textAlign:'center',height:'400px',width:'1150px'}}></div>
                <div style={{textAlign:'center'}}>
                    <br/>
                    <Button size="large" type="primary" ghost>
                        <Link to='/index/showdata'>点击查看更多</Link>
                    </Button>
                </div>
                <br/><br/>
                
            </div>
        )
    }

}
export default detail;
