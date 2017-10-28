import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <Menu
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        >
                        <img src={'/static/logo/tinner_logo.png'} className="logo" />
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
                <style>
                    {`
                        .logo{
                            height: 45px;
                            float: left;
                            position: relative;
                            top: 10px;
                          }
                          .ant-layout-header {
                            background: #ffffff;
                            height: 66px;
                          }
                    `}
                </style>
            </div>
        )
    }
}