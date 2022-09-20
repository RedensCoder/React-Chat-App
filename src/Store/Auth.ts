import {makeAutoObservable} from "mobx";

class Auth {
    user: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    addUser(name): void {
        if (name !== "") {
            this.user = name;
        }
    }
}

export default new Auth();