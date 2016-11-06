%token TOKEN_VAR
%token TOKEN_AND
%token TOKEN_OR
%token TOKEN_NOT
%token TOKEN_LPAREN
%token TOKEN_RPAREN
%token TOKEN_IMPLIES
%token TOKEN_IFF
%left TOKEN_IFF
%left TOKEN_IMPLIES
%left TOKEN_OR
%left TOKEN_AND
%left UNOT

%start expressions

%%

expressions
    : expr EOF      { return $1; }
    ;

expr
    : TOKEN_VAR                       { $$ = new ast.Var(new ast.Token($1)); }
    | expr TOKEN_AND expr             { $$ = new ast.And(new ast.Token($2), $1, $3); }
    | expr TOKEN_OR expr              { $$ = new ast.Or(new ast.Token($2), $1, $3); }
    | expr TOKEN_IMPLIES expr         { $$ = new ast.Implies(new ast.Token($2), $1, $3); }
    | expr TOKEN_IFF expr             { $$ = new ast.Iff(new ast.Token($2), $1, $3 ); }
    | TOKEN_NOT expr %prec UNOT       { $$ = new ast.Not(new ast.Token($1), $2); }
    | TOKEN_LPAREN expr TOKEN_RPAREN  { $$ = $2; }
    ;

%%

var ast = {
  Token: function Token(value) {
    this.value = value;
  },

  Var: function Var(token) {
    this.token = token;
  },

  And: function And(token, left, right) {
    this.token = token;
    this.left = left;
    this.right = right;
  },

  Or: function Or(token, left, right) {
    this.token = token;
    this.left = left;
    this.right = right;
  },

  Not: function Not(token, operand) {
    this.token = token;
    this.operand = operand;
    if (operand.left) {
        this.left = operand.left;
    }
    if (operand.right) {
        this.right = operand.right;
    }
  },

  Implies: function Implies(token, left, right) {
    this.token = token;
    this.left = left;
    this.right = right;
  },

  Iff: function Iff(token, operand) {
    this.token = token; 
    this.operand = operand;
  }
};

