import { Steps,Form, Icon, Input, Button, Checkbox, Row, Col,Layout,Menu, Breadcrumb  } from 'antd';
import ReactDOM from 'react-dom'
const FormItem = Form.Item;
const { Header, Content, Footer } = Layout;
const Step = Steps.Step;

const register = () => {
  window.location="register";
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
      <h2 style={{marginTop:30}}>Login</h2>
        <Form className="login-form" style={{marginTop:10}}>
        <FormItem>
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
        </FormItem>
        <FormItem>
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
        <Col span={10}></Col>
        <Col span={2}>
        <Button
        type="primary"
        htmlType="submit"
        onClick={register}
      >
        Login
      </Button>
        </Col>
         
        </FormItem>
        </Form>
        <a style={{textAlign:'center'}} href="register">Sign Up</a>
        </Col>
      </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by ดมกาว
      </Footer>
    </Layout>
    </div>