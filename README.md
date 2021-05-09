# Redux Feedback Loop


## Description

Duration: Weekend Sprint

For this project I created a feedback survey that utilizes multiple components (set up as separate pages), storing each response and sending it to the Redux store. After the survey questions have been answered a review page displays all of your previously recorded responses and gives you the opportunity to either submit that data or edit it to make corrections. Upon submission, the data is sent to the server and then sent to the database for storage. If all of this goes smoothly a success page will appear. Beyond this, if you would like to see all of the previously recorded values, the admin page offers you the chance to see all of this listed out on a table. From here you may delete any feedback or return to the beginning of the survey.

## Screen Shot

<img src="Screen Shot 2021-05-09 at 4.38.11 PM.png">
<img src="Screen Shot 2021-05-09 at 4.38.30 PM.png">
<img src="Screen Shot 2021-05-09 at 4.38.47 PM.png">


### Prerequisites

- Node.js
- React.js 
- Redux
- Material-UI https://material-ui.com/
- Postico


## Installation

To get this application running follow the directions below:

1: Create a database named "prime_feedback"
2: Input the SQL queries from the data.sql file into Postico and execute those queries
3: Open up your editor of choice with the project files and run npm install and npm install pg
4: Next, run npm install @material-ui/core to access the Material-UI styling.
5: Install npm redux react-redux
6: Then run npm server and open a second terminal window to run npm run client and browser window with the app should appear!

## Usage

1. Enter a value based on each question referring to feelings, comprehension, support, and comments and click the next arrow.
2. On the review page review your answers. If you would like to make an edit click 'Edit Feedback', otherwise press 'SUBMIT'
3. If all goes well a success page will appear and will give you the option to return to the start to enter another feedback form.
4. If you would like to see the total list of feedback type into the browser: http://localhost:3000/#/admin
5. Enjoy!

## Built With
- React.js
- Material-UI
- REDUX
- Node.js
- Postico


## Acknowledgement 
Thanks to Prime Digital Academy for giving me the knowledge and confidence to build this app and to try out some new things! Also many thanks to my lovely partner, Becky, for being cool with me staring at a screen for hours on end.

## Support
If you have suggestions or issues, please email me at raveryk@gmail.com