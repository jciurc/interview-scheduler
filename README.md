# Interview Scheduler

Interview Scheduler is a single page App built in JS that utilizes React and PostgreSQL.  
It simulates a web portal that allows students to view and book appointments with instructors.

## Features

* `View and Book Appointments`
* `Update or Cancel Appointments`
* `Mobile and Desktop View`
* `Automated Testing`

## Usage

**Download or Clone the Project in Your Terminal**

`git clone git@github.com:symphony/interview-scheduler.git && cd interview-scheduler`

**Install Dependencies**

`npm install`

**Clone and Run External Scheduler API**

`The Scheduler API repo will need to be cloned and set up. Visit [@lighthouse-labs/scheduler-api](https://github.com/lighthouse-labs/scheduler-api) for more instructions`

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

* `npm test` 
* `npm run storybook` (visit http://localhost:9009)
* `npm run cypress` (run Scheduler API in test environment with `NODE_ENV=test npm start`)

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