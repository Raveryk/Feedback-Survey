import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Support() {
  const [support, setSupport] = useState(0);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleNext = (event) => {
    event.preventDefault()
    console.log("You clicked Next with Support");

    if( support == 0 ) {
        alert('Please select a value.');
    } else {

    dispatch({ type: "SET_SUPPORT", payload: support });

    history.push("/comments");
  }
}

  return (
    <>
      <h2>How well are you being supported?</h2>
      <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
      <form onSubmit={handleNext}>
        {/* <input
          onChange={(event) => setSupport(event.target.value)}
          value={support}
          type="number"
          max="6"
          min="1"
          required
        /> */}

        <input
          onChange={(event) => setSupport(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="1"
        />1

        <input
          onChange={(event) => setSupport(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="2"
        />2

        <input
          onChange={(event) => setSupport(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="3"
        />3

        <input
          onChange={(event) => setSupport(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="4"
        />4 

        <input
          onChange={(event) => setSupport(event.target.value)}
          type="radio"
          className="radio"
          name="value"
          value="5"
        />5

        <input
          onChange={(event) => setSupport(event.target.value)}
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

export default Support;
