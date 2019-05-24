# Validate closing bracket location in JSX (@elyby/jsx-closing-bracket-location)

Enforce the closing bracket location for JSX multiline elements.

## Rule Details

This rule checks all JSX multiline elements and verifies the location of the closing bracket according to the Ely.by's
team preferences.

The rule is simple: if the first property is written on the same line as the component, it's considered to be inline
and the closing bracket should be placed immediately after the last property:

```js
<Component param={123} />
<Component param1={123} param2={{
    key: 'value',
}} />
```

And vice versa: if the first property is written with a new line, the component is considered to be multi-line
and the closing bracket must be placed on the next line after the last property.

```js
<Component
    param={123}
/>
<Comment
    param1={123}
    param2={{
        key: 'value',
    }}
/>
```

## When Not To Use It

If you follow the same formatting rules for component properties as our team.

## Further Reading

* [Inspired by the original rule from `eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md).
