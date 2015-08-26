# grunt-init-user

[![npm version badge](https://img.shields.io/npm/v/grunt-init-user.svg)](https://www.npmjs.org/package/grunt-init-user)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> [grunt-init](http://gruntjs.com/project-scaffolding) template for associating user commits with an identity 


## Installation

There're two ways!

#### grunt-init

If you haven't already done so, install `grunt-init`.

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```shell
git clone https://github.com/monolithed/grunt-init-user.git ~/.grunt-init/user
```

*(Windows users, see the [documentation](http://gruntjs.com/project-scaffolding) for the correct destination directory path)*


#### package.json

There's an alternative way. <br />
You'd add the following lines to your `package.json` file:

```json
"scripts": {
	"user": "grunt-init node_modules/grunt-init-user",
},

"dependencies": { 
	"grunt-init": "^0.3.2",
},
```

### Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init user
```

Or (see `package.json` way):

```
npm run user
```


*Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files.*

### License

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)
