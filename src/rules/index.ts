import { Rule } from 'eslint';

import { default as reactPropsBrackets } from './jsx-closing-bracket-location';

const rules: { [key: string]: Rule.RuleModule } = {
    'jsx-closing-bracket-location': reactPropsBrackets,
};

export default rules;
