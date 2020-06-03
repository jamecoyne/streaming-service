import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import VideoFrame from './videoFrame';
import BigUp from './bigup';
import Clap from './clap';
import Chat from './chatBox';
import EmoteCanvas from './emoteCanvas';

function App() {
  return (<div>
    
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-1 text-left">
          <img src="Masary_Logo_IG2.png" width="100%" />
        </div>
        <div className="col-8" style={{ height: "80 vh", marginTop: "1%" }}>
          <div
            className="row d-block justify-content-end align-items-end"
            style={{ height: "85vh" }}
            id="mainbox"
          >
            <div className="col-10 float-left align-self-center">
              <div className="row" style={{ marginBottom: "5vh" }}>
                <VideoFrame username="TESTNAME"/>
                <VideoFrame username="TESTNAME"/>
              </div>
              <div className="row">
                <VideoFrame username="TESTNAME"/>
                <VideoFrame username="TESTNAME"/>
              </div>
            </div>
            <div className="col-2 float-right" style={{ marginTop: "45vh" }}>
              <BigUp/>
              <Clap/>
            </div>
          </div>
          <div className="row justify-content-end align-items-end">
            <div className="col">
              <img
                className="float-right"
                src="ALOHA.png"
                style={{ height: "50%", width: "15%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-3" style={{ backgroundColor: "#8f3dc2" }}>
          <Chat/>
        </div>
      </div>
    </div>
    <EmoteCanvas />
  </div>
  );
}

export default App;
