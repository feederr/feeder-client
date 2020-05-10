module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/no-array-index-key': 0,
        'no-onchange': 0,
        'no-console': 1,
        'no-debugger': 1,
        'no-unused-vars': 1,
        'react/no-access-state-in-setstate': 2,
        'react/no-this-in-sfc': 2,
        'react/no-children-prop': 0,
        'react/no-deprecated': 1,
        'react/no-did-mount-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-multi-comp': 1,
        'react/no-typos': 2,
        'react/no-string-refs': 2,
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': 1,
        'react/no-unused-state': 1,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': 1,
        'react/react-in-jsx-scope': 1,
        'react/require-optimization': 1,
        'react/self-closing-comp': 1,
        'react/style-prop-object': 2,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'object-curly-spacing': ['warn', 'always'],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
            },
        ],
        '@typescript-eslint/no-explicit-any': [
            'error',
            {
                ignoreRestArgs: true,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 80,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            },
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'react/jsx-key': 'error',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-boolean-value': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/destructuring-assignment': 'off',
    },
};
