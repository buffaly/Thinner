import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Thumbnail from '../components/Thumbnail'
import About from '../components/about'
export default class Wrapper_Thumbnail extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Content>
                        <Thumbnail/>
                        <About/>
                    </Content>
                </Layout>
            </div>
        )
    }
}