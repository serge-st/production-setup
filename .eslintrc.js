module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
    'overrides': [
        {
            'env': {
                'node': true,
            },
            'files': [
                '.eslintrc.{js,cjs}',
            ],
            'parserOptions': {
                'sourceType': 'script',
            },
        },
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'react',
    ],
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error', { 'argsIgnorePattern': '^_[a-zA-Z_$][a-zA-Z0-9_$]*?$' },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': ['error', 'always'],
    },
};
