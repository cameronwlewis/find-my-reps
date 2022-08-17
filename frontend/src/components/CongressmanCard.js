import "../styles/CongressmanCard.css";

export const CongressmanCard = ({ congressman }) => {
  const addressLine1 = congressman["office"].match(/.+?(?=Washington)/);
  const addressLine2 = congressman["office"].match(/Washington.*/);
  return (
    <div className={"cardWrapper"}>
      <div>
        <div className={"cardHeader"}>
          <span>{congressman["name"]}</span>
          <span>{congressman["party"]}</span>
        </div>
        <div className={"cardHeader"}>
          <span>{congressman["state"]}</span>
          <span>District {congressman["district"]}</span>
        </div>
      </div>
      <br />
      <div className={"cardFooter"}>
        <div>{addressLine1}</div>
        <div>{addressLine2}</div>
        <br />
        <div>{congressman["phone"]}</div>
        <br />
        <div>{congressman["link"]}</div>
      </div>
    </div>
  );
};

export default CongressmanCard;
