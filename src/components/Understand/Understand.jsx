import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Understand() {
  const [understand, setUnderstand] = useState(0);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleNext = (event) => {
    event.preventDefault();
    
    console.log("You clicked Next with Understanding");

    dispatch({ type: "SET_UNDERSTAND", payload: understand });

    history.push("/support");
  };

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
      <form onSubmit={handleNext}>
      <input
        onChange={(event) => setUnderstand(event.target.value)}
        type="number"
        value={understand}
        max="6"
        min="1"
        required
      />

      <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Understand;
