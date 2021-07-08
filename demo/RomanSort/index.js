
const text = `

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
    doNothing
}
const dd = ["", [[[[], []], [{}]]], { e: { ie: '' } }]

num: new TokenType("n#um", { startsExpr })
backQuote: new TokenType("\`", { startsExpr })
dollarBraceL: new TokenType("\${", { beforeExpr, startsExpr })

// Special hashbang token.
interpreterDirective: new TokenType("#!...")
`

const scopeType = {
    normal: 1, // {},(),[] 
    template: 2, // ``
    quotation: 4, //""
    singleQuotation: 8, //''
    string: 2 | 4 | 8,
    comment1: 16, // //
    comment2: 32,// /** */
    comment: 16 | 32
}

// Simple clone fun
const clone = obj => JSON.parse(JSON.stringify(obj))

const startMatrix = {
    "": {
        name: "expression",
    },
    "`": {
        parent: scopeType.normal,
        scope: scopeType.template,
        name: "templateLiterals",
        stag: "`",
        etags: ["`"]
    },
    "/*": {
        parent: scopeType.normal,
        scope: scopeType.comment2,
        name: "comments",
        stag: '/*',
        etags: ["*/"]
    },
    "//": {
        parent: scopeType.normal,
        scope: scopeType.comment1,
        name: "comments",
        stag: '//',
        etags: ["\r", "\n"]
    },
    '"': {
        parent: scopeType.normal,
        scope: scopeType.quotation,
        name: "quotation",
        stag: '"',
        etags: ['"']
    },
    "'": {
        parent: scopeType.normal,
        scope: scopeType.singleQuotation,
        name: "singleQuotation",
        stag: "'",
        etags: ["'"]
    },
    "[": {
        parent: scopeType.normal,
        scope: scopeType.normal,
        name: "bracketL",
        stag: '[',
        etags: ["]"]
    },
    "{": {
        parent: scopeType.normal,
        scope: scopeType.normal,
        name: "braceL",
        stag: '{',
        etags: ["}"],

    },
    "${": {
        parent: scopeType.template,
        scope: scopeType.normal,
        name: "dollarBraceL",
        stag: '${',
        etags: ["}"],
    },
}

const endMarix = {
    "`": {
        etag: "`",
        scope: scopeType.template,
    },
    "*/": {
        etag: "*/",
        scope: scopeType.comment2,
    },
    "\n": {
        etag: "\n",
        scope: scopeType.comment1,
    },
    "\r": {
        etag: "\r",
        scope: scopeType.comment1,
    },
    '"': {
        etag: '"',
        scope: scopeType.quotation,
    },
    "'": {
        etag: "'",
        scope: scopeType.singleQuotation,

    },
    "]": {
        etag: "]",
        scope: scopeType.normal
    },
    "}": {
        etag: "}",
        scope: scopeType.normal | scopeType.template
    }
}

// Simple stack
const genStack = () => {
    const scopeStack = []
    return {
        pop: () => scopeStack.pop(),
        push: (e) => scopeStack.push(e),
        last: () => scopeStack[scopeStack.length - 1]
    }
}
const genStackItem = (obj, index) => {
    return {
        start: index, end: -1,
        ...clone(obj)
    }
}


const lexer = (str) => {
    const length = str.length
    const scopeStack = genStack()
    let scopeText = ""
    const tokens = []
    const addTokens = (k) => {
        if (scopeText !== "" && (!scopeStack.last()) && (k === '\n' || k === '\r')) {
            tokens.push(scopeText)
            scopeText = ""
        }
    }
    for (let i = 0; i < length; i++) {
        const k = str[i]
        const kr = str[i + 1]
        const currentScope = startMatrix[`${k}${kr}`] || startMatrix[k] // priority?
        const last = scopeStack.last()
        const shouldEnterNewScope = currentScope && (!last || (last.scope & currentScope.parent))
        if (shouldEnterNewScope) {
            const item = genStackItem(currentScope, i)
            i += currentScope.stag.length - 1 // Change index if stag is 2 length
            scopeText += currentScope.stag
            scopeStack.push(item)
            continue
        }
        const hitEnd = endMarix[`${k}${kr}`] || endMarix[k]
        if (hitEnd && last && (hitEnd.scope & last.scope) && (~last.etags.indexOf(hitEnd.etag))) {
            scopeText += hitEnd.etag
            i += hitEnd.etag.length - 1
            last.end = i
            scopeStack.pop()
            addTokens(k)
            continue
        }
        scopeText += k
        addTokens(k)
    }
    tokens.push(scopeText)
    tokens.map(r => console.log(r, "\n-----------------------------------"))
    console.log(scopeText)
}
lexer(text)

// const commentsRex = /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/g


// while ((array1 = commentsRex.exec(text)) !== null) {
//     console.log(array1[0])
// }