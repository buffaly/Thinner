import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Card, Col, Row } from 'antd';
export default class About extends React.Component {
    render() {
        return (
            <div>
                <Row>
              <div className="people_connect">
                <img src={'/static/image/people_connect.png'} />
              </div>
                </Row>
                <style>{`
                .people_connect {
                    width:100%;
                    height:auto;
                    background-color:#314A62;
                    padding:50px;
                }
                .people_connect img {
                    height: 400px;
                    margin: auto;
                    display: block;
                  }
                `}</style>
            </div>
        )
    }
}