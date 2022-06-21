module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    "extends": [
        "airbnb"
    ],
    plugins: [
        "flowtype",
        "import",
        "react",
        "babel",
        "sentence-case"
    ],
    env: {
        browser: true,
        node: true,
        jasmine: true,
        commonjs: true,
        amd: true
    },
    rules: {
    
        // https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        "import/prefer-default-export": 0,
        "import/no-default-export": 2,
    
        "import/no-unresolved": 2,
        "import/no-webpack-loader-syntax": 0,
        "import/no-commonjs": 2,
        "import/no-extraneous-dependencies": 2,
        "import/no-dynamic-require": 2,
        "import/named": 2,
        "import/no-self-import": 2,
        "import/no-cycle": 2,
    
        "no-trailing-spaces": ["error", {
            skipBlankLines: true
        }],
        indent: ["error", 4, {
            VariableDeclarator: 1,
            MemberExpression: 1,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName",
                "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement",
                "JSXClosingElement", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"]
        }],
        quotes: ["error", "double"],
        "max-len": ["error", 500],
        "comma-dangle": ["error", "never"],
        "space-before-function-paren": ["error", "never"],
        "no-unused-vars": ["error", {
            args: "none"
        }],
        "arrow-parens": ["error", "always"],
        "func-names": 0, // Do not enforce to use named functions
        "operator-assignment": 0, // Do not enforce specific rule about operator assignment
        "no-param-reassign": 0, // Allow reassigning params. We need this at least for map and reduce
        "dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
        "no-void": 0,
        "no-bitwise": 0,
        "no-plusplus": 0, // Allow unary operator '++'
        camelcase: 0,
        "newline-per-chained-call": 0, // Don't require a newline after each call in a method chain
        "no-underscore-dangle": 0, // Allow _ dangle
        "prefer-destructuring": 0,
        eqeqeq: ["error", "always"],
        "prefer-rest-params": 0, // Use the rest parameters instead of 'arguments'
    
        "quote-props": ["error", "as-needed", { keywords: true, numbers: true }], // Unnecessarily quoted property found
        "consistent-return": 1, // Expected to return a value at the end of this function
        "prefer-spread": 0, // Use the spread operator instead of '.apply()'
        "no-else-return": 1, // Disallow return before else,
        "no-use-before-define": 0,
        "semi-style": ["error", "last"], // Enforce location of semicolons
        "no-extra-parens": 1, // Warning when used redundant parens
    
        // Enforce consistent line breaks inside braces.
        // Override base config to increase the number of minProperties in ObjectPattern (configuration for object patterns of destructuring assignments)
        "object-curly-newline": ["error", {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 5, multiline: true, consistent: true }
        }],
    
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-filename-extension": 0,
        "react/destructuring-assignment": 0,
        "react/no-this-in-sfc": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": 0,
        "react/jsx-tag-spacing": ["error", {
            closingSlash: "never",
            beforeSelfClosing: "allow",
            afterOpening: "never",
            beforeClosing: "allow"
        }],
        "react/jsx-fragments": 0, // Disabling since we can't use key prop on <></>
        "react/require-default-props": 2,
        "react/jsx-props-no-spreading": 0,
        "react/static-property-placement": ["error", "static public field"],
    
        // Accessibility checks that we inherit from AirBnB config. Turning them off for now
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/control-has-associated-label": 0,
    
        "sentence-case/sentence-case": 2,
    
        // babel eslint overrides
        "no-unused-expressions": 0,
        "babel/no-unused-expressions": 2
    }
};
