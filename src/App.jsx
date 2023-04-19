// Import the CSS styles and necessary libraries
import './App.css'
import Axios from 'axios';
import { useEffect, useState } from 'react'

// Define the functional component "App"
function App() {
  // Initialize the state variables "name" and "predictedAge"
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  // Define the function that will fetch data from the API
  const fetchData = () => {
    // Use Axios to send a GET request to the agify API with the "name" parameter
    Axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      // Update the "predictedAge" state variable with the response data
      setPredictedAge(res.data);
    });
  };

  // Render the component's UI
  return (
    <div className="App">
      {/* Add an input field that updates the "name" state variable on change */}
      <input
        placeholder="Ex: Yago..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      /><br></br><br></br>
      {/* Add a button that triggers the "fetchData" function when clicked */}
      <button onClick={fetchData}>Predict Age</button>
      {/* Display the "name", "age", and "count" properties of the "predictedAge" object */
      }



      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  )
}

export default App

{/* NOTES:

The ? is called the optional chaining operator and is used to handle null or undefined values in a safe way.

In this code, predictedAge is initially set to null in the state, so when the component first renders, the values for predictedAge.name, predictedAge.age, and predictedAge.count will be undefined.

The ? operator is used to avoid errors caused by trying to access properties of an undefined value. It essentially checks if the value before the ? is truthy (not null or undefined) before trying to access the property after the ?.

For example, {predictedAge?.name} is equivalent to writing predictedAge && predictedAge.name, but with less boilerplate code.

This makes the code safer and less prone to errors if the API doesn't return the expected data structure, or if the state hasn't been updated yet.*/
}
