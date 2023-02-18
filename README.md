# Simple Quiz App

This project was bootstrapped with [Vite](https://vitejs.dev/), a fast development server and build tool for modern web applications. It includes a basic setup for a React application, with some additional configuration to enhance the development experience.


## Tech Stack
**Client:** React, Redux, TailwindCSS, Vite
**Libraries used:** Redux Toolkit, TailwindCSS, React Router DOM

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.

```bash
git clone https://github.com/yaacobmartinez/quiz-app.git
cd quiz-app
npm install
npm run dev
```
This will start the development server at http://localhost:5173.

## Available Scripts
In the project directory, you can run:

`npm run dev`

Runs the app in development mode.
Open http://localhost:5173 to view it in the browser.

The page will reload if you make edits.

`npm run build`

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


## Running Tests

To run tests, run the following command

```bash
  npm run test
```



## Folder Structure
```java
quiz-app/
  public/
  src/
    assets/
    components/
    screens/
    store/
    App.css
    App.jsx
    main.jsx
    index.css
  index.html
  package.json
  postcss.config.cjs
  CONTRIBUTING.md
  README.md
  tailwind.config.cjs
  vite.config.js
```

The project contains two main folders: `public` and `src`. 
The `public` folder contains the static assets easily available for the index.html file. 
The `src` folder contains the source code for the React application, including components, screens, assets, and store.
The `index.html` file serves as the entry point to the application. 

### Assets Folder
The `assets/` folder contains `quiz.js` which has the Quiz Configurations. 
The Quiz Configuration is a javascript object which contains the ff:
- Quiz Questions, Choices and Correct Answers,
- Points Per Question
- Scoring, Grade and Recommendations
- Recommended Course Details

### Components Folder
The `components/` folder contains components that can be used throughout the whole application.

### Screens
The `screens/` folder contains the pages of the application, such as `Home`, `Quiz`, `Score and Recommendation`.

### Store 
The `store/` folder contains file that are related to redux and the state. `store.js` contains the whole store. `reducers/` contains reducer slices that can be used throughout the whole app.

## Customizing Configuration
This project is preconfigured with some common plugins and settings to make developing with React and Vite easier. You can customize this configuration by editing the `vite.config.js` file. Visit the [Vite documentation](https://vitejs.dev/config/) for more information on how to customize Vite configuration.


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `Code of Conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
