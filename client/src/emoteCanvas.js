import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import P5Wrapper from 'react-p5-wrapper';

const getPixelRatio = context => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
    
    return (window.devicePixelRatio || 1) / backingStore;
};

function sketch (p) {
    let rotation = 0;
  
    function addBigUps(){

    }

    function addClaps(){

    }

    var objects = [];

    var clap;
    var bigups;

    p.preload = function () {
        clap = p.loadImage("clap.png");
        bigups = p.loadImage("arrow.png");
    }

    p.setup = function () {
      p.createCanvas(window.innerWidth/3, window.innerHeight, p.WEBGL);

      console.log('width:' + p.width);
      console.log('height:' + p.height);

        for(var i = 0; i < 20; i++){
            objects.push({
                type: 'clap',
                x: ((Math.random() * p.width- 50) - (p.width- 50)/2),
                y: ((Math.random() * p.height)),
                speed: (Math.random() * 3) + 1
            });
            objects.push({
                type: 'bigups',
                x: ((Math.random() * p.width- 50) - (p.width- 50)/2),
                y: ((Math.random() * p.height)),
                speed: (Math.random() * 3) + 1
            });
        }
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation !== null){
        rotation = props.rotation * Math.PI / 180;
      }
    };
  
    p.draw = function () {

        p.noStroke();
        p.background(0,0,0,0);
        objects.forEach((object) => {
            if(object.type == 'clap'){
                p.image(clap, object.x, object.y); 
            }
            else{
                p.image(bigups, object.x, object.y);
            }
            object.y -= object.speed;
            if(object.y < 0 - p.height/2) {
                object.y = p.height;
            }
        });
 
        
    };
  };
  

const EmoteCanvas = () => {
    return(
        <div  className = {'emote'}>
            <P5Wrapper sketch={sketch} />
        </div>
        )
};

export default EmoteCanvas;