import { Layout, Menu, Breadcrumb,Card } from 'antd';
const { Header, Content, Footer } = Layout;

//import * as firebase from 'firebase';
import React, { Component,PropTypes } from "react";

import firebase from '../firebaseinit';


class Notification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // dataSource: new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2,
      // }),
      // เอาไว้ใช้ดัก popup ของ react-native-prompt
      // message: '',
      // promptVisible: false
      totalNotificaiton : []
    };
     this.itemsRef = this.getRef().child('items');
  }

  listenForItems(itemsRef) {
    //console.log('Is This working ?');
    itemsRef.on('value', (snap) => {
      console.log(snap);
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      console.log('This is items >>',items);
      this.setState({
        //dataSource: this.state.dataSource.cloneWithRows(items)
        totalNotificaiton : items
      });

      //console.log('This is items >>',items);
    });
  }

  getRef() {
    return firebase.database().ref();
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
    // เดิมที่ DataSource เป็น Static
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
    // })
  }

  // _renderItem(item) {
  //   return (
  //     <ListItem item={item} />
  //   );
  // }

  render() {
        //console.log(firebase.name);
        console.log(firebase.database().ref().child('items'));
        console.log(this.state.totalNotificaiton);
        return (
          <Layout className="layout">
            <Header>
              <div style={{ width: 120 , height: 31, float: 'left', background: '#333', borderRadius: 6,margin: '16px 24px 16px 0'}}/>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>Notification</Breadcrumb.Item>
              </Breadcrumb>

              {/* Just a mockup data */}
              <Card style={{ width: 300, textAlign: 'center' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>

              {this.state.totalNotificaiton.map((item, index) =>
                <Card key={item+index}style={{ width: 300, textAlign: 'center' }}>
                  <p>{item.title}</p>
                </Card>
                )
              }

              {/* detailInfo.product_recommend.map((product, index) => <CartPopUpRecommendedProductItem product={product} closePopup={closePopup} />) */}



            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        );
    }
}

export default Notification;
