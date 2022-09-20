import {makeAutoObservable} from "mobx";

class Auth {
    user = "";

    constructor() {
        makeAutoObservable(this);
    }

    addUser(name) {
        if (name !== "") {
            this.user = name;
        }
    }
}

export default new Auth();