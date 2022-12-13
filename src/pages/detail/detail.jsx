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
        let that=this
        console.log('id is '+this.state.id)
        let machinedata
        axios.post('http://localhost:8080/index/machinedetail', {
            id:this.state.id
        })
          .then(function (response) {
            console.log(response)
            machinedata = response.data
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
                  console.log(machinedata.data)
                }
          })

      
      for (var i = 0; i < 500; i++) {
        this.data.push(this.randomData());
      }
        var mychart1 = echarts.init(document.getElementById('line1'))             
        var option1 = {
          title: {
            text: '正常/异常随时间变化表,1正常0异常',
            left:'center'
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return (
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' : ' +
                params.value[1]
              );
            },
            axisPointer: {
              animation: false
            }
          },
          dataZoom: [
            {
              type: 'slider',
              xAxisIndex: 0,
              filterMode: 'none'
            },
        
            {
              type: 'inside',
              xAxisIndex: 0,
              filterMode: 'none'
            },
         
          ],
          xAxis: {
            type: 'time',
            splitLine: {
              show: true
            }
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: true
            }
          },
          series: [
            {
              name: 'Fake Data',
              type: 'line',
              showSymbol: false,
              data: this.data
            }
          ]
        };
        setInterval(function () {
          for (var i = 0; i < 5; i++) {
            that.data.shift();
            that.data.push(that.randomData());
          }
          mychart1.setOption({
            series: [
              {
                data: that.data
              }
            ]
          });
        
        }, 1000);
        option1&&mychart1.setOption(option1)
  

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
                   <Button type="primary" ghost size="large">下载近期原始数据</Button>

                </Col>
                <Col span={12} style={{textAlign:'center'}}>
                    <br/> <br/>
                    <Image style={{width:'500px',height:'300px'}}  src={this.state.imgurl}></Image>
                </Col>
                </Row>
                <br/>
                <Divider orientation="left">原始数据部分展示</Divider>
                <br/><br/>
                <div id="line1" style={{textAlign:'center',height:'400px',width:'1300px'}}></div>
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
