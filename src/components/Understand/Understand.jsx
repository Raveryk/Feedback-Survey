import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Understand() {
  // local state to hold understand value
  const [understand, setUnderstand] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  // handle next button
  const handleNext = (event) => {
    event.preventDefault();

    console.log("You clicked Next with Understanding");

    // values above 0 required.
    if (understand == 0) {
      alert("Please select a value.");
    } else {
      //send to reducers
      dispatch({ type: "SET_UNDERSTAND", payload: understand });
      //send user to next page.
      history.push("/support");
    }
  };

  return (
    <>
      <Card elevation={6} className="card">
        <h2>How well are you understanding the content?</h2>
        <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
        <form onSubmit={handleNext}>
          <input
            onChange={(event) => setUnderstand(event.target.value)}
            type="radio"
            className="radio"
            name="value"
            value="1"
          />
          1
          <input
            onChange={(event) => setUnderstand(event.target.value)}
            type="radio"
            className="radio"
            name="value"
            value="2"
          />
          2
          <input
            onChange={(event) => setUnderstand(event.target.value)}
            type="radio"
            className="radio"
            name="value"
            value="3"
          />
          3
          <input
            onChange={(event) => setUnderstand(event.target.value)}
            type="radio"
            className="radio"
            name="value"
            value="4"
          />
          4
          <input
            onChange={(event) => setUnderstand(event.target.value)}
            type="radio"
            className="radio"
            name="value"
            value="5"
          />
          5
          <input
            onChange={(event) => setUnderstand(event.target.value)}
            type="radio"
            className="radio"
            name="value"
            value="6"
          />
          6
          <Button
            startIcon={<NavigateNextIcon />}
            className="nextBtn"
            variant="outlined"
            size="small"
            color="primary"
            type="submit"
          ></Button>
        </form>
      </Card>
    </>
  );
}

export default Understand;
