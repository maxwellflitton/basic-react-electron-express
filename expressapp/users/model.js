const path = require("path");
const fs = require('fs');


class UserModel {

    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

}


class UserManager {

    constructor() {
        this.dataPath = path.join(__dirname, 'user_data.json');
        this.users = [];
    }

    loadUsers() {
        let rawdata = fs.readFileSync(this.dataPath);
        let rawUsers = JSON.parse(rawdata);

        for (let i = 0, length = rawUsers.length; i < length; i++) {
            let user = new UserModel(rawUsers[i]["firstName"], rawUsers[i]["secondName"]);
            this.users.push(user);
        }
    }

    saveUsers() {
        let encodedData = JSON.stringify(this.users);
        fs.writeFileSync(this.dataPath, encodedData);
    }

    addUser(firstName, secondName) {

        if (this.users.length === 0) {
            this.loadUsers();
        }

        let user = new UserModel(firstName, secondName);
        this.users.push(user);
    }

    deleteUser(firstName, secondName) {

        if (this.users.length === 0) {
            this.loadUsers();
        }

        let newUsers = [];

        for (let i = 0, length = this.users.length; i < length; i++) {

            if (this.users[i].firstName !== firstName && this.users[i].secondName !== secondName) {
                let user = new UserModel(this.users[i].firstName, this.users[i].secondName);
                newUsers.push(user);
            }
        }
        this.users = newUsers;

        this.saveUsers();
    }
}

module.exports = {
    UserModel, UserManager
};
