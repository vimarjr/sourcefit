import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getPersons() {
  axios.get('http://localhost:1337/person/')
  .then(response => {
  	let persons = JSON.stringify(response.data);
  	ReactDOM.render(persons , document.getElementById('results'));
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
}

const App = () => {
  return (
    <div>
      PERSON App

      <div id="create">

      </div>

      <div id="find">
	      <button onClick={getPersons}>
				  Find Persons
				</button>
      </div>

      <div id="findone">
      </div>

      <div id="update">
      </div>

      <div id="delete">
      </div>


    	<div id="results"></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));