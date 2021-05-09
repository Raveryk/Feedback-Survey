import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TextField from "@material-ui/core/TextField";

function Comments() {
  const [comments, setComments] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  // function to handle dispatch to redux and move to next page
  const handleNext = (event) => {
    event.preventDefault();

    console.log("You clicked Next with Comments");
    // send comments to redux reducer
    dispatch({ type: "SET_COMMENTS", payload: comments });

    history.push("/review");
  };

  return (
    <>
      <Card elevation={6} className="card">
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={handleNext}>
          <TextField
            onChange={(event) => setComments(event.target.value)}
            value={comments}
            type="textArea"
            multiline
            rows={5}
            variant="filled"
          />
          <Button
            startIcon={<NavigateNextIcon />}
            className="nextBtn"
            size="small"
            variant="outlined"
            color="primary"
            type="submit"
          ></Button>
        </form>
      </Card>
    </>
  );
}

export default Comments;
