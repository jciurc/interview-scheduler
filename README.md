## About

Interview Scheduler is a single page App built in JS and React.
It simulates a web portal that allows students to view and book appointments with instructors.  
<sub>disclaimer - this project was built for educational purposes only as part of the curriculum at [Lighthouse Labs](https://github.com/lighthouse-labs) - Web Dev Bootcamp</sub> 

## Features

* `View and Book Appointments`
* `Update or Cancel Appointments`
* `Mobile and Desktop View`
* `Automated Testing`

## Usage

**Download or Clone the Project** \
`git clone git@github.com:symphony/interview-scheduler.git && cd interview-scheduler`

**Set up Server API** (Cloned from: [@lighthouse-labs/scheduler-api](https://github.com/lighthouse-labs/scheduler-api)) 
* `cd server`
* `cp .env.development.example .env.development` (file is already configured with default values)
* `cp .env.test.example .env.test`
* `npm i`
* `npm start`

Once running `curl` or visit `http://localhost:8001/api/debug/reset` to reseed the db. \
Visit repo above for more information.

**Set up Client in Separate Terminal** 
* `cd client`
* `cp .env.development.example .env.development`
* `npm i`
* `npm start`

**Visit Scheduler in Your Browser** \
`http://localhost:8000`  

**Stop the Server or Client** \
Use hotkey `ctrl + c` in respective terminal

### Dashboard (Updated Colours) 

<img alt="Screenshot of Scheduler's Dashboard" src="docs/05-dark.png?raw=true" name="Dashboard" width="1000"></img>

### Create or Update Appointments 

<img alt="Screenshot of Scheduler's Edit Page" src="docs/create.png?raw=true" name="Create or Update Appointments" width="1000"></img>

### Cancel Appointment

<img alt="Screenshot of Delete Confirmation" src="docs/confirm.png?raw=true" name="Cancel Appointment" width="1000"></img>

### Mobile View

<img alt="Screenshot of Mobile View" src="docs/mobile.png?raw=true" name="Mobile View" width="600"></img>

---

## Running Tests (Ensure Scheduler API and PSQL db are running)

* `npm test` for Jest tests
* `npm run storybook` and visit http://localhost:9009

## Running Cypress Tests

* Restart Scheduler API in test environment with `NODE_ENV=test npm start`
* `npm run cypress`

## Dependencies

- react
- react-dom
- react-scripts
- typescript
- axios
- normalize.css

## Dev Dependencies

- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-links
- @storybook/addons
- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- @types/node
- @types/react
- @types/react-dom
- babel-plugin-named-exports-order
- cypress
- sass
- webpack

## Server Dependencies
- body-parser
- cors
- dotenv
- express
- helmet
- pg
- socket.io
- ws
- jest
- supertest

## Troubleshooting
- The API database data can be reset by visiting `http://localhost:8001/api/debug/reset` or `running npm run reset`
- The Scheduler API can intentionally reject requests by running it with `npm run error`
- A test environment for the Scheduler API can be run with `NODE_ENV=test npm start` - this is used for Cypress E2E testing
- Cypress may need an external server to be running (such as X-Server on WSL Machines)
- More instructions for Scheduler API can be found here: https://github.com/lighthouse-labs/scheduler-api
