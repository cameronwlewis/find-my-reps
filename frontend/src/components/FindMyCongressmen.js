import { useState } from "react";
import CongressmanCard from "./CongressmanCard";
import "../styles/FindMyCongressmen.css";

export const FindMyCongressmen = () => {
  const [state, setState] = useState("");
  const [senators, setSenators] = useState([]);
  const [reps, setReps] = useState([]);

  const getReps = () => {
    return fetch(`/representatives/${state}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setReps(json.results);
      });
  };

  const getSenators = () => {
    return fetch(`/senators/${state}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSenators(json.results);
      });
  };

  const handleSubmit = (event) => {
    // TODO: validation of state initials
    event.preventDefault();
    getReps();
    getSenators();
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
      <div className={"cards"}>
        <div className={"repCards"}>
          <div>
            <p>Representatives</p>
            {reps.map((rep, index) => (
              <CongressmanCard congressman={rep} key={index} />
            ))}
          </div>
        </div>
        <div className={"senatorCards"}>
          <div>
            <p>Senators</p>
            {senators.map((senator, index) => (
              <CongressmanCard congressman={senator} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindMyCongressmen;
