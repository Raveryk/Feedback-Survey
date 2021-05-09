import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

function Success() {
  const history = useHistory();

  // Returns you back to start of survey
  const returnHome = () => {
    history.push("/");
  };

  return (
    <>
      <Card elevation={6} className="card">
        <h2>Success Submitting Feedback!</h2>

        <Button variant="outlined" color="primary" onClick={returnHome}>
          Leave New Feedback
        </Button>
      </Card>
    </>
  );
}

export default Success;
