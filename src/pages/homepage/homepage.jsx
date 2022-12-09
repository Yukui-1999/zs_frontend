import React,{ useState } from "react";
import cookie from 'react-cookies'
import { Card, Row,Col,Avatar,Image} from 'antd';
import axios from 'axios'
import * as echarts from 'echarts';   
import { Link} from 'react-router-dom';
class homepage extends React.Component{
    state = {
        username:cookie.load('username'),
        sourcedata:[],
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
    let that=this
    for (var i = 0; i < 3000; i++) {
      this.data.push(this.randomData());
    }
    
      var mychart1 = echarts.init(document.getElementById('line'))             
      var option1 = {
        title: {
          text: '异常机械运行百分比随时间变化',
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



    
      var mychart = echarts.init(document.getElementById('main'))                    
      var option = {                                                                                               
        title: {                                                                                                         
          text: '工程机械运行情况',                                                                     
          subtext: "共30台工程机械",                                                             
          left: 'center'                                                                                             
      },                                                                                                                 
      tooltip: {                                                                                                       
          trigger: 'item'                                                                                           
      },                                                                                                                 
      legend: {                                                                                                     
          orient: 'vertical',                                                                                      
          left: 'left',                                                                                                 
      },                                                                                                                 
      series: [                                                                                                      
          {                                                                                                             
              name: '访问来源',                                                                               
              type: 'pie',                                                                                           
              radius: '50%',                                                                                     
              data: [                                                                                                
                  {value: 24, name: '正常'},                                                   
                  {value: 6, name: '异常'},                                                     
                                                                
              ],                                                                                                        
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
    }                                   
    render(){
      
        return(
            <div>
                <br/><br/>
               
                <br/>
                <Row>
                <Col span={12}>
                  <div id="main" style={{height:'400px',width:'650px'}}>

                  </div>
        
                </Col>
                <Col span={12}>
                <div id="line" style={{height:'400px',width:'650px'}}>

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
                
              <Card.Grid style={this.gridStyle}>
              <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械1</div>
                  <div>编号</div>
                  <a>详情</a>
              </Card.Grid>
              <Card.Grid style={this.gridStyle}>
              <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械2</div>
                  <div>编号</div>
                  <a>详情</a>
              </Card.Grid>
                <Card.Grid style={this.gridStyle}>
                  <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械3</div>
                  <div>编号</div>
                  <a>详情</a>
                </Card.Grid>
                <Card.Grid style={this.gridStyle}>
                <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械4</div>
                  <div>编号</div>
                  <a>详情</a>
                </Card.Grid>
                <Card.Grid style={this.gridStyle}>
                <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械5</div>
                  <div>编号</div>
                  <Link to='/index/detail'>详情</Link>
                </Card.Grid>
                <Card.Grid style={this.gridStyle}>
                <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械6</div>
                  <div>编号</div>
                  <a>详情</a>
                </Card.Grid>
                <Card.Grid style={this.gridStyle}>
                <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械7</div>
                  <div>编号</div>
                  <a>详情</a>
                </Card.Grid>
                <Card.Grid style={this.gridStyle}>
                <div>
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />工程机械8</div>
                  <div>编号</div>
                  <a>详情</a>
                </Card.Grid>
              </Card>
            </div>
        )
    }
}
export default homepage