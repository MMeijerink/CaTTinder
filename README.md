# CaTTinder

Find cats you like using the CaTTinder application.

Like and Dislike cats in the home page.
Check out your liked and disliked cats in the overview pages. 
Configure your preferences in the profile page.

## TechStack
TypeScript, React, Redux and CSS are used for the base of the application.
In addition to that also redux-persist is used to store the liked/disliked cats and the profile configuration in the browser cache. The routing is done using react-router-dom. Axios is used as http-client. 

## Home
The home page shows a random picture of a cat (based on your profile preferences). You can like the cat by clicking on the right button and you can dislike the cat by clicking on the left button. 

## Like / Dislike overview
In the like and dislike overviews you can see an overview of the pictures of cats you liked or disliked. The liked and disliked cat lists are stored in the browser cache.

## Profile
The profile page can be used to configure your preferences. These prefrences will be used in the home screen to find the best matches. The profile is stored in cache of the browser.

## Up-to-date data
The application is getting all the cat data from the server (theCatAPI) to ensure that we always have up-to-date data.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
