import React, { Component } from 'react';
import './ForFunTimeline.css';

class CaptionImg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column">
        <img className="for-fun-pics" src={this.props.src}></img> 
        <h4 className="caption">{this.props.caption}</h4>
      </div>
    )
  }
}

class CaptionVid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column">
        <video width="400" controls src={this.props.src} type="video/mp4"/>
        <h4 className="caption">{this.props.caption}</h4>
      </div>
    )
  }
}

export default class ForFunTimeline extends Component {
  constructor(props){
    super(props);
    console.log("ForFunTimelineProps: ");console.log(this.props.bgColor);
    this.cardSize = "240px";
  }

  render() {
    return (
      <div id={this.props.id} style={{backgroundColor: this.props.bgColor}}>
        <div style={{backgroundColor: "white"}} className="d-flex justify-content-center">
          <h3 id="titleExperience">For Fun</h3>
        </div>
        
        <div className="container d-flex" >
          <div className="w3-row-padding  w3-center w3-margin-top ">
          <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img className="title-logo" src={require("./../images/lifePics/aud.jpeg")}></img>
                <h3 className="title">After Hours</h3>
                <div className="container">
                  <p className="description">
                    In my spare time I enjoy playing basketball, jamming with friends (I play the guitar), and lifting weights. I recently formed a band with some close friends and have some demos to share. We are also scheduled for our first show in September of 2022. I also recently achieved a major goal basketball of getting a solid dunk thanks to strength training.
                  </p>
                </div>
                
              </div> 
            </div>
            <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img className="title-logo" src={require("./../images/lifePics/mr-kat-logo.jpg")}></img>
                <h3 className="title">Mr. Kat Band</h3>
                <div className="container">
                  <p className="description">
                    Disclaimer: Some of the songs have some swearing and suggestive content. Nothing too outlandish.
                  </p>
                </div>
                <div className="container">
                  <div className="row justify-content-around">
                    <CaptionVid src={require("./../images/lifePics/bastard.mov")} caption="bastard demo [demo]"/>
                    <CaptionVid src={require("./../images/lifePics/redruM.mov")} caption="redrum demo [demo]"/>
                    <CaptionVid src={require("./../images/lifePics/teeth-solo.mov")} caption="teeth remote jam sesh"/>
                    <CaptionVid src={require("./../images/lifePics/u-mean-it.mov")} caption="u mean it [demo]"/>
                    <CaptionVid src={require("./../images/lifePics/teeth.mov")} caption="teeth duet w/ Kat"/>
                    <CaptionImg src={require("./../images/lifePics/mr-kat-sticker.jpg")} caption="Mr. Kat sticker"/>
                    <CaptionImg src={require("./../images/lifePics/sticker-laptop.jpg")} caption="sticker's home"/>
                  </div>
                </div>
              </div> 
            </div>
            <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img width="100px" height="100px" src={"https://img.icons8.com/doodle/200/000000/basketball.png"} alt="basketball"/>
                <h3 className="title">Basketball</h3>
                <div className="container">
                  <p className="description">
                    Finally figured out how to dunk in basketball nicely recently. It'd been a long time coming considering how long I've played.
                  </p>
                  <div className="container">
                    <div className="row justify-content-around">
                      <CaptionVid src={require("./../images/lifePics/dunk1.mov")} caption="dunk #1"/>
                      <CaptionVid src={require("./../images/lifePics/dunk2.mov")} caption="dunk #2"/>
                      <CaptionVid src={require("./../images/lifePics/dunk3.mov")} caption="dunk #3"/>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div className="w3-margin-bottom">
              <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{minHeight:this.cardSize, backgroundColor: this.props.cardColor}}>
                <img width="100px" height="100px" src={"https://img.icons8.com/bubbles/200/000000/camera.png"} alt="camera"/>
                <h3 className="title">Various pictures</h3>
                <div className="container">
                  <p className="description">
                    Here's some photos with friends and my fiance, Audrey.
                  </p>
                </div>
                <div className="container">
                  <div className="row justify-content-around">
                    
                    <CaptionImg src={require("./../images/lifePics/aud.jpeg")} caption="picnic with Audrey"></CaptionImg>
                    <CaptionImg src={require("./../images/lifePics/aud2.jpeg")} caption="another pic with Audrey"></CaptionImg>
                    <CaptionImg src={require("./../images/lifePics/me.jpeg")} caption="at practice zoning out"></CaptionImg>
                    <CaptionImg src={require("./../images/lifePics/band-pic.JPG")} caption="Mr. Kat band practice "></CaptionImg>
                    <CaptionImg src={require("./../images/lifePics/paris.jpeg")} caption="in front of Paris hotel in Vegas"></CaptionImg>
                    <CaptionImg src={require("./../images/lifePics/friends-eating.jpg")} caption="restaurant with friends"></CaptionImg>
                    <CaptionImg src={require("./../images/lifePics/portrait.jpeg")} caption="large portraits @ paris hotel"></CaptionImg>
                    <CaptionImg src={require("./../images/lifePics/extendo.jpeg")} caption="funny panorama"></CaptionImg>
                  </div>
                </div>
                
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}