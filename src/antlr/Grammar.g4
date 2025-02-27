grammar Grammar;

exp
    : T_SKIP
    | T_SKIP L_PAREN R_PAREN
    | IF bexp THEN exp ELSE exp
    | m SEMI_COLON exp
    | m
    ;
m:  t (ADD | SUB) exp  
    | t 
    ;

t: f (MULT | DIV | MOD) t | f ;

f
    : L_PAREN exp R_PAREN
    | L_CURLY_PAREN exp R_CURLY_PAREN
    | ID L_PAREN exp (COMMA exp)* R_PAREN
    | ID L_PAREN R_PAREN
    | ID L_SQUARE_PAREN NUMBER R_SQUARE_PAREN
    | ID
    | GLOBAL_ID L_SQUARE_PAREN NUMBER R_SQUARE_PAREN
    | GLOBAL_ID
    | SUB NUMBER
    | ADD NUMBER
    | SUB DECIMAL_NUMBER
    | ADD DECIMAL_NUMBER
    | NUMBER
    | DECIMAL_NUMBER
    | STRING
    ;

bexp: exp (EQUAL_TO | NOT_EQUAL_TO | LESS_THAN | MORE_THAN | LESS_THAN_EQUAL | MORE_THAN_EQUAL) exp;

defn
    : DEF ID L_PAREN arg (COMMA arg)* R_PAREN COLON (INT | DOUBLE | STRING_TYPE | VOID) EQUAL exp
    | DEF ID L_PAREN R_PAREN COLON (INT | DOUBLE | STRING_TYPE | VOID) EQUAL exp
    | VAL (ID | GLOBAL_ID) COLON (INT | DOUBLE | STRING_TYPE) EQUAL (NUMBER | DECIMAL_NUMBER | SUB DECIMAL_NUMBER | SUB NUMBER | STRING)
    | VAL (ID | GLOBAL_ID) L_SQUARE_PAREN NUMBER R_SQUARE_PAREN COLON L_SQUARE_PAREN (INT | DOUBLE) R_SQUARE_PAREN 
    | (ID|GLOBAL_ID) L_SQUARE_PAREN NUMBER R_SQUARE_PAREN EQUAL (NUMBER | DECIMAL_NUMBER | SUB DECIMAL_NUMBER | SUB NUMBER | STRING)
    ;


prog
    : defn SEMI_COLON prog 
    | (exp)+
    | block
    ;

block:         L_CURLY_PAREN prog R_CURLY_PAREN;

arg: ID COLON (INT | DOUBLE | STRING_TYPE);


T_SKIP: 'skip';
TRUE: 'true';
FALSE: 'false';
IF: 'if';
THEN: 'then';
ELSE: 'else';
WHILE: 'while';
DO: 'do' ;
DEF: 'def' ;
VAL: 'val';
INT: 'Int';
DOUBLE: 'Double';
STRING_TYPE: 'String';
VOID: 'Void';
ARRAY: 'array';
NUMBER:         [1-9][0-9]* | [0];
DECIMAL_NUMBER: [0-9]+ '.' [0-9]+ ;
ID:             [a-z] ([a-zA-Z] | NUMBER | '_')*;
GLOBAL_ID:      [A-Z] ([a-zA-Z] | NUMBER | '_')*;
STRING: '"' (~["])* '"';
ADD:            '+';
SUB:            '-';
MULT:           '*';
DIV:            '/';
MOD:            '%';
MORE_THAN:      '>';
LESS_THAN:      '<';
MORE_THAN_EQUAL: '>=';
LESS_THAN_EQUAL: '<=';
EQUAL_TO:       '==';
NOT_EQUAL_TO:       '!=';
EQUAL: '=';
L_CURLY_PAREN:   '{';
R_CURLY_PAREN:   '}';
L_SQUARE_PAREN:   '[';
R_SQUARE_PAREN:   ']';
L_PAREN:          '(';
R_PAREN:          ')';
SEMI_COLON: ';';
COMMA: ',';
COLON: ':';
WHITESPACE:     [ \t\r\n]+ -> skip; 


