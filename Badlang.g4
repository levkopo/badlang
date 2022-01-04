grammar Badlang;

STRING: '\'' (.+?) '\'';

OPEN : '(';
CLOSE : ')';
PLUS : '+';
MINUS : '-';
MULTYPLY : '*';
DIV : '/';
POW : '**';

INTEGER: [0-9]+;
WS : ('//'(.+?)[\n\r]|'/*'(.+?)'*/'|([ \t\r\n])+) -> skip;
NAME : [A-Za-z_.]* [A-Za-z_];

expression:
    expression PLUS  expression |
    expression MINUS  expression |
    expression DIV  expression |
    expression MULTYPLY  expression |
    expression POW expression |
    primitive;

primitive: call|link|value;
link: NAME;
value: INTEGER|STRING;

call: OPEN NAME (expression expression*)? CLOSE;