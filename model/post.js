const orm = require("../config/orm");

const func = {
    allMembers: function (cb) {
        orm.allMembers("membersTable", function (res) {
            cb(res);
        });
    }
};

module.exports = func;
