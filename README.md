# Travel Agent App 

Description

A full stack single-page application that allows users to plan their dream trips and add activities to each one. If users need inspiration, they can utilise the built-in AI assistant to generate a personalised list of activity ideas. 

This is my third project in my three-month intensive bootcamp at General Assembly.

*This app has two repositories: frontend and backend

Code snippets in this ReadMe are from backend, for frontend, please go here - [Frontend ReadMe](https://github.com/MCegla-JW/travel-agent)

# Deployment Link 

🏝️The App: [Travel Agent](https://travel-agent-ten-nu.vercel.app/)

# Timeframe & Working Team 

## Collaborators:
- Cornelius Lejeune

This was a paired project and my first time collaborating extensively using Git. The application uses React in the front end and Node.js with Express.js and MongoDB Atlas on the back end. We also used Postman to support API testing during development.

## Timeframe: 1 week

| Time | Task 
|:-----| :-----
| Days 1-2 | Planning (theme, user stories, ERD, wireframes, Trello board set up)
| Days 3 | Core CRUD functionality and authentication 
| Day 4-5 | Error Handling and AI feature integration 
| Day 6 | Styling and responsive design
| Day 7 | Testing, bug fixes, deployment, ReadMe

# Technologies Used

## Frontend:

- React 
- Material UI 
- HTML5
- JSX
- React Router

## Backend: 

- Node.js
- npm
- Express.js
- MongoDB Atlas 
- mongoose 
- bcrypt
- JSON Web Tokens (JWT)
- OpenAI API
- axios

## Development & Design Tools:

- Miro
- Trello 
- Postman (API testing)
- VSCode

## Deployment: 

- Heroku (server)
- Vercel (client)

## Version Control:

- Git 
- GitHub

## Features 

- User Authentication: Secure sign-up, sign-in and sign-out functionality using a JSON Web Token
- AI Assistant: Uses AI to generate personalised activity recommendations based on the user’s destination 
- CRUD Operations: Create, read, update and delete trips 
- Authorization: Protected routes ensure that only authenticated users can access the create, edit and delete content
- Responsive Design: Mobile-first design 
- Error Handling & Validation:  Server-side and client-side validation to prevent invalid data submission
- Environment Variable Security: Sensitive keys managed through .env files

## Brief

The project requirements included:

- The back-end application is built with Express and Node.
- The front-end application is built with React.
- MongoDB is used as the database management system.
- The back-end and front-end applications implement JWT token-based authentication to sign up, sign in, and sign out users.
- Authorization is implemented across the front-end and back-end. Guest users (those not signed in) should not be able to create, update, or delete data in the application or access functionality allowing those actions.
- The project has at least two data entities in addition to the User model. At least one entity must have a relationship with the User model.
- The project has full CRUD functionality on both the back-end and front-end.
- The front-end application does not hold any secret keys. Public APIs that require secret keys must be accessed from the back-end application.
- The project is deployed online so that the rest of the world can use it.

# Planning

- Theme: The planning phase started with individual theme research. My partner and I met to discuss our ideas and to decide which theme to go with. We decided to go mobile first from the start.
- ERD: I took on the Entity Relationship Diagram (ERD) creation to visualise the relationships between the User, Trip and Activity models
- Wireframes: My partner created the wireframes to outline the user journey and overall flow of the app
- Routing Table: I created the routing table to define the routes required for the single-page application
- Project Management: I set up the Trello board for task management 
- Project Set-up: My partner created the GitHub repositories and handled the initial project configuration
- ESlint: We both installed and configured ESLint to ensure our code followed consistent styling and best practices
- Task Delegation: We split the tasks so we each got a chance to work on both the front and the back end 

## Approach taken:
 
- At the start of each day, we had a stand up meeting to review our progress and run through the tasks to be done that day.

- We used GitHub to collaborate and manage version control. Each of us created feature branches from the main branch submitted pull requests before merging. We notified each other whenever a new PR was ready so we could review it in a timely manner to prevent either of us from being blocked. This workload helped us to keep main up to date and ensured we were always working on the latest version of the code. Thanks to this approach, we experienced no merge conflicts throughout the project.

# My Work

## My personal achievements are: 

- Coming up with the project theme 
- Created the user Schema (used schema hooks to validate password) 
- Developed backend login and register routes using JSON Web Token 
- Implemented authentication on both backend and frontend
- Used localStorgae to store a token in the browser
- Set up the homepage on backend and frontend including the marketing content with React Slick carousel
- Implemented React Slick carousel in the TripIndex file 
- Created the boilerplate code for both backend (established server and database connections) and frontend to establish project structure
- Conditionally rendered jsx messages based on user state 
- Developed a NotFound component for handling unknown routes
- Implemented error handling for both frontend and backend
- Built the NavBar component for the frontend, sourced the logo 
- Styled the app using Material UI for consistent and responsive design 
- Created a date validation service function to handle form inputs and display dates in a user-friendly format on the frontend edit page

# Build/Code Process

## Used localStorage to store a token in the browser and get the user a token 

Used the setItem, getItem and removeItem methods on localStorage to store the authentication token in the browser and remove it when no longer needed. I then created a getUserFromToken service function to extract user information from the token, allowing access to protected routes. The function also checks the token's validity each time it's accessed and removes it if it has expired.

```js
const tokenName = 'tripToken'

export const setToken = (token) => {
    localStorage.setItem(tokenName, token)
}

export const getToken = () => {
    return localStorage.getItem(tokenName)
}

export const removeToken = () => {
    localStorage.removeItem(tokenName)

}

export const getUserFromToken = () => {
    const token = getToken()
    if (!token) return null 
    const payloadString = token.split('.')[1]
    const payloadJSON = atob(payloadString)
    const { user, exp } = JSON.parse(payloadJSON)
    if ( exp < Date.now() / 1000) {
        removeToken()
        return null
    }
    return user 
}
```

## Conditionally rendered jsx messages based on user state 

I used useState and useContext to conditionally render frontend messages depending on user and page state. I also utilized MUI's CircularProgress to enhance user experience while the page loads. 

```js
        </Box>
        {/* Loading Spinner */}
          {isLoading ? (
            <Box sx={{ mt: 6 }}>
              <CircularProgress size={50}/>
            <Typography sx={{ mt: 2, color: 'gray'}}>Loading trips ...</Typography>
            </Box>
          ) : (
        <>
        {/*Slider with trips */}
        <Box sx={{ width: '100%', maxWidth: 800, mb: 4 }}>
          {trips.length === 0 ? (
            <Typography>No trips created yet! Create your first trip below!</Typography>
          ) : (
          <TripSlider trips={trips} />
          )}
        </Box>
```

## Created a date validation service function to handle form inputs and display dates in a user-friendly format

I created a service function to users only enter valid dates, and they are notified if the input is invalid. This function was used in both TripCreate and TripUpdate.

```js
 const validateDates = (startDate, endDate) => {
  const errors = {}
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (start < today) {
    errors.startDate = 'Start date cannot be in the past'
  }

  if (end < start) {
    errors.endDate = 'End date must be after start date'
  }

  return errors
}

export default validateDates;
```
I also create the formatDateForTextField function, used inside TripUpdate. As MongoDB expects dates in ISO string format, the date returned to the text field in the Trip Edit form was not user-friendly. This function converts the ISO date into a regular more readable format date.

```js
const formatDateForTextField = (isoDate) => {
    if (!isoDate) return ''
    const date = new Date(isoDate)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
```
Finally, when the user submits the updated trip form, the dates are converted back to ISO string so MongoDB can store them correctly.

```js
const submissionData = {
      ...formData,
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.endDate).toISOString(),
```

## Screenshots
TBC

## Challenges 

- No notable team challenges to report.
- Learning the difference between front-end (React) and back-end(Node.js, Express) and how they communicate.
- useContext and userContext took some time to understand but I improved my knowledge of them through extensive use in this project.

## Wins

- OpenAI Integration – I’m very pleased we successfully integrated AI into this project, as I believe it is becoming a standard feature in many modern applications.
- Working effectively in a team, communicating well, and avoiding merge conflicts.
- Successfully creating a fully RESTful API.
- Using a new library for styling – I learned Material UI and implemented it effectively in the project, which helped ensure consistent styling and responsiveness across the app.

## Key Learnings/Takeaways

- I really enjoyed collaborating with my partner on GitHub, it gave me a real-life example of how developers work together in a professional environment.
- Using Git and GitHub extensively during this project improved my knowledge and confidence in version control.
- Learning Material UI took me about half a day, but I was able to implement it quickly. I enjoyed using it because it helped ensure consistent styling across the app and made it easier to create a responsive design compared to plain CSS.
- My partner was responsible for implementing the AI functionality, but he walked me through the code step by step. I now have a much better understanding of it and feel confident that I can implement similar features in my future projects.
- Learning React and using a wide range of packages for it that I have never used before 
Deployment using Heroku and Vercel.

## Known Bugs

- Not a bug but the AI does take about 20s to generate a response as we are using the cheapest model.

## Future Improvements 

- Dark/Light mode
- Users can set a background photo for trip cards or at lest adjust coolers themselves 
- Connect to third party API to source weather data in each trip destination and display it for users 
- User can edit and delete their profile - I have a featured branch started for this but I need to do more research on profile deletion 
- Use toastify for more interesting error messaging on front end 
- Improve styling on AI feature - add a loading gif/icon as it takes a while to generate results 

## Installation & Setup

1. Clone the repo
-git clone https://github.com/MCegla-JW/travel-agent-api

2. Install dependencies
- npm install

  3. Create .env file with the following variables:
- VITE_API_URL=https://travel-agent-app-153a0b5620f7.herokuapp.com/
  
4. Start the development server
5. - npm run dev

