import * as React from 'react';
// const {Content, Header, Sider } = Layout;
// import {Icon  ,Layout,Menu} from 'antd';
import { Button,Divider } from 'antd';
import { inject, observer } from "mobx-react";
interface Props{
  question:any,
  title:any
}
// const { SubMenu } = Menu;
@inject('question')
@observer
class Router extends React.Component<Props>{
  constructor(props: any){
    super(props);
}
  state={
  list:[]
}
componentDidMount(){
  this.getList()
}
getList =async ()=>{
  let {getQuestion}=this.props.question;
  const result = await getQuestion();
  this.setState({
    list:result.data
  })
}
    public render() {
      const {list} = this.state
      console.log(list)
       return(
          <div>
            {list.map&&list.map((item:any,index)=><div key={index}>
               <div className='left'>
                    <li><Button type="link" className='top'>{item.title}</Button></li>
                    <li><Button type="danger" className='center'>{item.questions_type_text}</Button><Button className='center'>{item.subject_text}</Button><Button type="primary" className='center'>{item.exam_name}</Button></li>
                    <li><Button type="link" className='bottom'>{item.questions_type_text}</Button></li>
                    <Button type="primary" className='right'>编辑</Button>
                    <Divider />
                 </div>
            </div>)}
              {/* <Layout>
     <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '48px' }}
      >
        <Menu.Item key="1">八维管理系统</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                试卷管理
              </span>
            }
          >
            <Menu.Item key="1">添加试题</Menu.Item>
            <Menu.Item key="2">试题分类</Menu.Item>
            <Menu.Item key="3">查看试题</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                 用户管理
              </span>
            }
          >
            <Menu.Item key="5">添加用户</Menu.Item>
            <Menu.Item key="6">用户处理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                考试管理
              </span>
            }
          >
            <Menu.Item key="7">添加考试</Menu.Item>
            <Menu.Item key="8">试题列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="notification" />
                班级管理
              </span>
            }
          >
            <Menu.Item key="9">班级管理</Menu.Item>
            <Menu.Item key="10">教室管理</Menu.Item>
            <Menu.Item key="11">学生管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="notification" />
                阅卷管理
              </span>
            }
          >
            <Menu.Item key="12">待批班级</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 20,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout> */}
          </div>
      )
    }
}
export default Router