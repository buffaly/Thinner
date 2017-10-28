import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Card, Col, Row } from 'antd';
import Navbar from '../components/navbar';
import React from 'react';
import fetch from 'isomorphic-fetch';
import JSONPretty from 'react-json-pretty';

export default class Feed extends React.Component {
    render() {
        
        return (
            <div className="container clearfix">
                <h3 className="ranksTitle">my favorite code</h3>
                <br/>
                <JSONPretty id="json-pretty" json={this.props.json2}></JSONPretty>
            </div>
        )
    }
}