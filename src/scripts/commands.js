// src/scripts/commands.js

import {addBg} from './backgrounds';

var commands = [
    {
        name: 'Google',
        regex: /^g(?:[oogle]+|s)? ([\s\S]+)/i,
        fn: (args) => {
            window.location = `https://www.google.de/search?q=${args[0]}`;
        }
    },
    {
        name: 'Amazon Search',
        regex: /^am(?:[azon]+)? ([\s\S]+)/i,
        fn: (args) => {
            window.location = `http://www.amazon.de/s/?field-keywords=${args[0]}`;
        }
    },
    {
        name: 'Go To Subreddit',
        regex: /^\/r\/([a-zA-z]+)/i,
        fn: (args) => {
            window.location = `http://reddit.com/r/${args[0]}`;
        }
    },
    {
        name: 'Search Wikipedia',
        regex: /^wiki ([\s\S]+)/i,
        fn: (args) => {
            window.location = `http://wikipedia.org/wiki/Special:Search/${args[0]}`;
        }
    },
    {
        name: 'Add BG',
        regex: /^bg ([\s\S]+)/i,
        fn: (args) => {
            addBg(args[0]);
        }
    }
];

function execCmd(input) {
    var cmd, matches;
    commands.forEach((c) => {
        if (c.regex.test(input)) {
            cmd = c;
        }
    });

    if (cmd) {
        matches = cmd.regex.exec(input);

        if (matches) { 
            return cmd.fn(matches.splice(1));
        }
    }
   return false;
}


export default execCmd;
