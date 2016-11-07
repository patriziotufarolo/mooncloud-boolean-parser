//let parser = require('./parser');
import parser from "./parser";
import ast from "./ast";
class SyntaxError extends Error {
    constructor(message, hash) {
        super();
        this.name = "SyntaxError";
        this.message = message;
        this.hash = hash;
    }
}

parser.yy.parseError = (message, hash) => {
    throw new SyntaxError(message, hash);
}
(() => {
    let module = angular.module('mooncloudBooleanParser',[]);
    module.factory('mooncloudBooleanParserService', function() {
        return {
            ast: ast,
            parse: (formula) => parser.parse(formula)
        };
    });
})();
