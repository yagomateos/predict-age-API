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
      {/* Display the "name", "age", and "count" properties of the "predictedAge" object */}
      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  )
}

// Export the "App" component as the default export of this module
export default App
