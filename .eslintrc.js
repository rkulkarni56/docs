module.exports = {
    env: {
        browser: true,
    },
    globals: {
        cy: true,
        describe: true,
        beforeEach: true,
        it: true,
    },
    extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
        'arrow-parens': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'import/prefer-default-export': 0,
        indent: ['error', 4],
        'jsx-quotes': ['error', 'prefer-single'],
        'linebreak-style': ['error', 'unix'],
        'no-param-reassign': ['error', { props: false }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-undef': ['warn'],
        quotes: ['error', 'single'],
        'react/button-has-type': ['warn'],
        'react/default-props-match-prop-types': ['warn'],
        'react/display-name': ['warn'],
        'react/jsx-closing-bracket-location': ['error', 'after-props'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/destructuring-assignment': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/no-access-state-in-setstate': ['off'],
        'react/no-deprecated': ['warn'],
        'react/no-unused-state': ['warn'],
        'react/require-default-props': ['warn'],
        'react/prop-types': ['warn'],
        'jsx-a11y/label-has-associated-control': ['off'],
        'jsx-a11y/label-has-associated-label': ['off'],
        'jsx-a11y/click-events-have-key-events': ['warn'],
        'jsx-a11y/control-has-associated-label': ['warn'],
        'jsx-a11y/interactive-supports-focus': ['warn'],
        'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
        'jsx-a11y/anchor-is-valid': ['warn'],
        'prefer-destructuring': ['warn'],
    },
};
