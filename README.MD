# Bundlers

## Webpack

### init project

- `npm init -y`
- `npm install --save-dev webpack-dev-server webpack-cli`

> `package.json`

```json
  "scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development"
```

> define to use web pack server in development mode

### babel

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

### React and ReactDOM

- `npm install react react-dom`

### eslint

- `npm install --save-dev install eslint`
- `npm install --save-dev installeslint-loader`
- `npm install --save-dev install babel-eslint`
- `npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y`

### update babel and eslint

- `npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader`

> `package.json`

```json
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
```

### run project

- `npm start`

## Parcel

> install parcel

- `npm install react react-dom`
- `npm init -y`
- `npm install --save-dev parcel-bundler babel-preset-env babel-preset-react`
- `touch .babelrc`

```json
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
```

> `package.json`

```json
  "scripts": {
    "start": "parcel index.html"
```

