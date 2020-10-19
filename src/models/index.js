import AV, {Query, User} from "leancloud-storage";

AV.init({
    appId: "K68R89836OGSdv9RPnlhel0I-gzGzoHsz",
    appKey: "kQUtnql9BMq4Y0qdpGApg6p3",
    serverURL: "https://k68r8983.lc-cn-n1-shared.com"
});


const Auth = {
    register(username, password) {
        let user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return new Promise((resolve, reject) => {
            user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error));
        });
    },
    login(username, password) {
        console.log('---------')
        console.log(username)
        console.log(password)
        return new Promise((resolve, reject) => {
            User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error));
        });
    },
    logout() {
        User.logOut();
    },
    getCurrentUser() {
        return User.current();
    }
};


export  {Auth};