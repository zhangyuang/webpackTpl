module.exports = {
  /**
* ref.:
*   + http://eslint.org/docs/rules/[rule-name]
*   + https://pirosikick.github.io/eslintrc-editor/
*
* eslint v2.x
*/
"root": true,
"extends": "eslint:recommended", // @see http://eslint.org/docs/rules/

"env": {                         // @see http://eslint.org/docs/user-guide/configuring
  "browser": true,
  "node": true,
  "es6": true,
  "mocha": true,
  "commonjs": true
},

"parser": "babel-eslint",
"plugins": [
  'html'
],
"parserOptions": {
  "ecmaVersion": 6,
  "sourceType": "module"
},

"rules": {
  /* switch off built-in(eslint:recommended) */
  "no-fallthrough": 'off',
  "no-cond-assign": 'warn', // disallow assignment in conditional expressions
  "no-extra-boolean-cast": 'warn', // disallow double-negation boolean casts in a boolean context
  /* Best Practices */
  "accessor-pairs": ['error', {"getWithoutSet": false}], // Enforces getter/setter pairs in objects
  "array-callback-return": 'error', // Enforces return statements in callbacks of array's methods
  "block-scoped-var": 'error', // treat var statements as if they were block scoped
  "curly": ['off'], // specify curly brace conventions for all control statements
  "default-case": 'error', // require default case in switch statements
  "dot-location": ['error', "property"], // enforces consistent newlines before or after dots
  "dot-notation": 'error', // encourages use of dot notation whenever possible, foo.bar instead of foo['bar']
  "eqeqeq": 'error', // require the use of === and !==
  "no-alert": 'warn', // disallow the use of alert, confirm, and prompt
  "no-console": 'warn',
  "no-caller": 'error', // disallow use of arguments.caller or arguments.callee
  "no-div-regex": 'error', // disallow division operators explicitly at beginning of regular expression
  "no-eq-null": 'error', // disallow comparisons to null without a type-checking operator,foo === null instead of foo == null
  "no-eval": 'error', // disallow use of eval()
  "no-extend-native": 'error', // disallow adding to native types
  "no-extra-bind": 'error', // disallow unnecessary function binding
  "no-extra-label": 'error', // disallow unnecessary labels
  "no-invalid-this": 'error', // disallow this keywords outside of classes or class-like objects
  "no-iterator": 'error', // disallow the use of the __iterator__ property
  "no-labels": 'error', // disallow use of labeled statements
  "no-lone-blocks": 'error', // disallow unnecessary nested blocks
  "no-loop-func": 'error', // disallow creation of functions within loops
  "no-multi-str": 'error', // disallow use of multiline strings
  "no-new": 'error', // Disallow new For Side Effects
  "no-new-func": 'error', // disallow new operators with the Function object
  "no-new-wrappers": 'error', // disallow new operators with the String, Number, and Boolean objects
  "no-proto": 'error', // disallow the use of the __proto__ property
  "no-with": 'error', // disallow with statements
  "arrow-body-style": ['error', "as-needed"], // require braces in arrow function body
  "no-confusing-arrow": 'error', // disallow arrow functions where they could be confused with comparisons
  "object-shorthand": 'error', // require method and property shorthand syntax for object literals，{x} instead of {x: x}
  "prefer-arrow-callback": 'error', // suggest using arrow functions as callbacks
  "prefer-const": 'error', // require const declarations for variables that are never reassigned after declared
  "prefer-spread": 'error', // require spread operators instead of .apply() . foo(...args)
  "prefer-template": 'error', // require template literals instead of string concatenation
  "brace-style": ['error', "1tbs"], // enforce consistent brace style for blocks
  "camelcase": ['error', {"properties": "always"}], // enforce camelcase naming convention
  "no-array-constructor": 'error', // disallow Array constructors
  "no-multiple-empty-lines": ['error'], // disallow multiple empty lines
  "no-new-object": 'error', // disallow Object constructors
  /* can be fixed*/
  "keyword-spacing": 'error', // enforce consistent spacing before and after keywords
  "indent": ['error', 4, {"SwitchCase": 1}], // enforce consistent indentation(4 space)
  "no-trailing-spaces": 'error', // disallow trailing whitespace at the end of lines
  "func-call-spacing": 'error', // disallow spacing between function identifiers and their invocations
  "semi": 'error', // disallow semicolons instead of ASI
  "no-multi-spaces": ['error'], // disallow multiple spaces
  "comma-spacing": ['error', {'before': false, 'after': true}], // enforce consistent spacing before and after commas
  "arrow-spacing": ['error', {'before': true, 'after': true}], // enforce consistent spacing before and after the arrow in arrow functions
  "space-infix-ops": "error", // require spacing around infix operators
  "no-var": "error",
  "quotes": ["error", "single"]
}
}
