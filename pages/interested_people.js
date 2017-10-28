import { Steps, Avatar ,Card,Form, Icon, Input, Button, Checkbox, Row, Col,Layout,Menu, Breadcrumb  } from 'antd';
import ReactDOM from 'react-dom'
const FormItem = Form.Item;
const { Header, Content, Footer } = Layout;
const Step = Steps.Step;
export default () =>
      <div>
      <Layout>
      <Header style={{ position: 'fixed', width: '100%',zIndex:999 }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">HOME</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        
          <Row>
      <Col span={12} offset = {6}>
      <Steps current={2}>
      <Step title="Step 1 " description="" />
      <Step title="Step 2" description="" />
      <Step title="Step 3" description="" />
      </Steps>
      <h2 style={{textAlign: 'center',marginTop:30}}>Follower</h2>
        <Form className="login-form" style={{marginTop:10}}>
        <FormItem>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="dtinth" style={{textAlign:'center'}} bordered={false}>
            <center>
            <Avatar size="large" src="https://avatars3.githubusercontent.com/u/193136?s=400&v=4" width="100px" />
            <p>Javascript Expert</p>
            <Button type="primary">follow</Button>
            </center>
            </Card>
          </Col>
          <Col span={8}>
          <Card title="wannaphongcom" style={{textAlign:'center'}} bordered={false}>
          <center>
          <Avatar size="large"   src="https://avatars1.githubusercontent.com/u/8536487?s=400&v=4" width="100px" />
          <p>Python Expert</p>
          <Button type="primary">follow</Button>
          </center>
          </Card>
        </Col>
        <Col span={8}>
        <Card title="roofimon" style={{textAlign:'center'}} bordered={false}>
        <center>
        <Avatar size="large"  src="https://avatars0.githubusercontent.com/u/29492?s=400&v=4" width="100px"/>
        <p>Java Expert</p>
        <Button type="primary">follow</Button>
        </center>
        </Card>
      </Col>
        </Row>
      </div>
        </FormItem>
        <FormItem>
        <Col span={10}></Col>
        <Col span={2} style={{marginLeft:12}}>
        <Button
        onClick
        type="primary"
        htmlType="submit"
      >
        Done
      </Button>
        </Col>
         
        </FormItem>
        </Form>
        </Col>
      </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by ดมกาว
      </Footer>
    </Layout>
    </div>