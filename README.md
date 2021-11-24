# front-end-test 📱🛒

A simple app made with React, that allows view a mobile devices collection, add it to shoping cart and buy them.

## Project details

### Project structure

```
src
├── components
├── config
├── constants
├── hooks
├── infrastructure
│   ├── api
│   └── storage
├── layout
├── services
│   ├── PersistenceService
│   └── ProductService
└── views
```

### Used libraries

- `react` and `react-dom` to build the ui
- `axios` to made API Rest request
- `normalize.css` to normalize css for browsers
- `react-autocomplete-hint` to search autocompletion
- `react-router-dom` to create app routing
- `styled-components` to apply style to components

## Available Scripts

In the project directory, you can run:

### `npm start`

**NOTE:** _Rename `.env.local.example` file as `.env.local` before run._

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the all tests. If you want run a single tests execute `npm run test /path/to/my-test.js`
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
