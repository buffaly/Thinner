import { Steps,Avatar ,Card,Form, Icon, Input, Button, Checkbox, Row, Col,Layout,Menu, Breadcrumb  } from 'antd';
import ReactDOM from 'react-dom'
const FormItem = Form.Item;
const { Header, Content, Footer } = Layout;
const Step = Steps.Step;
const interested_people = () => {
  window.location="interested_people";
}

export default () =>
      <div>
      <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
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
      <Steps current={1}>
      <Step title="Step 1 " description="" />
      <Step title="Step 2" description="" />
      <Step title="Step 3" description="" />
      </Steps>
      <h2 style={{textAlign: 'center',marginTop:30}}>Programming language</h2>
        <Form className="login-form" style={{marginTop:10}}>
        <FormItem>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Javascript" style={{textAlign:'center'}} bordered={false}>
            <center>
            <Avatar  size="large" src="https://i.stack.imgur.com/Mmww2.png" />
            </center>
            </Card>
          </Col>
          <Col span={8}>
          <Card title="PHP" style={{textAlign:'center'}} bordered={false}>
          <center>
          <Avatar  size="large" src="http://bentino.me/sites/default/files/content-assets/32/featured-image/icon-php1.png" />
          </center>
          </Card>
        </Col>
        <Col span={8}>
        <Card title="Java" style={{textAlign:'center'}} bordered={false}>
        <center>
        <Avatar  size="large" src="https://www.ybrikman.com/assets/img/blog/thumbs/java-logo.png" />
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
        onClick={interested_people}
        type="primary"
        htmlType="submit"
      >
        Next
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