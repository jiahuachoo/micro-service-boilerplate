
var self = {
    getGitLastCommitHash: function () {
        const fs = require('fs');
        var contents = fs.readFileSync('./.git/refs/heads/master', 'utf8');
        return contents.replace(/\r?\n|\r/g, " ").trim();
    },
    getStatus: function () {
        const config = require("./config.json")
        var appName = config.name;
        var commitHash = self.getGitLastCommitHash();
        return {
            [appName]: {
                "version" : config.version,
                "description": config.description,
                "lastcommitsha": commitHash
            }
        }
    },
}

module.exports = self;