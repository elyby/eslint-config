// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';

import rule from './../../../src/rules/jsx-closing-bracket-location';

const parserOptions = {
    ecmaVersion: 2018,
    ecmaFeatures: {
        jsx: true,
    },
};

const MESSAGE_ON_THE_NEXT_LINE = 'The closing bracket must be placed on the next line';
const MESSAGE_RIGHT_AFTER_PROP = 'The closing bracket must be placed right after the last prop';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('react-props-brackets', rule, {
    valid: [
        '<Component></Component>',
        '<Component />',
        '<Component prop={"value"}></Component>',
        '<Component {...props1}></Component>',
        '<Component prop={"value"}/>',
        '<Component {...props1}/>',
        {
            code: [
                '<Component prop={{',
                '    key: "value",',
                '}}/>',
            ].join('\n'),
        },
        {
            code: [
                '<Component',
                '    prop={{',
                '        key: "value",',
                '    }}',
                '/>',
            ].join('\n'),
        },
        {
            code: [
                '<Component prop={{',
                '    key: "value",',
                '}}></Component>',
            ].join('\n'),
        },
        {
            code: [
                '<Component',
                '    prop={{',
                '        key: "value",',
                '    }}',
                '></Component>',
            ].join('\n'),
        },
    ],

    invalid: [
        {
            code: [
                '<Component',
                '></Component>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_RIGHT_AFTER_PROP,
                line: 1,
                column: 11,
                endLine: 2,
                endColumn: 2,
            }],
        },
        {
            code: [
                '<Component',
                '/>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_RIGHT_AFTER_PROP,
                line: 1,
                column: 11,
                endLine: 2,
                endColumn: 3,
            }],
        },
        {
            code: [
                '<Component prop={"value"}',
                '></Component>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_RIGHT_AFTER_PROP,
                line: 1,
                column: 26,
                endLine: 2,
                endColumn: 2,
            }],
        },
        {
            code: [
                '<Component prop={"value"}',
                '/>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_RIGHT_AFTER_PROP,
                line: 1,
                column: 26,
                endLine: 2,
                endColumn: 3,
            }],
        },
        {
            code: [
                '<Component prop={{',
                '    key: "value",',
                '}}',
                '/>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_RIGHT_AFTER_PROP,
                line: 3,
                column: 3,
                endLine: 4,
                endColumn: 3,
            }],
        },
        {
            code: [
                '<Component',
                '    prop={{',
                '        key: "value",',
                '    }}/>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_ON_THE_NEXT_LINE,
                line: 4,
                column: 7,
                endLine: 4,
                endColumn: 9,
            }],
        },
        {
            code: [
                '<Component prop={{',
                '    key: "value",',
                '}}',
                '></Component>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_RIGHT_AFTER_PROP,
                line: 3,
                column: 3,
                endLine: 4,
                endColumn: 2,
            }],
        },
        {
            code: [
                '<Component',
                '    prop={{',
                '        key: "value",',
                '    }}></Component>',
            ].join('\n'),
            errors: [{
                message: MESSAGE_ON_THE_NEXT_LINE,
                line: 4,
                column: 7,
                endLine: 4,
                endColumn: 8,
            }],
        },
    ],
});
