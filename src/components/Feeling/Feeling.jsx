import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';

function Feeling() {
  const [feeling, setFeeling] = useState(0);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleNext = (event) => {
    event.preventDefault();
    
    console.log("You clicked Next with Feeling");

    dispatch({ type: 'SET_FEELING', payload: feeling})

    history.push("/understand");
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
      <form onSubmit={handleNext}>
      <input
        onChange={(event) => setFeeling(event.target.value)}
        value={feeling}
        type="number"
        max="6"
        min="1"
        required
      />

      <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Feeling;
