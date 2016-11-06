//let parser = require('./parser');
import parser from "./parser";

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
    let module = angular.module('mooncloud.booleanParser')
    module.factory('mooncloudBooleanParserService', function() {
        return {
            parse: (formula) => parser.parse(formula)
        };
    });
})();
