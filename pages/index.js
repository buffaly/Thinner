import { DatePicker } from 'antd';
import stylesheet from 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import Navbar from '../components/navbar'
import Wrapper_Thumbnail from '../components/Wrapper_Thumbnail'
export default class HomePage extends React.Component {
  render(){
    return (
      <div>
        <Navbar/>
         <Content>
           <div className="col-12 wrapper-backgroundImage">
             <img className="logo-center" src={'/static/icon/tinner_icon.png'} />
              <h1>“ Just smell you smile “</h1>
           </div>
         </Content>
         <Wrapper_Thumbnail/>
         <style>{`
            .logo-center {
              width: 160px;
              margin: auto;
              display: block;
              padding-top:150px;
            }
            .wrapper-backgroundImage {
              width:100%;
              background-image:url(/static/background/background.jpg);
              height:600px;
              background-repeat:no-repeat;
              background-size:cover;
              background-position:center top;
            }
            .wrapper-backgroundImage h1 {
              font-family: sukhumvit set,kanit;
              text-align: center;
              color: #fff;
              padding-top: 30px;
              font-size: 40px;
              font-weight: bold;
            }
         `}
         </style>
        </div>
    )
  }

}