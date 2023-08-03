module.exports = {
    plugins: ['stylelint-scss'],
    extends: 'stylelint-config-recommended',
    rules: {
        'max-empty-lines': 2,
        'block-no-empty': null,
        'color-no-invalid-hex': true,
        'rule-empty-line-before': 'never',
        'comment-empty-line-before': 'never',
        'declaration-colon-space-after': 'always',
        'font-family-no-missing-generic-family-keyword': [
            true,
            {
                ignoreFontFamilies: ['icomoon'],
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['extends', 'tailwind', 'layer'],
            },
        ],
        'unit-allowed-list': [
            'px',
            'deg',
            'em',
            'rem',
            '%',
            's',
            'vh',
            'vw',
            'fr',
            'pt',
            'ex',
        ],
    },
}
