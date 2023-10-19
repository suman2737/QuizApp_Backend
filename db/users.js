const { v4: uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "suman123",
            password: "suman123",
            emailId: "py@gmail.com",
        },
        {
            id: uuid(),
            username: "anand123",
            password: "anand123",
            emailId: "as@gmail.com",
        },
    ]
}

module.exports = userdata;