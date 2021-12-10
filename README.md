# Interview Scheduler

A timetable app for scheduling interviews. Allows you create, edit and delete appointments for all days of the week.
The front end is built in react for a seamless navigation experience.

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.
- Run your scheduler-api back-end in your host terminal

## In the Browser
- Navigate to your server `localhost:8000/`


!["Empty Scheduler"](https://github.com/rewpt/scheduler/blob/master/docs/EmptyAppointments.png?raw=true)
Opening up to the empty scheduler

## Usage
- Click the plus sign to add an appointment in the time slots
- Write in the student's name and click the selected interviewer before saving an appointment in the time slot.

!["Booking Appointment"](https://github.com/rewpt/scheduler/blob/master/docs/BookingAppt.png?raw=true)
Booking an appointment

!["Viewing appointments"](https://github.com/rewpt/scheduler/blob/master/docs/BookedAppts.png?raw=true)
Viewing booked appointments

## Features
- Record Keeping
  - Spots remaining will update automatically for each day, showing which spots are available during the week.
- Express back-end
  - Appointments saved will be remembered for next visit
- Error handling
  - Appointments unable to be saved or deleted will show an error


## Dependencies
  
    "axios": "^0.24.0",
    "classnames": "^2.2.6",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.0.0"


## Testing

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress (make sure dev dependencies installed)

```sh
npm run cypress
```