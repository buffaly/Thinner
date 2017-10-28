import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Card, Col, Row } from 'antd';
import React from 'react' 
import isomorphic_fetch from 'isomorphic-fetch'
export default class About extends React.Component {      
    render() {
        return (
            <div>
                <Row>
              <div className="people_connect">
                <img src={'/static/image/people_connect.png'} />
                <h1 className="text-center aboutTitle">what's tinner ?</h1>
              </div>
                </Row>
                <style>{`
                .aboutTitle {
                    margin-top:40px;
                    text-align:center;
                    color:#fff;
                    font-size:px;
                }
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