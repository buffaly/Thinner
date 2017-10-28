import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Card, Col, Row } from 'antd';
import Navbar from '../components/navbar';
import React from 'react';
import fetch from 'isomorphic-fetch';
import Feed from '../components/feed';
export default class Profile extends React.Component {
    static async getInitialProps()  {
        const res = await fetch('https://api.github.com/users/dtinth')
        const json = await res.json()

        const res2 = await fetch('https://api.github.com/users/dtinth/repos?per_page=20')
        const json2 = await res2.json();
        return {
            name: json.name,
            id: json.id,
            followers: json.followers,
            following: json.following,
            avatar_url: json.avatar_url,
            name: json.name,
            json2: json2,
        }
    }
    render() {
        return (
            <div>
                <div className="col-12 backgroundCover">
                    <div className="avatarImage">
                        <img src={this.props.avatar_url}/>
                        <br/>
                        <h3 className="text-center username">{this.props.name}</h3>
                        <br/>
                        <p className="position text-center">react developer</p>
                        <br/>
                        <div className="follow">
                            <p>followers  {this.props.followers}</p>
                            <p>following  {this.props.following}</p>
                        </div>

                    </div>
                </div>
                <Feed json2={this.props.json2}/>
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
                        margin-left:30px;
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
                    .follow {
                        width: 200px;
                        margin: auto;
                        margin-left: 43.4%;
                        float: none;
                        text-align: center;
                        display: block;
                    }
                    .follow p {
                        color:#fff;
                        float:left;
                        margin-right:15px;
                    }
                `}</style>
            </div>
        )
    }
}
