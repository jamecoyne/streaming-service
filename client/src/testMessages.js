import React from 'react';
import Chat from './chatBox';


const testMessages = [
    { 
        author: "me",  //if the author is "me", messages will display on the right side
        data: {text: "😳"}, //emoji can be included in a data.text string in a text type, and display as the font size
        type: "text",
    },
    { 
        author: "me",
        data: {emoji: "😳"}, //emoji can be included in a string as a data.emoji, with type: emoji, and display larger than text
        type: "emoji",
    },
    { 
        author: "Hank", //if the messages are anyone else, the messages will appear on the left side
        data: {text: "I sell propane and propane accessories😔"},
        type: "text"
    },
    { 
        author: "Bobby",
        data: {text: "Okay dad"},
        type: "text"
    },
    { 
        author: "Peggy",
        data: {text: "Has Left the Chat"},
        type: "alert" //the alert type shows up differntly than normal messages. Useful for leaving/entering the chat
    },
    { 
        author: "me",
        data: {text: "concludes test"},
        type: "text",
    },
]

export default testMessages;