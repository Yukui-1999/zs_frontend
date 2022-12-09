import React,{ useState } from "react";

import { Table, Tag, Space ,Input, Row,Col, Button,Image,Divider} from 'antd';
import axios from 'axios'
import { Link} from 'react-router-dom';
import * as echarts from 'echarts'; 
class showdata extends React.Component{

    data = [];
    data1=[];
    data2=[];

    now = new Date(1997, 9, 3);
    oneDay = 24 * 3600 * 1000;
    value = Math.random() * 10;
    value1=Math.random() * 10;
    value2=Math.random() * 10;
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
   randomData1(){
    this.now = new Date(+this.now + this.oneDay);
    this.value1 = this.value1 + Math.random() * 0.21 - 0.1;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value1)
      ]
    };
  }
  randomData2(){
    this.now = new Date(+this.now + this.oneDay);
    this.value2 = this.value2 + Math.random() * 0.21 - 0.1;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value2)
      ]
    };
  }
   
 
   componentDidMount(){  
   let that=this
   for (var i = 0; i < 1000; i++) {
     this.data.push(this.randomData());
     this.data1.push(this.randomData1());
     this.data2.push(this.randomData2());
   }
   
     var mychart1 = echarts.init(document.getElementById('line2'))             
     var option1 = {
       title: {
         text: '三轴加速度随时间变化',
         left:'center'
       },
       legend: {
        data: ['x', 'y','z'],
        top:"6%"
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
         boundaryGap: [0, '30%'],
         splitLine: {
           show: true
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
       series: [
         {
           name: 'x',
           type: 'line',
           showSymbol: false,
           data: this.data
         },
         {
            name: 'y',
            type: 'line',
            showSymbol: false,
            data: this.data1
          },
          {
            name: 'z',
            type: 'line',
            showSymbol: false,
            data: this.data2
          }
       ]
     };
     setInterval(function () {
       for (var i = 0; i < 5; i++) {
         that.data.shift();
         that.data.push(that.randomData());
         that.data1.shift();
         that.data1.push(that.randomData1());
         that.data2.shift();
         that.data2.push(that.randomData2());
       }
       mychart1.setOption({
         series: [
           {
             data: that.data
           },
           {
            data: that.data1
          },
          {
            data: that.data2
          }
         ]
       })
       mychart2.setOption({
        series: [
          {
            data: that.data
          },
          {
           data: that.data1
         },
         {
           data: that.data2
         }
        ]
      })
      mychart3.setOption({
        series: [
          {
            data: that.data
          },
          {
           data: that.data1
         },
         {
           data: that.data2
         }
        ]
      })
      mychart4.setOption({
        series: [
          {
            data: that.data
          },
          {
           data: that.data1
         },
         {
           data: that.data2
         }
        ]
      })
       ;
     
     }, 1000);
     var mychart2 = echarts.init(document.getElementById('line3'))             
     var mychart3 = echarts.init(document.getElementById('line4'))             
     var mychart4 = echarts.init(document.getElementById('line5'))   
     option1&&mychart1.setOption(option1)
     option1&&mychart2.setOption(option1)
     option1&&mychart3.setOption(option1)
     option1&&mychart4.setOption(option1)

    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="line2"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="line3"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="line4"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="line5"></div>
                    </Col>
                </Row>
                <br/>
            </div>
        )
    }
}
export default showdata;