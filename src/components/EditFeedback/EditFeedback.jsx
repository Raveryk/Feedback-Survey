import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

function EditFeedback() {
  const history = useHistory();
  const dispatch = useDispatch();

  // create local state holders for new feedback values
  const [newFeeling, setNewFeeling] = useState(feelingNum);
  const [newUnderstand, setNewUnderstand] = useState(understandNum);
  const [newSupport, setNewSupport] = useState(supportNum);
  const [newComment, setNewComment] = useState(commentText);

  // get previous feedback values from redux store to use as placeholders
  const feelingNum = useSelector((store) => store.feelingReducer);
  const understandNum = useSelector((store) => store.contentReducer);
  const supportNum = useSelector((store) => store.supportReducer);
  const commentText = useSelector((store) => store.commentReducer);

  // function to send you back to review page to look over edits
  const toReview = () => {
    // multiple if else chains to either set reducer values to
    // previous value if no change or new value
    if (newFeeling == undefined) {
      dispatch({ type: "SET_FEELING", payload: feelingNum });
    } else {
      dispatch({ type: "SET_NEW_FEELING", payload: newFeeling });
    }
    if (newUnderstand == undefined) {
      dispatch({ type: "SET_UNDERSTAND", payload: understandNum });
    } else {
      dispatch({ type: "SET_NEW_UNDERSTAND", payload: newUnderstand });
    }
    if (newSupport == undefined) {
      dispatch({ type: "SET_SUPPORT", payload: supportNum });
    } else {
      dispatch({ type: "SET_NEW_SUPPORT", payload: newSupport });
    }
    if (newComment == undefined) {
      dispatch({ type: "SET_COMMENT", payload: commentText });
    } else {
      dispatch({ type: "SET_NEW_COMMENTS", payload: newComment });
    }

    // send me back to review page!
    history.push("/review");
  };

  return (
    <>
      <Card elevation={6} className="card">
        <p>
          Feelings:
          <input
            type="number"
            max="6"
            min="1"
            placeholder={feelingNum}
            value={newFeeling}
            onChange={(event) => setNewFeeling(event.target.value)}
          />
        </p>
        <p>
          Understanding:
          <input
            type="number"
            max="6"
            min="1"
            placeholder={understandNum}
            value={newUnderstand}
            onChange={(event) => setNewUnderstand(event.target.value)}
          />
        </p>
        <p>
          Support:
          <input
            type="number"
            max="6"
            min="1"
            placeholder={supportNum}
            value={newSupport}
            onChange={(event) => setNewSupport(event.target.value)}
          />
        </p>
        <p>
          Comments:
          <input
            type="text"
            placeholder={commentText}
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
        </p>

        <Button onClick={toReview} variant="outlined" color="primary">
          SAVE
        </Button>
      </Card>
    </>
  );
}

export default EditFeedback;
