import React from 'react';
import { Layout, Button } from 'antd';
import { lifecycle, compose } from 'recompose';

const { Header, Content, Footer } = Layout;

const PairPage = props => (
  <Content style={{ padding: '0 50px', marginTop: '50px' }}>
    <section>
      <div id="tool-steam-box" style={{ textAlign: 'center', padding: '100px' }}>
        <input type="hidden" id="room-id" value={props.url.query.pairId} />
        <Button type="primary" icon="caret-right" size="large" id="open-or-join-room" style={{ height: '80px', padding: '0 40px', fontSize: '24px' }}>Start</Button>
        <br/>
        <br/>
        <a href="https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk" target="_blank">
            install Chrome extension
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div id="room-urls"></div>
      </div>


      <div id="videos-container1" style={{ width: '50%', float: 'left' }}></div>
      <div id="videos-container2" style={{ width: '50%', float: 'left' }}></div>

     <div id="child-pair-tool" style={{ display: 'none' }} >
        <br/><br/>
        <Button type="primary" icon="laptop" id="share-screen" style={{ height: '42px', padding: '0 30px', fontSize: '16px' }}>Share your screen</Button>
        <br/><br/>
     </div>
      <div id="profile-container"></div>

    </section>
  </Content>
);

export default compose(
  lifecycle({
    componentDidMount() {

      document.getElementById('share-screen').onclick = function() {
          connection.addStream({
              screen: true,
              oneway: true
          });
      };

      document.getElementById('open-or-join-room').onclick = function() {
          connection.openOrJoin(document.getElementById('room-id').value, function(isRoomExists, roomid) {
              if(!isRoomExists) {
                  showRoomURL(roomid);
              }
              connection.addStream({
                screen: true,
                oneway: true
                });
                document.getElementById('tool-steam-box').remove();
          });
      };
      // ......................................................
      // ..................RTCMultiConnection Code.............
      // ......................................................
      var connection = new RTCMultiConnection();
      
      // Using getScreenId.js to capture screen from any domain
      // You do NOT need to deploy Chrome Extension YOUR-Self!!
      connection.getScreenConstraints = function(callback) {
          getScreenConstraints(function(error, screen_constraints) {
              if (!error) {
                  screen_constraints = connection.modifyScreenConstraints(screen_constraints);
                  callback(error, screen_constraints);
                  return;
              }
              throw error;
          });
      };
      // by default, socket.io server is assumed to be deployed on your own URL
      connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
      // comment-out below line if you do not have your own socket.io server
      // connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
      connection.socketMessageEvent = 'audio-video-screen-demo';
      connection.session = {
          audio: true,
          video: true
      };
      connection.sdpConstraints.mandatory = {
          OfferToReceiveAudio: true,
          OfferToReceiveVideo: true
      };
      var containnerVideo = document.getElementById('videos-container1');
      if (document.getElementById('videos-container1').innerHTML) {
        containnerVideo = document.getElementById('videos-container2');
      }
      connection.videosContainer = containnerVideo;
      connection.onstream = function(event) {
          if(document.getElementById(event.streamid)) {
              var existing = document.getElementById(event.streamid);
              existing.parentNode.removeChild(existing);
          }
          
          var width = parseInt(connection.videosContainer.clientWidth / 4) - 20;
          
          if (event.stream.isScreen === true) {
              width = connection.videosContainer.clientWidth;
          }
          
          var mediaElement = getMediaElement(event.mediaElement, {
              title: event.userid,
              buttons: ['full-screen'],
              width: width,
              showOnMouseEnter: false
          });

          setTimeout(function() {
              mediaElement.media.play();
          }, 5000);
          mediaElement.id = event.streamid;

          if(event.stream.isScreen === true && !document.getElementById('videos-container1').innerHTML) {
            document.getElementById('videos-container1').appendChild(mediaElement);
          } else if(event.stream.isScreen === true && document.getElementById('videos-container1').innerHTML) {
            document.getElementById('videos-container2').appendChild(mediaElement);
            var queue = document.getElementById('videos-container2'); // Get the list whose id is queue.
            var elements = queue.getElementsByTagName('div'); // Get HTMLCollection of elements with the li tag name.
            if (elements.length > 6) {
                queue.removeChild(elements[0]);
            }
          } else {
            document.getElementById('profile-container').appendChild(mediaElement);
          }
      };
      connection.onstreamended = function(event) {
          console.log(event);
          var mediaElement = document.getElementById(event.streamid);
          if(mediaElement) {
              mediaElement.parentNode.removeChild(mediaElement);
          }
      };
      // ......................................................
      // ......................Handling Room-ID................
      // ......................................................
      function showRoomURL(roomid) {
          var roomHashURL = '/pair/' + roomid;
          var html = 'Share this URL: <a href="' + roomHashURL + '" target="_blank">' + roomHashURL + '</a>';
          html += '<br>';
          var roomURLsDiv = document.getElementById('room-urls');
          roomURLsDiv.innerHTML = html;
          roomURLsDiv.style.display = 'block';
      }

      var roomid = this.props.url.query.pairId;
      
      if(roomid && roomid.length) {
          // auto-join-room
          (function reCheckRoomPresence() {
              connection.checkPresence(roomid, function(isRoomExists) {
                  if(isRoomExists) {
                        document.getElementById('tool-steam-box').remove();
                      document.getElementById('child-pair-tool').style.display = 'block';
                      connection.join(roomid);
                      return;
                  }
                  setTimeout(reCheckRoomPresence, 1000);
              });
          })();
      }

    },
  }),
)(PairPage);
