import React,{ useState } from "react";
import cookie from 'react-cookies'
import { Card, Row,Col,Avatar,Image,message} from 'antd';
import axios from 'axios'
import * as echarts from 'echarts';   
import { Link} from 'react-router-dom';
class homepage extends React.Component{
    state = {
        username:cookie.load('username'),
        sourcedata:[
          {id:'',intro:'',imageurl:'',name:''},
          {id:'',intro:'',imageurl:'',name:''},
          {id:'',intro:'',imageurl:'',name:''},
          {id:'',intro:'',imageurl:'',name:''},
          {id:'',intro:'',imageurl:'',name:''},
          {id:'',intro:'',imageurl:'',name:''},
          {id:'',intro:'',imageurl:'',name:''},
          {id:'',intro:'',imageurl:'',name:''},
        ],
     
    }
     gridStyle = {
      width: '25%',
      textAlign: 'center',
    };
     data = [];
     now = new Date(1997, 9, 3);
     oneDay = 24 * 3600 * 1000;
     value = Math.random() * 10;
     
      randomData(){
      this.now = new Date(+this.now + this.oneDay);
      this.value = this.value + Math.random() * 0.21 - 0.1;
      return {
        name: this.now.toString(),
        value: [
          [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
          Math.round(this.value)
        ]
      };
    }
    
    componentDidMount(){  

      let lable=['逆时针转，快速，大瓶，空瓶','逆时针转，快速，小瓶，空瓶',
      '逆时针转，慢速，大瓶，空瓶','逆时针转，慢速，大瓶，满水','逆时针转，慢速，小瓶，空瓶',
    '逆时针转，慢速，小瓶，满水','顺时针转，快速，大瓶，空瓶','顺时针转，快速，小瓶，空瓶','顺时针转，慢速，大瓶，空瓶',
    '顺时针转，慢速，大瓶，满水','顺时针转，慢速，小瓶，空瓶','顺时针转，慢速，小瓶，满水']
      let that=this
      let piedata
      let machinedata
      let total=0
      let times=[]
      let series=[]
      let legend=[]
      axios.post('http://localhost:8080/index/piedata', {
                  msg:'111'
              })
                .then(function (response) {
                  console.log(response)
                  machinedata = response.data
                  piedata=machinedata.data
                  times=machinedata.time
                  series=machinedata.linevalue
                  series.forEach(function(item,index,self){
                    console.log(item)
                    item.name=lable[item.name-1]
                    legend[index]=item.name
                    item.stack='Total'
                    item.areaStyle={}
                    item.emphasis={focus:'series'}
                    item.type='line'
                  })
                  piedata.forEach(function(item,index,self){
                    total+=item.value
                  })
             
                      if (response.data.msg !=='success'){
                          message.error('出现问题,请联系管理员',3)
                      }
                      else{
                        console.log(piedata)
                        console.log(series)
                        console.log(legend)
                      }
                }).then(()=>{
                  
                    //charts begin
                  
                      var mychart1 = echarts.init(document.getElementById('line'))             
                      var option1 = {
                        title: {
                          text: '各运行状态机械堆叠面积图',
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
                          top:"6%"                                                                                  
                        },
                        toolbox: {
                          feature: {
                            saveAsImage: {}
                          }
                        },
                        grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '15%',
                          top:'20%',
                          containLabel: true
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
                
                
                
                    
                      var mychart = echarts.init(document.getElementById('main'))                    
                      var option = {                                                                                               
                        title: {                                                                                                         
                          text: '工程机械运行情况',                                                                     
                          subtext: '工程机械台数:'+total,                                                             
                          left: 'center'                                                                                             
                      },                                                                                                                 
                      tooltip: {                                                                                                       
                          trigger: 'item'                                                                                           
                      },                                                                                                                 
                      legend: {                                                                                                     
                          orient: 'vertical',                                                                                      
                          left: 'left', 
                          top: 'bottom'                                                                                                
                      },                                                                                                                 
                      series: [                                                                                                      
                          {                                                                                                             
                              name: '访问来源',                                                                               
                              type: 'pie',                                                                                           
                              radius: '50%',    
                              data:piedata,
                                                                                                                               
                              emphasis: {                                                                                       
                                  itemStyle: {                                                                                    
                                      shadowBlur: 10,                                                                        
                                      shadowOffsetX: 0,                                                                    
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'                                              
                                  }                                                                                                    
                              }                                                                                                        
                          }                                                                                                            
                      ]                                                                                                                
                        }                                                                                                              
                      option && mychart.setOption(option)   
                    //charts end

                }).then(()=>{
                  that.setState({
                    sourcedata:machinedata.data2
                  },()=>{
                    console.log(this.state.sourcedata)
                  })
                })
    
                                                        
    }                                   
    render(){
      const elements=[];
    this.state.sourcedata.forEach((element)=>{
      elements.push(
        <Card.Grid style={this.gridStyle}>
            <div>
            <Avatar src={<Image src={element.imageurl} style={{ width: 32 }} />} />
            {element.name}
            </div>
            <div>编号:{element.id}</div>
            <a>简介:{element.intro}</a>
        </Card.Grid>
      )
    });
        return(
            <div>
                <br/><br/>
               
                <br/>
                <Row>
                <Col span={12}>
                  <div id="main" style={{height:'425px',width:'600px'}}>

                  </div>
        
                </Col>
                <Col span={12}>
                <div id="line" style={{height:'425px',width:'600px'}}>

                </div>
                </Col>
              </Row>
              <br/>
              <Card title={<Row>
                <Col span={12}>
                   监管中的工程机械
                </Col>
                <Col span={12} style={{textAlign:'right',color:'blue'}}>
                   <Link to="/index/allmachine">全部</Link>
                </Col>
              </Row>}>
              {elements}
              
              
              </Card>
            </div>
        )
    }
}
export default homepage