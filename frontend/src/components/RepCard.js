import "../styles/RepCard.css";

export const RepCard = ({ rep }) => {
  const office = rep["office"].split(";");
  return (
    <div className={"cardWrapper"}>
      <div>
        <div className={"cardHeader"}>
          <span>{rep["name"]}</span>
          <span>{rep["party"]}</span>
        </div>
        <div className={"cardHeader"}>
          <span>{rep["state"]}</span>
          <span>District {rep["district"]}</span>
        </div>
      </div>
      <br />
      <div className={"cardFooter"}>
        <div>{office[0]}</div>
        <div>{office[1]}</div>
        <br />
        <div>{rep["phone"]}</div>
        <br />
        <div>{rep["link"]}</div>
      </div>
    </div>
  );
};

export default RepCard;
