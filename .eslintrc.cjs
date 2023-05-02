module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": ['airbnb-base', 'prettier','plugin:node/recommended'],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ['prettier'],
    "rules": {
        'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
        enforceForClassFields: false,
        "no-unused-vars": "warn",
    }
}
