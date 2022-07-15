# Webpack

## init project

- `npm init -y`
- `npm install --save-dev webpack-dev-server webpack-cli`

> `package.json`

```json
  "scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development"
```

> define to use web pack server in development mode

## babel

- `npm install --save-dev babel-core babel-loader babel-preset-env`

> `package.json`

```json
  "babel": {
    "presets": [
      "env",
      "stage-2",
      "react"
    ]
  },
```

- `npm install --save-dev babel-preset-react`

## React and ReactDOM

- `npm install react react-dom`

## eslint

- `npm install --save-dev install eslint`
- `npm install --save-dev installeslint-loader`
- `npm install --save-dev install babel-eslint`
- `npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y`

## run project

- `npm start`
