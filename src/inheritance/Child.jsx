import Emoji from "../inheritance/Emoji";

class Child extends Emoji{
constructor(props){
super(props)

}

render(overReitten){
    let decoratedText = this.AddEmoji("imoji", "I am javaScript Lover")
    return super.render(decoratedText);
}



}

export default Child