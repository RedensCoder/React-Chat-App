import {makeAutoObservable} from "mobx";

class Messages {
    constructor() {
        makeAutoObservable(this);
        type messagesType = {
            id: number,
            sender: string,
            message: string
        }

    }

    messages = [
        {
            id: 1,
            sender: "Andrew",
            message: "Hello, its my mega project on React)"
        }
    ];

    index(): number {
        return this.messages.length + 1;
    }

    addMessage(sender, message): void {
        this.messages.push({
            id: this.index(),
            sender: sender,
            message: message
        });
    }

    removeMessage(id, userName): void {
        for (let i = 0; i < this.messages.length; i++) {
            if(this.messages[i].sender === userName) {
                this.messages = this.messages.filter(message => message.id !== id);
            }
        }
    }
}
export default new Messages();