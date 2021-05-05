'use strict';

const fs = require("fs");
const { statement, htmlStatement } = require('./statement.js');

let plays = JSON.parse(fs.readFileSync('plays.json'));
let invoices = JSON.parse(fs.readFileSync('invoices.json'));
console.log(statement(invoices[0], plays));
console.log(htmlStatement(invoices[0], plays));
