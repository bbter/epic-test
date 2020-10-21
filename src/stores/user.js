import {observable, action, makeObservable} from "mobx";
import {Auth} from "../models";

class UserStore {
    constructor() {
        makeObservable(this);
    }

    @observable currentUser = JSON.parse(localStorage.getItem('currentUser')) || ''

    @action pullUser(){
        this.currentUser =Auth.getCurrentUser().attributes.username
        localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }

    @action resetUser(){
        this.currentUser = null
    }

}

export default new UserStore();