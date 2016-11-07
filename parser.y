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
    | expr TOKEN_AND expr             { $$ = new ast.BinaryOperator(new ast.Token($2), $1, $3); }
    | expr TOKEN_OR expr              { $$ = new ast.BinaryOperator(new ast.Token($2), $1, $3); }
    | expr TOKEN_IMPLIES expr         { $$ = new ast.BinaryOperator(new ast.Token($2), $1, $3); }
    | expr TOKEN_IFF expr             { $$ = new ast.BinaryOperator(new ast.Token($2), $1, $3 ); }
    | TOKEN_NOT expr %prec UNOT       { $$ = new ast.UnaryOperator(new ast.Token($1), $2); }
    | TOKEN_LPAREN expr TOKEN_RPAREN  { $$ = $2; }
    ;

%%

var ast = require('./ast');
