import { useHistory } from "react-router-dom";

function Support() {
  const history = useHistory();

  const handleNext = () => {
    console.log("You clicked Next with Support");

    history.push("/comments");
  };

  return (
    <>
      <h2>How well are you being supported?</h2>
      <h5>Scale from 1-6 where 1 = Very Poor and 6 = Very Well</h5>
      <input type="number" max="6" min="1" required />

      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Support;
