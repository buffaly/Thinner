import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { lifecycle, compose } from 'recompose';

const { Header, Content, Footer } = Layout;

const PairPage = () => (
  <Content style={{ padding: '0 50px', marginTop: 64 }}>
    <section>
      <div>
        <input type="text" id="room-id" value="" autoCorrect="off" autoCapitalize="off" size="20" />
        <button id="open-room">Open Room</button>
        <button id="join-room">Join Room</button>
        <button id="open-or-join-room">Auto Open Or Join Room</button>

        <button id="share-screen">Share Screen</button>

        <div id="room-urls"></div>
      </div>

      <div id="videos-container"></div>

      <script src="https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.min.js"></script>
      <script src="https://cdn.webrtc-experiment.com/getMediaElement.js"></script>
      <script src="https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js"></script>
      <script src="https://cdn.webrtc-experiment.com:443/getScreenId.js"></script>
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
      document.getElementById('open-room').onclick = function() {
          connection.open(document.getElementById('room-id').value, function() {
              showRoomURL(connection.sessionid);
          });
      };
      document.getElementById('join-room').onclick = function() {
          connection.join(document.getElementById('room-id').value);
      };
      document.getElementById('open-or-join-room').onclick = function() {
          connection.openOrJoin(document.getElementById('room-id').value, function(isRoomExists, roomid) {
              if(!isRoomExists) {
                  showRoomURL(roomid);
              }
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
      connection.videosContainer = document.getElementById('videos-container');
      connection.onstream = function(event) {
          if(document.getElementById(event.streamid)) {
              var existing = document.getElementById(event.streamid);
              existing.parentNode.removeChild(existing);
          }
          
          var width = parseInt(connection.videosContainer.clientWidth / 2) - 20;
          
          if(event.stream.isScreen === true) {
              width = connection.videosContainer.clientWidth - 20;
          }
          
          var mediaElement = getMediaElement(event.mediaElement, {
              title: event.userid,
              buttons: ['full-screen'],
              width: width,
              showOnMouseEnter: false
          });
          connection.videosContainer.appendChild(mediaElement);
          setTimeout(function() {
              mediaElement.media.play();
          }, 5000);
          mediaElement.id = event.streamid;
      };
      connection.onstreamended = function(event) {
          var mediaElement = document.getElementById(event.streamid);
          if(mediaElement) {
              mediaElement.parentNode.removeChild(mediaElement);
          }
      };
      // ......................................................
      // ......................Handling Room-ID................
      // ......................................................
      function showRoomURL(roomid) {
          var roomHashURL = '#' + roomid;
          var roomQueryStringURL = '?roomid=' + roomid;
          var html = '<h2>Unique URL for your room:</h2><br>';
          html += 'Hash URL: <a href="' + roomHashURL + '" target="_blank">' + roomHashURL + '</a>';
          html += '<br>';
          html += 'QueryString URL: <a href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';
          var roomURLsDiv = document.getElementById('room-urls');
          roomURLsDiv.innerHTML = html;
          roomURLsDiv.style.display = 'block';
      }
      (function() {
          var params = {},
              r = /([^&=]+)=?([^&]*)/g;
          function d(s) {
              return decodeURIComponent(s.replace(/\+/g, ' '));
          }
          var match, search = window.location.search;
          while (match = r.exec(search.substring(1)))
              params[d(match[1])] = d(match[2]);
          window.params = params;
      })();

      var roomid = '';
      if (localStorage.getItem(connection.socketMessageEvent)) {
          roomid = localStorage.getItem(connection.socketMessageEvent);
      } else {
          roomid = connection.token();
      }
      document.getElementById('room-id').value = roomid;
      document.getElementById('room-id').onkeyup = function() {
          localStorage.setItem(connection.socketMessageEvent, this.value);
      };
      var hashString = location.hash.replace('#', '');
      if(hashString.length && hashString.indexOf('comment-') == 0) {
        hashString = '';
      }
      var roomid = params.roomid;
      if(!roomid && hashString.length) {
          roomid = hashString;
      }
      if(roomid && roomid.length) {
          document.getElementById('room-id').value = roomid;
          localStorage.setItem(connection.socketMessageEvent, roomid);
          // auto-join-room
          (function reCheckRoomPresence() {
              connection.checkPresence(roomid, function(isRoomExists) {
                  if(isRoomExists) {
                      connection.join(roomid);
                      return;
                  }
                  setTimeout(reCheckRoomPresence, 5000);
              });
          })();
      }

    },
  }),
)(PairPage);
