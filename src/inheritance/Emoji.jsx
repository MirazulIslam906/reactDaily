import React from "react";

export default class Emoji extends React.Component{
  

    AddEmoji =(emoji, text)=> `${emoji} ${text} ${emoji}`;


    render(overReitten){
        let text = "I am a imoji component"
        if (overReitten){
            text = overReitten;
        }
        return <div>{text}</div>
    }

}