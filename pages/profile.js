import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Card, Col, Row } from 'antd';
import Navbar from '../components/navbar';
export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="col-12 backgroundCover">
                    <div className="avatarImage">
                        <img src={'https://pbs.twimg.com/profile_images/921412284567695360/DhyoYZZj_400x400.jpg'}/>
                        <br/>
                        <h3 className="text-center username">happyudong</h3>
                        <br/>
                        <p className="position text-center">react developer</p>
                    </div>
                </div>
                <div className="container clearfix">
                    <h3 className="ranksTitle">my ranks</h3>
                    <br/>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Row gutter={16}>
                        <Col span={8}>
                            <Card className="listName" bordered={false}>
                                <div className="ranksImage">
                                    <img src={'/static/icon/react_icon.png'}/>
                                </div>
                                <div className="status">
                                    <br/>
                                    <h3 className="text-center">react</h3>
                                    <br/>
                                    <p>star : 60,000 fork : 700,00 watch : 750,000</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="listName" bordered={false}>
                                <div className="ranksImage">
                                    <img src={'/static/icon/nextJS_icon.png'}/>
                                </div>
                                <div className="status">
                                    <br/>
                                    <h3 className="text-center">next.js</h3>
                                    <br/>
                                    <p>star : 90,000 fork : 400,00 watch : 350,000</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="listName" bordered={false}>
                                <div className="ranksImage">
                                    <img src={'/static/icon/graphQL.png'}/>
                                </div>
                                <div className="status">
                                    <br/>
                                    <h3 className="text-center">graphQL</h3>
                                    <br/>
                                    <p>star : 30,000 fork : 100,00 watch : 130,000</p>
                                </div>
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </div>
                <style>{`
                    .clearfix {
                        clear:both;
                    }
                    .text-center {
                        text-align: center;
                    }
                    .username {
                        color: #fff;
                        font-size: 20px;
                        text-transform: capitalize;
                        font-family: sukhumvit set,kanit;
                    }
                    .position {
                        color:#fff;
                        text-transform: capitalize;
                        font-family: sukhumvit set,kanit;
                        font-size:14px;
                    }
                    .backgroundCover {
                        height:400px;
                        background:linear-gradient(rgba(0, 0, 0, 0.36), rgba(0, 0, 0, .7)), url(https://images.unsplash.com/photo-1492138786289-d35ea832da43?auto=format&fit=crop&w=1650&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
                        background-size:cover;
                        backgroud-position:center top;
                    }
                    .avatarImage {
                        height: 160px;
                        top: 70px;
                        position: relative;
                    }
                    .avatarImage img {
                        width: 160px;
                        height: auto;
                        overflow: hidden;
                        margin: auto;
                        display: block;
                        object-fit: cover;
                        object-position: center top;
                        border-radius:100px;
                        box-shadow: 2px 1px 6px #000;
                        border: 5px solid #fff;
                    }
                    .container {
                        width:1024px;
                        height:auto;
                        margin:50px auto;
                        display:block;
                    }
                    .ranksTitle {
                        font-size:24px;
                        text-transform: uppercase;
                    }
                    .listName .ant-card-head-title{
                        font-size:16px;
                        text-transform: uppercase;
                        font-weight: bold;
                    }
                    .ranksImage {
                        width: 100%;
                        height: 265px;
                        overflow: hidden;
                    }
                    .ranksImage img {
                        width: 100%;
                        overflow: hidden;
                        object-fit: cover;
                        object-position: center top;
                        padding: 30px;
                    }
                    .status {
                        border-top: 1px solid #e9e9e9;
                        padding-top: 0;
                        margin-top: 20px;
                    }
                    .status h3 {
                        font-size: 24px;
                        text-transform: uppercase;
                    }
                    .status p {
                        display:block;
                        color: #777;
                        text-transform: uppercase;
                        font-size: 12px;
                        text-align:center;
                    }
                `}</style>
            </div>
        )
    }
}
