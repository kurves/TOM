Would it really be a complete React tutorial without a simple todo app guide through?
I created this simple todo app using react hooks. It's a simple app that takes a task,delete and highlight the task.
I initialized my project using the React npm create-react-app.
I first created a components folder in the src public folder. The components folder contained the todo,todoapp and todolist components.
The 'Todo component' contains the logic for the individual todo.

 ![Todo1](https://user-images.githubusercontent.com/84717663/144415970-f3143993-1ead-418b-acb8-be8568f3746f.PNG)
 
 A simple todo conatins text and three buttons for deleting,highlighting and marking if an item is complete or not. The complete button takes the "completedTasks" function.


![completed](https://user-images.githubusercontent.com/84717663/144417287-7065804f-a55c-43ef-831d-78b9a0238e4a.PNG)

The delete button deletes a task if the selsected item matches the todo's id. I used the Math.random() function to generate the ids. It isn't a reliable a way to generate ids for huge projects, use a designated library instead.


![delete](https://user-images.githubusercontent.com/84717663/144417740-9c426866-2704-4dec-a4a6-ad5c8301d582.PNG)

Don't forget to define the following states at the top of your 'Todo' component.


![state](https://user-images.githubusercontent.com/84717663/144418735-1d2661cb-50e4-439c-a307-8887016cc4c3.PNG)


Next up is the "TodoList" component. this component will the parent component for our 'Todo' component. It takes the todos and renders each individual 'Todo' into a list.


![todolist](https://user-images.githubusercontent.com/84717663/144420236-23913051-38a9-42be-af80-74466ebdbdaa.PNG)


After the 'TodoList component' we have the 'TodoApp component'. It conatins the form which takes in the user's input. It also returns the 'TodoList compoment'.


![todoApp6](https://user-images.githubusercontent.com/84717663/144422130-e01b8966-6f94-452e-899a-1f06edb69d51.PNG)

I used the following to update the input text and the todos using the 'handleChange' function and the 'addTodo' functions respectively.


![state2](https://user-images.githubusercontent.com/84717663/144423302-73869c14-0c12-48ab-840e-df010163a066.PNG)

The input takes the 'handleChange' function.
 
![handleChangetodo](https://user-images.githubusercontent.com/84717663/144424186-d285a1cd-73ac-4661-a9dc-547047d5c4a9.PNG)

I also updated the todos using the 'addTodo function', which takes the original todos presents and those that we input through keying in.


![addTodo](https://user-images.githubusercontent.com/84717663/144424605-a8cceb2c-1716-46f2-8238-890cfe4d3d54.PNG)

Lastly but certainly not least, in the 'app.js' we render the'TodoApp component'.

![appatodo](https://user-images.githubusercontent.com/84717663/144425850-8d243088-319c-44fc-b217-224ca32a88ff.PNG)

Check it out!


![2021-12-02_16-52-49 gif todo](https://user-images.githubusercontent.com/84717663/144435636-f0fc4445-1611-456c-8ff7-f7341e898653.gif)


At last we add the styling to make our app a bit more appealing to the eye.


![csstodo](https://user-images.githubusercontent.com/84717663/144437233-8cce7934-fd1b-4e55-8269-a6fe6a7c0a15.PNG)

![csstodo2](https://user-images.githubusercontent.com/84717663/144437243-dfd6429f-e500-4fc3-a36e-346a490938bd.PNG)

 ![csstodo3](https://user-images.githubusercontent.com/84717663/144437252-1fb7f10a-efe8-4ec8-a568-53236767ffcd.PNG)
 
 Thanks 🇰🇪:






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**



