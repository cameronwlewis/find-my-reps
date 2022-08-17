import { useState } from "react";
import CongressmanCard from "./CongressmanCard";
import { getReps, getSenators } from "../services/congressmanApiService";
import "../styles/FindMyCongressmen.css";
import states from "../data/usStates.js";

export const FindMyCongressmen = () => {
  const [state, setState] = useState("");
  const [senators, setSenators] = useState([]);
  const [reps, setReps] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getReps(state).then((res) => setReps(res));
    getSenators(state).then((res) => setSenators(res));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select
          name="state"
          defaultValue="default"
          onChange={(e) => {
            setState(e.target.value);
          }}
        >
          <option value="default" disabled hidden>
            Select your state
          </option>
          {states.map((option, index) => (
            <option key={index} value={option["abbreviation"]}>
              {option.name}
            </option>
          ))}
        </select>
        <div>
          <button type="submit" value="Submit" className={"submitButton"}>
            Submit
          </button>
        </div>
      </form>
      <div className={"cards"}>
        <div className={"repCards"}>
          {reps.length > 0 && (
            <div>
              <p className={"columnHeading"}>Representatives</p>
              {reps.map((rep, index) => (
                <CongressmanCard congressman={rep} isRep={true} key={index} />
              ))}
            </div>
          )}
        </div>
        <div className={"senatorCards"}>
          {senators.length > 0 && (
            <div>
              <p className={"columnHeading"}>Senators</p>
              {senators.map((senator, index) => (
                <CongressmanCard
                  congressman={senator}
                  isRep={false}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FindMyCongressmen;
