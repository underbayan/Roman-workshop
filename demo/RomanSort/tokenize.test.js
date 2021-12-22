
const { lexer } = require('./tokenize')
const javascript = `

/**
 * comment-2 // {} ${1 + 2} "" '' \`\` \${}
 * ["", [[[[], []], [{}]]], { e: { ie: '' } }]
 */
comment_2_1 ?: boolean;

/** comment-2  ["", [[[[], []], [{}]]], { e: { ie: '' } }]*/
comment_2_2 ?: string;

//  Flag to indicate whether single column setting is persisted in psl // /** */ {{}} [[]]
comment_1 ?: number;

public static defaultProps: Partial<test> = {
        key: test
};

private name: string;
private age: number;
static category: string = "animal"
/**
 * Test innerMethod
 * */
innerMethod =({name})=> {
    console.log(name)
}

logoRow = 1; // comment-1


    // comment-1-1
        // comment-1-2
            // comment-1-3

if (this) {
        // comment-1-1
        // comment-1-2
            // comment-1-3
    doNothing
}
const dd = ["",/** comment-2  ["", [[[[], []], [{}]]], { e: { ie: '' } }]*/ [[[[], []], [{}]]], { e: { ie: '' } }]

num: new TokenType("n#um", { startsExpr })
backQuote: new TokenType("\`", { startsExpr })
dollarBraceL: new TokenType("\${", { beforeExpr, startsExpr })

// Special hashbang token.
interpreterDirective: new TokenType("#!...")
`


const tt = lexer(javascript)
tt.map(r => r.scopeText).map(r => console.log(r))
console.log(tt.map(r => r.scopeText).join("") === javascript)
