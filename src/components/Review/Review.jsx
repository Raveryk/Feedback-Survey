import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Review() {
  const history = useHistory();

  const dispatch = useDispatch();

  // bringing reducers in from Redux to display values.
  const feelingNum = useSelector((store) => store.feelingReducer);
  const understandNum = useSelector((store) => store.contentReducer);
  const supportNum = useSelector((store) => store.supportReducer);
  const commentText = useSelector((store) => store.commentReducer);

  // Submit button handler to capture data and send it to DB.
  const handleSubmit = () => {

          let feedbackData = {
            feeling: Number(feelingNum),
            understanding: Number(understandNum),
            support: Number(supportNum),
            comments: commentText
          } 
      
    //POST route in here and in server.js
    axios
      .post("/feedback", feedbackData)
      .then((response) => {
        console.log("Added feedback successfully.", response);
        dispatch({ type: "CLEAR_FEEDBACK" });
        // if successful, push to Success page
        history.push("/success");
      })
      .catch((error) => {
        alert("Error submitting feedback");
        console.log("Something went wrong entering the feedback.", error);
      });
  };

  // To edit page handler
  const toEdit = () => {
    history.push('/edit');
    
}

  return (
    <>
      <h2>Review Your Feedback</h2>

        <>
          <p>Feelings: {feelingNum} </p>
          <p>Understanding: {understandNum}</p>
          <p>Support: {supportNum}</p>
          <p>Comments: {commentText}</p>
        </>
    

      <button onClick={handleSubmit}>SUBMIT</button>
      <p>
        <button onClick={toEdit}>Edit Feedback</button>
      </p>
    </>
  );
}

export default Review;
