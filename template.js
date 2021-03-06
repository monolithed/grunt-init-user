/*!
 * grunt-init-user
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2015
 */

'use strict';

var exec = require('./utils/exec');

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Set user credentials to associate ' +
    'commits with an identity';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Your credentials have been stored to _.git/config_';

// The actual init template.
exports.template = function (grunt, init, done) {
    init.process({ type: 'node' }, [
        init.prompt('author_name'),
        init.prompt('author_email')
    ],
    function (error, properties) {
        if (error) {
            grunt.fail.fatal(error);
        }

        var keys = ['name', 'email'];

        keys.forEach(function (key) {
            exec('git config --add user.' + key + ' "' +
                properties['author_' + key] + '"');
        });

        done();
    });
};
