'use strict';

var child_process = require('child_process');

module.exports = function (command) {
    var result = '';

    try {
        result = child_process.execSync(command, {
            encoding: 'utf-8'
        });
    }
    catch (error) {
        console.log(error);
    }

    return result.trim();
};
