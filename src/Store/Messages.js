import {makeAutoObservable} from "mobx";
import Auth from "./Auth";

class Messages {
    messages = [
        {
            id: 1,
            sender: "Andrew",
            message: "Hello, its my mega project on React)"
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    index() {
        return this.messages.length + 1;
    }

    addMessage(sender, message) {
        this.messages.push({
            id: this.index(),
            sender: sender,
            message: message
        });
    }

    removeMessage(id, userName) {
        for (let i = 0; i < this.messages.length; i++) {
            if(this.messages[i].sender === userName) {
                this.messages = this.messages.filter(message => message.id !== id);
            }
        }
    }
}
export default new Messages();