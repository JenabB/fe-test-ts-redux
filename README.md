## Frontend Redux Typescript test

### Installation
Install the application `yarn`
Run the application `yarn start`
Run the mock database `yarn start:db`

### What to do
The application is currently running a mock database on `http://localhost:3010`. 

#### 1. Load all users into the store
Inside the `userSlice`, there is an action which loads the users. It is currently being dispatched and calling the API. 

You will need to load up the users into the Redux Store

#### 2. Add a new User
Inside the `userSlice`, there is an action which adds a user. You will need to hook up an action into the button which will call the action and add it into the store. The name can be hardcoded

#### 3. Delete a user
Add a button next to the list and delete the user

#### Extra points
If you can incorporate [material ui](https://mui.com/) into the UI 