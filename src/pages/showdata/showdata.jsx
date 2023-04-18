import React,{ useState } from "react";

import { Table, Tag, Space ,Input, Row,Col, Button,Image,message} from 'antd';
import axios from 'axios'
import { Link} from 'react-router-dom';
import * as echarts from 'echarts'; 
class showdata extends React.Component{

    state={
      id:this.props.location.state.id,
    }
   
 
   componentDidMount(){  
    var mychart1 = echarts.init(document.getElementById('ax'))      
    var mychart2 = echarts.init(document.getElementById('ay'))             
    var mychart3 = echarts.init(document.getElementById('az'))             
    var mychart4 = echarts.init(document.getElementById('wx'))          
    var mychart5 = echarts.init(document.getElementById('wy'))          
    var mychart6 = echarts.init(document.getElementById('wz'))          
    var mychart7 = echarts.init(document.getElementById('anglex'))          
    var mychart8 = echarts.init(document.getElementById('angley'))          
    var mychart9 = echarts.init(document.getElementById('anglez'))          
    var mychart10 = echarts.init(document.getElementById('q0'))          
    var mychart11 = echarts.init(document.getElementById('q1'))          
    var mychart12 = echarts.init(document.getElementById('q2'))          
    var mychart13 = echarts.init(document.getElementById('q3'))    
    mychart1.showLoading({
      text : '正在加载数据'
    });  
    mychart2.showLoading({
      text : '正在加载数据'
    }); 
    mychart3.showLoading({
      text : '正在加载数据'
    }); 
    mychart4.showLoading({
      text : '正在加载数据'
    }); 
    mychart5.showLoading({
      text : '正在加载数据'
    }); 
    mychart6.showLoading({
      text : '正在加载数据'
    }); 
    mychart7.showLoading({
      text : '正在加载数据'
    }); 
    mychart8.showLoading({
      text : '正在加载数据'
    }); 
    mychart9.showLoading({
      text : '正在加载数据'
    }); 
    mychart10.showLoading({
      text : '正在加载数据'
    }); 
    mychart11.showLoading({
      text : '正在加载数据'
    }); 
    mychart12.showLoading({
      text : '正在加载数据'
    }); 
    mychart13.showLoading({
      text : '正在加载数据'
    }); 

   let that=this
    let ax,ay,az,wx,wy,wz,anglex,angley,anglez,q0,q1,q2,q3
   axios.post('http://localhost:8080/index/showdata', {
    id:this.state.id
})
  .then(function (response) {
    console.log(response)
     
        if (response.status !== 200){
            message.error('出现问题,请联系管理员',3)
        }
        else{
          ax=response.data.ax
          ay=response.data.ay
          az=response.data.az
          wx=response.data.wx
          wy=response.data.wy
          wz=response.data.wz
          anglex=response.data.anglex
          angley=response.data.angley
          anglez=response.data.anglez
          q0=response.data.q0
          q1=response.data.q1
          q2=response.data.q2
          q3=response.data.q3

          console.log(response.data)
          ax.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          ay.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          az.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          wx.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          wy.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          wz.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          anglex.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          angley.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          anglez.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          q0.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          q1.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          q2.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
          q3.forEach(function(item,index,self){
            var now = new Date(2022,11,16,item.name[0],item.name[1],item.name[2],item.name[3])
            item.name=now.getHours() +
            ':' +
            (now.getMinutes()) +
            ':' +
            now.getSeconds() +
            ':' +
            now.getMilliseconds()
            item.value[0]=now.getTime()
          })
        
        }

  }).then(()=>{
        // charts
       
                
          var option1 = {
            title: {
              text: 'X轴加速度随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:ax
              },
            ]
          }

          var option2 = {
            title: {
              text: 'Y轴加速度随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:ay
              },
            ]
          }

          var option3 = {
            title: {
              text: 'Z轴加速度随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:az
              },
            ]
          }

          var option4 = {
            title: {
              text: 'X轴角速度随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:wx
              },
            ]
          }

          var option5 = {
            title: {
              text: 'Y轴角速度随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:wy
              },
            ]
          }

          var option6 = {
            title: {
              text: 'Z轴角速度随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:wz
              },
            ]
          }

          var option7 = {
            title: {
              text: 'X轴欧拉角随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:anglex
              },
            ]
          }

          var option8 = {
            title: {
              text: 'Y轴欧拉角随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:angley
              },
            ]
          }

          var option9 = {
            title: {
              text: 'Z轴欧拉角随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:anglez
              },
            ]
          }

          var option10 = {
            title: {
              text: '四元数q0随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:q0
              },
            ]
          }

          var option11 = {
            title: {
              text: '四元数q1随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:q1
              },
            ]
          }

          var option12 = {
            title: {
              text: '四元数q2随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:q2
              },
            ]
          }

          var option13 = {
            title: {
              text: '四元数q3加速度随时间变化',left:'center'
            },
            legend: {
             top:"6%"
           },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = params.name
                return (
                  date+
                  " : "+
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
              boundaryGap: [0, '10%'],
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
                data:q3
              },
            ]
          }
          mychart1 .hideLoading(); 
          mychart2 .hideLoading(); 
          mychart3 .hideLoading(); 
          mychart4 .hideLoading(); 
          mychart5 .hideLoading(); 
          mychart6 .hideLoading(); 
          mychart7 .hideLoading(); 
          mychart8 .hideLoading(); 
          mychart9 .hideLoading(); 
          mychart10 .hideLoading(); 
          mychart11 .hideLoading(); 
          mychart12 .hideLoading(); 
          mychart13 .hideLoading(); 

          option1&&mychart1.setOption(option1)
          option2&&mychart2.setOption(option2)
          option3&&mychart3.setOption(option3)
          option4&&mychart4.setOption(option4)
          option5&&mychart5.setOption(option5)
          option6&&mychart6.setOption(option6)
          option7&&mychart7.setOption(option7)
          option8&&mychart8.setOption(option8)
          option9&&mychart9.setOption(option9)
          option10&&mychart10.setOption(option10)
          option11&&mychart11.setOption(option11)
          option12&&mychart12.setOption(option12)
          option13&&mychart13.setOption(option13)
          


  })


   

    }
    render(){
        return(
            <div>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="ax"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="ay"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="az"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="wx"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="wy"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="wz"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="anglex"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="angley"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="anglez"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="q0"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="q1"></div>
                    </Col>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="q2"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <br/>
                        <div style={{textAlign:'center', width:'600px',height:'400px'}} id="q3"></div>
                    </Col>
                </Row>
                <br/>
            </div>
        )
    }
}
export default showdata;