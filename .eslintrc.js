module.exports = {
   "parser": "babel-eslint",
    "extends": "eslint-config-airbnb",
    "env": {
      "browser": true,
      "node": true,
      "mocha": true
    },
    rules: {
      "import/extensions": [2, "never"],
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "react/prefer-stateless-function": [0]
    },
    "plugins": [
      "import"
    ],
    "settings": {
      "import/parser": "babel-eslint",
      "import/resolve": {
        "moduleDirectory": ["node_modules", "src"]
      }
    },
    "globals": {
      "__DEVELOPMENT__": true,
      "__CLIENT__": true,
      "__SERVER__": true,
      "__DISABLE_SSR__": true,
      "__DEVTOOLS__": true,
      "socket": true,
      "webpackIsomorphicTools": true
    }
};
