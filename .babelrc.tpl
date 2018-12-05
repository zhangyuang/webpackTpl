{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-proposal-json-strings",
    {%- if installRouter -%}
    "@babel/plugin-syntax-dynamic-import",
    {%- endif -%}
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-export-namespace-from"
  ],
  "comments": false
}
