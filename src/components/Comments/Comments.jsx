import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Comments() {
  const [comments, setComments] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  // function to handle dispatch to redux and move to next page
  const handleNext = (event) => {
    event.preventDefault()

    console.log("You clicked Next with Comments");
    // send comments to redux reducer
    dispatch({ type: 'SET_COMMENTS', payload: comments })

    history.push("/review");
  };

  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <form onSubmit={handleNext}>
      <input
        onChange={(event) => setComments(event.target.value)}
        value={comments}
        type="textArea"
      />

      <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Comments;
