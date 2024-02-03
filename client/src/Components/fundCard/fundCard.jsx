import "./fundCard.css";
import { tagType, thirdweb, profile } from "../../assets";
import { daysLeft } from "../../utils";

export default function FundCard({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) {
  const remainingDays = daysLeft(deadline);
  return (
    <div className="fundCard-div" onClick={() => handleClick()}>
      <img src={image} className="fc-img" alt="fund" />
      <div className="fc-cont-1">
        <h3 className="truncate mb-1 ms-2">{title}</h3>
        <p className="truncate mb-1 ms-2">{description}</p>
      </div>
      <div className="fc-cont-2">
        <div className="fc-goalDead ms-3">
          <h6 className="mb-1">{amountCollected}</h6>
          <p className="truncate">Raised of {target}</p>
        </div>
        <div className="fc-goalDead me-3">
          <h6 className="mb-1">{remainingDays}</h6>
          <p>Days Left</p>
        </div>
      </div>
      <div className="fc-own ms-3 me-3">
        <img src={profile} alt="owner" />
        <p className="mb-0 ms-1 fc-own-p text-truncate">
          by <span className="fc-span">{owner}</span>
        </p>
      </div>
    </div>
  );
}
