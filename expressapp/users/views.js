const userModel = require("./model");


function renderUserViews(engine) {

    engine.get('/users/all', function(req, res) {
        let userManager = new userModel.UserManager();

        userManager.loadUsers();
        res.end(JSON.stringify(userManager.users));
    });

    engine.post("/users/create", function(req, res) {

        let firstName = req.body["firstName"];
        let secondName = req.body["secondName"];

        let userManager = new userModel.UserManager();

        userManager.loadUsers();
        userManager.addUser(firstName, secondName);
        userManager.saveUsers();
        res.end(JSON.stringify(userManager.users))
    });

}

module.exports = {
    renderUserViews
};
