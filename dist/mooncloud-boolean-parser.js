/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _parser = __webpack_require__(1);

	var _parser2 = _interopRequireDefault(_parser);

	var _ast = __webpack_require__(2);

	var _ast2 = _interopRequireDefault(_ast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //let parser = require('./parser');


	var SyntaxError = function (_Error) {
	    _inherits(SyntaxError, _Error);

	    function SyntaxError(message, hash) {
	        _classCallCheck(this, SyntaxError);

	        var _this = _possibleConstructorReturn(this, (SyntaxError.__proto__ || Object.getPrototypeOf(SyntaxError)).call(this));

	        _this.name = "SyntaxError";
	        _this.message = message;
	        _this.hash = hash;
	        return _this;
	    }

	    return SyntaxError;
	}(Error);

	_parser2.default.yy.parseError = function (message, hash) {
	    throw new SyntaxError(message, hash);
	};
	(function () {
	    var module = angular.module('mooncloudBooleanParser', []);
	    module.factory('mooncloudBooleanParserService', function () {
	        return {
	            ast: _ast2.default,
	            parse: function parse(formula) {
	                return _parser2.default.parse(formula);
	            }
	        };
	    });
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var o = function o(k, v, _o, l) {
	        for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {}return _o;
	    },
	        $V0 = [1, 3],
	        $V1 = [1, 4],
	        $V2 = [1, 5],
	        $V3 = [1, 7],
	        $V4 = [1, 8],
	        $V5 = [1, 9],
	        $V6 = [1, 10],
	        $V7 = [5, 7, 8, 9, 10, 13];
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "expressions": 3, "expr": 4, "EOF": 5, "TOKEN_VAR": 6, "TOKEN_AND": 7, "TOKEN_OR": 8, "TOKEN_IMPLIES": 9, "TOKEN_IFF": 10, "TOKEN_NOT": 11, "TOKEN_LPAREN": 12, "TOKEN_RPAREN": 13, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 6: "TOKEN_VAR", 7: "TOKEN_AND", 8: "TOKEN_OR", 9: "TOKEN_IMPLIES", 10: "TOKEN_IFF", 11: "TOKEN_NOT", 12: "TOKEN_LPAREN", 13: "TOKEN_RPAREN" },
	        productions_: [0, [3, 2], [4, 1], [4, 3], [4, 3], [4, 3], [4, 3], [4, 2], [4, 3]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
	            /* this == yyval */

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = new ast.Var(new ast.Token($$[$0]));
	                    break;
	                case 3:case 4:case 5:
	                    this.$ = new ast.BinaryOperator(new ast.Token($$[$0 - 1]), $$[$0 - 2], $$[$0]);
	                    break;
	                case 6:
	                    this.$ = new ast.BinaryOperator(new ast.Token($$[$0 - 1]), $$[$0 - 2], $$[$0]);
	                    break;
	                case 7:
	                    this.$ = new ast.UnaryOperator(new ast.Token($$[$0 - 1]), $$[$0]);
	                    break;
	                case 8:
	                    this.$ = $$[$0 - 1];
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 6: $V0, 11: $V1, 12: $V2 }, { 1: [3] }, { 5: [1, 6], 7: $V3, 8: $V4, 9: $V5, 10: $V6 }, o($V7, [2, 2]), { 4: 11, 6: $V0, 11: $V1, 12: $V2 }, { 4: 12, 6: $V0, 11: $V1, 12: $V2 }, { 1: [2, 1] }, { 4: 13, 6: $V0, 11: $V1, 12: $V2 }, { 4: 14, 6: $V0, 11: $V1, 12: $V2 }, { 4: 15, 6: $V0, 11: $V1, 12: $V2 }, { 4: 16, 6: $V0, 11: $V1, 12: $V2 }, o($V7, [2, 7]), { 7: $V3, 8: $V4, 9: $V5, 10: $V6, 13: [1, 17] }, o($V7, [2, 3]), o([5, 8, 9, 10, 13], [2, 4], { 7: $V3 }), o([5, 9, 10, 13], [2, 5], { 7: $V3, 8: $V4 }), o([5, 10, 13], [2, 6], { 7: $V3, 8: $V4, 9: $V5 }), o($V7, [2, 8])],
	        defaultActions: { 6: [2, 1] },
	        parseError: function parseError(str, hash) {
	            if (hash.recoverable) {
	                this.trace(str);
	            } else {
	                var _parseError = function _parseError(msg, hash) {
	                    this.message = msg;
	                    this.hash = hash;
	                };

	                _parseError.prototype = Error;

	                throw new _parseError(str, hash);
	            }
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                tstack = [],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = '',
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            var args = lstack.slice.call(arguments, 1);
	            var lexer = Object.create(this.lexer);
	            var sharedState = { yy: {} };
	            for (var k in this.yy) {
	                if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
	                    sharedState.yy[k] = this.yy[k];
	                }
	            }
	            lexer.setInput(input, sharedState.yy);
	            sharedState.yy.lexer = lexer;
	            sharedState.yy.parser = this;
	            if (typeof lexer.yylloc == 'undefined') {
	                lexer.yylloc = {};
	            }
	            var yyloc = lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = lexer.options && lexer.options.ranges;
	            if (typeof sharedState.yy.parseError === 'function') {
	                this.parseError = sharedState.yy.parseError;
	            } else {
	                this.parseError = Object.getPrototypeOf(this).parseError;
	            }
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            _token_stack: var lex = function lex() {
	                var token;
	                token = lexer.lex() || EOF;
	                if (typeof token !== 'number') {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            };
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == 'undefined') {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === 'undefined' || !action.length || !action[0]) {
	                    var errStr = '';
	                    expected = [];
	                    for (p in table[state]) {
	                        if (this.terminals_[p] && p > TERROR) {
	                            expected.push('\'' + this.terminals_[p] + '\'');
	                        }
	                    }
	                    if (lexer.showPosition) {
	                        errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
	                    } else {
	                        errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
	                    }
	                    this.parseError(errStr, {
	                        text: lexer.match,
	                        token: this.terminals_[symbol] || symbol,
	                        line: lexer.yylineno,
	                        loc: yyloc,
	                        expected: expected
	                    });
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(lexer.yytext);
	                        lstack.push(lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = lexer.yyleng;
	                            yytext = lexer.yytext;
	                            yylineno = lexer.yylineno;
	                            yyloc = lexer.yylloc;
	                            if (recovering > 0) {
	                                recovering--;
	                            }
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = {
	                            first_line: lstack[lstack.length - (len || 1)].first_line,
	                            last_line: lstack[lstack.length - 1].last_line,
	                            first_column: lstack[lstack.length - (len || 1)].first_column,
	                            last_column: lstack[lstack.length - 1].last_column
	                        };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
	                        if (typeof r !== 'undefined') {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        } };

	    var ast = __webpack_require__(2);

	    /* generated by jison-lex 0.3.4 */
	    var lexer = function () {
	        var lexer = {

	            EOF: 1,

	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },

	            // resets the lexer, sets new input
	            setInput: function setInput(input, yy) {
	                this.yy = yy || this.yy || {};
	                this._input = input;
	                this._more = this._backtrack = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = {
	                    first_line: 1,
	                    first_column: 0,
	                    last_line: 1,
	                    last_column: 0
	                };
	                if (this.options.ranges) {
	                    this.yylloc.range = [0, 0];
	                }
	                this.offset = 0;
	                return this;
	            },

	            // consumes and returns one char from the input
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) {
	                    this.yylloc.range[1]++;
	                }

	                this._input = this._input.slice(1);
	                return ch;
	            },

	            // unshifts one char (or a string) into the input
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) {
	                    this.yylineno -= lines.length - 1;
	                }
	                var r = this.yylloc.range;

	                this.yylloc = {
	                    first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                this.yyleng = this.yytext.length;
	                return this;
	            },

	            // When called from action, caches matched text and appends it on next action
	            more: function more() {
	                this._more = true;
	                return this;
	            },

	            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
	            reject: function reject() {
	                if (this.options.backtrack_lexer) {
	                    this._backtrack = true;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
	                        text: "",
	                        token: null,
	                        line: this.yylineno
	                    });
	                }
	                return this;
	            },

	            // retain first n characters of the match
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },

	            // displays already matched input, i.e. for error messages
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },

	            // displays upcoming input, i.e. for error messages
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },

	            // displays the character position where the lexing error occurred, i.e. for error messages
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },

	            // test the lexed token: return FALSE when not a match, otherwise return token
	            test_match: function test_match(match, indexed_rule) {
	                var token, lines, backup;

	                if (this.options.backtrack_lexer) {
	                    // save context
	                    backup = {
	                        yylineno: this.yylineno,
	                        yylloc: {
	                            first_line: this.yylloc.first_line,
	                            last_line: this.last_line,
	                            first_column: this.yylloc.first_column,
	                            last_column: this.yylloc.last_column
	                        },
	                        yytext: this.yytext,
	                        match: this.match,
	                        matches: this.matches,
	                        matched: this.matched,
	                        yyleng: this.yyleng,
	                        offset: this.offset,
	                        _more: this._more,
	                        _input: this._input,
	                        yy: this.yy,
	                        conditionStack: this.conditionStack.slice(0),
	                        done: this.done
	                    };
	                    if (this.options.ranges) {
	                        backup.yylloc.range = this.yylloc.range.slice(0);
	                    }
	                }

	                lines = match[0].match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno += lines.length;
	                }
	                this.yylloc = {
	                    first_line: this.yylloc.last_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.last_column,
	                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
	                };
	                this.yytext += match[0];
	                this.match += match[0];
	                this.matches = match;
	                this.yyleng = this.yytext.length;
	                if (this.options.ranges) {
	                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                }
	                this._more = false;
	                this._backtrack = false;
	                this._input = this._input.slice(match[0].length);
	                this.matched += match[0];
	                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
	                if (this.done && this._input) {
	                    this.done = false;
	                }
	                if (token) {
	                    return token;
	                } else if (this._backtrack) {
	                    // recover context
	                    for (var k in backup) {
	                        this[k] = backup[k];
	                    }
	                    return false; // rule action called reject() implying the next rule should be tested instead.
	                }
	                return false;
	            },

	            // return next match in input
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) {
	                    this.done = true;
	                }

	                var token, match, tempMatch, index;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (this.options.backtrack_lexer) {
	                            token = this.test_match(tempMatch, rules[i]);
	                            if (token !== false) {
	                                return token;
	                            } else if (this._backtrack) {
	                                match = false;
	                                continue; // rule action called reject() implying a rule MISmatch.
	                            } else {
	                                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	                                return false;
	                            }
	                        } else if (!this.options.flex) {
	                            break;
	                        }
	                    }
	                }
	                if (match) {
	                    token = this.test_match(match, rules[index]);
	                    if (token !== false) {
	                        return token;
	                    }
	                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	                    return false;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
	                        text: "",
	                        token: null,
	                        line: this.yylineno
	                    });
	                }
	            },

	            // return next match that has a token
	            lex: function lex() {
	                var r = this.next();
	                if (r) {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },

	            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },

	            // pop the previously active lexer condition state off the condition stack
	            popState: function popState() {
	                var n = this.conditionStack.length - 1;
	                if (n > 0) {
	                    return this.conditionStack.pop();
	                } else {
	                    return this.conditionStack[0];
	                }
	            },

	            // produce the lexer rule set which is active for the currently active lexer condition state
	            _currentRules: function _currentRules() {
	                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
	                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	                } else {
	                    return this.conditions["INITIAL"].rules;
	                }
	            },

	            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
	            topState: function topState(n) {
	                n = this.conditionStack.length - 1 - Math.abs(n || 0);
	                if (n >= 0) {
	                    return this.conditionStack[n];
	                } else {
	                    return "INITIAL";
	                }
	            },

	            // alias for begin(condition)
	            pushState: function pushState(condition) {
	                this.begin(condition);
	            },

	            // return the number of states currently on the stack
	            stateStackSize: function stateStackSize() {
	                return this.conditionStack.length;
	            },
	            options: {},
	            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
	                var YYSTATE = YY_START;
	                switch ($avoiding_name_collisions) {
	                    case 0:
	                        /* skip whitespace */
	                        break;
	                    case 1:
	                        return 6;
	                        break;
	                    case 2:
	                        return 7;
	                        break;
	                    case 3:
	                        return 8;
	                        break;
	                    case 4:
	                        return 11;
	                        break;
	                    case 5:
	                        return 9;
	                        break;
	                    case 6:
	                        return 10;
	                        break;
	                    case 7:
	                        return 12;
	                        break;
	                    case 8:
	                        return 13;
	                        break;
	                    case 9:
	                        return 5;
	                        break;
	                }
	            },
	            rules: [/^(?:\s+)/, /^(?:[ctfre]#[0-9]+)/, /^(?:and\b)/, /^(?:or\b)/, /^(?:not\b)/, /^(?:implies\b)/, /^(?:iff\b)/, /^(?:\()/, /^(?:\))/, /^(?:$)/],
	            conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "inclusive": true } }
	        };
	        return lexer;
	    }();
	    parser.lexer = lexer;
	    return parser;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Token = function Token(value) {
	    _classCallCheck(this, Token);

	    this.value = value;
	};

	var Var = function Var(token) {
	    _classCallCheck(this, Var);

	    this.token = token;
	};

	var BinaryOperator = function BinaryOperator(token, left, right) {
	    _classCallCheck(this, BinaryOperator);

	    this.token = token;
	    this.left = left;
	    this.right = right;
	};

	var UnaryOperator = function UnaryOperator(token, operand) {
	    _classCallCheck(this, UnaryOperator);

	    this.token = token;
	    this.operand = operand;
	};

	var And = function (_BinaryOperator) {
	    _inherits(And, _BinaryOperator);

	    function And() {
	        _classCallCheck(this, And);

	        return _possibleConstructorReturn(this, (And.__proto__ || Object.getPrototypeOf(And)).apply(this, arguments));
	    }

	    return And;
	}(BinaryOperator);

	var Or = function (_BinaryOperator2) {
	    _inherits(Or, _BinaryOperator2);

	    function Or() {
	        _classCallCheck(this, Or);

	        return _possibleConstructorReturn(this, (Or.__proto__ || Object.getPrototypeOf(Or)).apply(this, arguments));
	    }

	    return Or;
	}(BinaryOperator);

	var Implies = function (_BinaryOperator3) {
	    _inherits(Implies, _BinaryOperator3);

	    function Implies() {
	        _classCallCheck(this, Implies);

	        return _possibleConstructorReturn(this, (Implies.__proto__ || Object.getPrototypeOf(Implies)).apply(this, arguments));
	    }

	    return Implies;
	}(BinaryOperator);

	var Iff = function (_BinaryOperator4) {
	    _inherits(Iff, _BinaryOperator4);

	    function Iff() {
	        _classCallCheck(this, Iff);

	        return _possibleConstructorReturn(this, (Iff.__proto__ || Object.getPrototypeOf(Iff)).apply(this, arguments));
	    }

	    return Iff;
	}(BinaryOperator);

	var Not = function (_UnaryOperator) {
	    _inherits(Not, _UnaryOperator);

	    function Not() {
	        _classCallCheck(this, Not);

	        return _possibleConstructorReturn(this, (Not.__proto__ || Object.getPrototypeOf(Not)).apply(this, arguments));
	    }

	    return Not;
	}(UnaryOperator);

	module.exports = {
	    Token: Token, Var: Var, BinaryOperator: BinaryOperator, UnaryOperator: UnaryOperator
	};

/***/ }
/******/ ]);