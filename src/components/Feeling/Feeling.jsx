import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Feeling() {
  const [feeling, setFeeling] = useState(0);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleNext = (event) => {
    event.preventDefault();

    console.log("You clicked Next with Feeling");
    if( feeling == 0 ) {
        alert('Please select a value.');
    } else {

    dispatch({ type: "SET_FEELING", payload: feeling });

    history.push("/understand");
    }
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
      <form onSubmit={handleNext}>
        {/* <input
        onChange={(event) => setFeeling(event.target.value)}
        value={feeling}
        type="number"
        max="6"
        min="1"
        required
      /> */}
        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="1"
        />1

        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="2"
        />2

        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="3"
        />3

        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="4"
        />4 

        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="5"
        />5

        <input
          onChange={(event) => setFeeling(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="6"
        />6
        

        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Feeling;
