import { useState } from "react";
import RepCard from "./RepCard";

export const FindMyReps = () => {
  const [state, setState] = useState("");
  const [senators, setSenators] = useState({});
  const [reps, setReps] = useState([]);

  const getReps = () => {
    return fetch(`/representatives/${state}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);

        console.log(JSON.stringify(json));
        // console.log("what is json results: ", json.results);
        setReps(json.results);
        console.log("REPS: ", reps);
      });
  };

  const getSenators = () => {
    return fetch(`/senators/${state}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSenators(json);
      });
  };

  const handleSubmit = (event) => {
    // TODO: validation of state initials
    event.preventDefault();
    getReps();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          State:
          <input
            type="text"
            name="state"
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className={"results"}>
        <div>
          <p>Reps</p>
          <div>
            {reps.map((rep, index) => (
              <RepCard rep={rep} key={index} />
            ))}
          </div>
        </div>
        <div>
          <p>Senators</p>
          {senators.success === true && (
            <div>
              <p>{senators}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FindMyReps;
