# Steps to Initiate Project:

1. Create react app.
```
create-react-app .
```

1. make default created react app customizable.
```
yarn run eject
```

1. add Babel plugin dependency.
```
yarn add -D babel-plugin-react-relay // -D means only DEV environment
```

1. turn off relay cache schema for DEV
```
// FILE: webpack.config.dev.js
// LINE: 151
    cacheDirectory: false,
```

1. add react relay in babel plugin list
```
// FILE: package.json
// LINE: 84
    "babel": {
        "plugins": ["react-relay"],  // Add react-relay plugin
        "presets": [
            "react-app"
        ]
    },
```
    
1. Add GRAPHQL endpoint to start/build/test script.
```
// FILE: package.json
// LINE: 44
// GRAPHQL_ENDPOINT is a essential key
  "scripts": {
    "start": "GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cjb33awee13d1010240o9knii node scripts/start.js",
    "build": "GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cjb33awee13d1010240o9knii node scripts/build.js",
    "test": "GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cjb33awee13d1010240o9knii node scripts/test.js --env=jsdom"
  },
```

1. Install React-Router
```
yarn add react-router@3.2.0 // version 4 not compatible with our other lib and this: https://github.com/ReactTraining/react-router/issues/5605
```

1. Install Material-UI
```
yarn add material-ui
```

1. Install React Tap plugin for Material-UI to handle mobile events.
```
yarn add react-tap-event-plugin
```

1. Install react for heroku
```
heroku login
...
heroku create tictactoe-huaweichen --buildpack https://github.com/mars/create-react-app-buildpack.git
```

1. Setup GRAPHQL_ENDPOINT on Heroku
```
heroku config:set GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cjb33awee13d1010240o9knii
```

1. Push code to Heroku master
```
git push heroku master
heroku open # check page
```

1. Bring more styles.
```
yarn add styled-components
```

1. Utilize Canvas to draw O and X.
```
yarn add react-konva konva
```
