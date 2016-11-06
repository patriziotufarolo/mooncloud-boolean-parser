%%

\s+                   { /* skip whitespace */ }
[cf]"#"[0-9]+           { return 'TOKEN_VAR'; }
"and"                 { return 'TOKEN_AND'; }
"or"                  { return 'TOKEN_OR'; }
"not"                 { return 'TOKEN_NOT'; }
"implies"             { return 'TOKEN_IMPLIES'; }
"iff"                 { return 'TOKEN_IFF'; }
"("                   { return 'TOKEN_LPAREN'; }
")"                   { return 'TOKEN_RPAREN'; }
<<EOF>>               { return 'EOF'; }

%%

