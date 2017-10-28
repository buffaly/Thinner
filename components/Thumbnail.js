import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Card, Col, Row } from 'antd';
export default class Thumbnail extends React.Component {
    render() {
        return (
            <div className="container">
              <h2 className="text-center">Follow your interested programing languages ?</h2>
              <br/>
              <br/>
            <Row gutter={16}>
              <Col span={6}>
                <Card bordered={false}>
                    <div className="custom-image">
                          <img width="100%" src="https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/21685949_1667319449945467_5107827221495900261_n.jpg?oh=0cc4179b9bdd23c3bf7ee6c8e40dd3d8&oe=5A74F119" />
                    </div>
                    <br/>
                    <h3 className="DisplayName">panjamapon karnasuta</h3>
                    <p className="position">react developer</p>
                    <button className="follow-btn">follow</button>
                </Card>
              </Col>
              <Col span={6}>
              <Card bordered={false}>
                    <div className="custom-image">
                          <img width="100%" src="https://pbs.twimg.com/profile_images/696472986556239872/XEaLqHNa_400x400.png" />
                    </div>
                    <br/>
                    <h3 className="DisplayName">Somchai jaidee</h3>
                    <p className="position">angular developer</p>
                    <button className="follow-btn">follow</button>
              </Card>
              </Col>
              <Col span={6}>
              <Card bordered={false}>
                    <div className="custom-image">
                          <img width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <br/>
                    <h3 className="DisplayName">panjamapon karnasuta</h3>
                    <p className="position">vue developer</p>
                    <button className="follow-btn">follow</button>
              </Card>
              </Col>
              <Col span={6}>
              <Card bordered={false}>
                    <div className="custom-image">
                          <img width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <br/>
                    <h3 className="DisplayName">panjamapon karnasuta</h3>
                    <p className="position">react developer</p>
                    <button className="follow-btn">follow</button>
              </Card>
              </Col>
            </Row>
            <style>{`
            @import url('https://fonts.googleapis.com/css?family=Kanit');
            .container {
              width:1000px;
              margin:50px auto;
              display:block;
            }
            .text-center {
              text-align: center;
              text-transform: capitalize;
            }
            .custom-image img {
              width:120px;
              height:120px;
              overflow:hidden;
              object-fit:cover;
              object-position:center top;
              border-radius:100px;
              margin:auto;
              display:block;
              padding:10px;
            }
            .DisplayName {
              text-align: center;
              text-transform: capitalize;
              font-size:16px;
              font-family: sukhumvit set,kanit;
              margin-bottom:10px;
            }
            .position {
              color:#777;
              text-align: center;
              text-transform: capitalize;
              font-size:13px;
              margin-bottom:20px;
            }
            .follow-btn {
              width: 100%;
              height: 36px;
              border: 0;
              cursor: pointer;
              color: #fff;
              background-color:#21AB41;
              text-transform: uppercase;
              font-size: 13px;
              border-radius: 3px;
            }
            `}</style>
          </div>
        )
    }
}