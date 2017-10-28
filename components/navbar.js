import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
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
                            <a href={'/'}>
                                <img src={'/static/logo/tinner_logo.png'} className="logo" />
                            </a>
                            <Menu.Item key="1" >community</Menu.Item>
                            <Menu.Item key="2">techologyn</Menu.Item>
                            </Menu>
                            <div className="menu-right">
                            <Link href={'/login'}>login</Link>
                            </div>
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
                          .ant-menu-item{
                            text-transform: uppercase;
                          }
                          .menu-right {
                              float:right;
                              color: #000;
                              position: absolute;
                              top: 3px;
                              text-transform: uppercase;
                              right: 30px;
                          }
                          .menu-right a {
                              color: #000;
                          }
                    `}
                </style>
            </div>
        )
    }
}