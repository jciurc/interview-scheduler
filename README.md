## About

Interview Scheduler is a single page App built in JS that utilizes React and PostgreSQL.  
It simulates a web portal that allows students to view and book appointments with instructors.  
<sub>disclaimer - this project was built for educational purposes only as part of the curriculum at [Lighthouse Labs](https://github.com/lighthouse-labs) - Web Dev Bootcamp</sub> 

## Features

* `View and Book Appointments`
* `Update or Cancel Appointments`
* `Mobile and Desktop View`
* `Automated Testing`

## Usage

**Download or Clone the Project**  
`git clone git@github.com:symphony/interview-scheduler.git && cd interview-scheduler`

**Node Version**  
This project has dependencies that require an older version of Node.  
If using M1 Mac please switch to `Node 15x`
For Vagrant/WSL please use `Node 12x`

**Install Dependencies**  
`npm i`

**Clone and Run External Scheduler API** ([@lighthouse-labs/scheduler-api](https://github.com/lighthouse-labs/scheduler-api))  
The Scheduler API repo will need to be cloned and set up. Visit link above and follow the instructions.  
Once running curl or visit `http://localhost:8001/api/debug/reset` to reseed that db.

**Set up ENV variables**  
Clone `.env.development.example` and rename to `.env.development` (file is already configured with default values)

**Run the Server**  
`npm start`

**Visit Scheduler in Your Browser**  
`http://localhost:8000`  

**Stop the Server**  
Use hotkey `CTRL + C` in the terminal

### Dashboard 

<img alt="Screenshot of Scheduler's Dashboard" src="docs/dashboard.png?raw=true" name="Dashboard" width="1000"></img>

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
* `npm run cypress` and restart Scheduler API in test environment with `NODE_ENV=test npm start`

## Dependencies

- react
- react-dom
- react-scripts
- axios
- classnames
- normalize.css

## Dev Dependencies

- @babel/core
- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-links
- @storybook/addons
- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- babel-loader
- cypress
- node-sass
- prop-types
- react-test-renderer

## Troubleshooting
- Node versions may vary from machine to machine. If you are having trouble running the project, some versions to try are 12, 14-16. The project was built and tested in a WSL2 environment on Windows 11 running Node v12.22.12
- The (external) Scheduler API database data can be reset by visiting `http://localhost:8001/api/debug/reset` 
- The Scheduler API can intentionally fail requests by running it with `npm run error`
- A test environment for the Scheduler API can be run with `NODE_ENV=test npm start` - this is used for Cypress E2E testing
- More instructions for Scheduler API can be found here: https://github.com/lighthouse-labs/scheduler-api
