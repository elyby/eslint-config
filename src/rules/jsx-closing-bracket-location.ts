import { Node } from 'estree';
import { Rule } from 'eslint';
import { JSXOpeningElement } from '@babel/types';

const RIGHT_AFTER_PROP_TEXT = 'right after the last prop';
const ON_THE_NEXT_LINE_TEXT = 'on the next line';

const rule: Rule.RuleModule = {
    meta: {
        docs: {
            description: 'Validate closing bracket location in JSX',
            category: 'Stylistic Issues',
            recommended: false,
        },
    },

    create: (context) => ({
        'JSXOpeningElement:exit': (node: Node|JSXOpeningElement) => {
            const { start: tagStart, end: componentEnd } = node.loc!;

            let expectedClosingBracketLine: number;
            const isSelfClosing = (node as JSXOpeningElement).selfClosing;
            const attributes = (node as JSXOpeningElement).attributes;
            if (attributes.length === 0) {
                expectedClosingBracketLine = tagStart.line;
            } else {
                const { start: firstPropStart } = attributes[0].loc!;
                const { end: lastPropEnd } = attributes[attributes.length - 1].loc!;

                expectedClosingBracketLine = lastPropEnd.line;
                if (firstPropStart.line !== tagStart.line) {
                    expectedClosingBracketLine++;
                }
            }

            if (componentEnd.line === expectedClosingBracketLine) {
                return;
            }

            context.report({
                loc: {
                    start: context.getSourceCode().getLastToken(node as Node, isSelfClosing ? 2 : 1)!.loc.end,
                    end: componentEnd,
                },
                message: 'The closing bracket must be placed {{ at }}',
                data: {
                    at: expectedClosingBracketLine > componentEnd.line ? ON_THE_NEXT_LINE_TEXT : RIGHT_AFTER_PROP_TEXT,
                },
            });
        },
    }),
};

export default rule;
