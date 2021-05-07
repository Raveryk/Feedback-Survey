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

    if( understand == 0 ) {
        alert('Please select a value.');
    } else {

    dispatch({ type: "SET_UNDERSTAND", payload: understand });

    history.push("/support");
  }
};

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
      <form onSubmit={handleNext}>
      {/* <input
        onChange={(event) => setUnderstand(event.target.value)}
        type="number"
        value={understand}
        max="6"
        min="1"
        required
      /> */}

        <input
          onChange={(event) => setUnderstand(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="1"
        />1

        <input
          onChange={(event) => setUnderstand(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="2"
        />2

        <input
          onChange={(event) => setUnderstand(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="3"
        />3

        <input
          onChange={(event) => setUnderstand(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="4"
        />4 

        <input
          onChange={(event) => setUnderstand(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="5"
        />5

        <input
          onChange={(event) => setUnderstand(event.target.value)}
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

export default Understand;
