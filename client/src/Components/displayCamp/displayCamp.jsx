import { useNavigate } from "react-router-dom";
import "./displayCamp.css";
import { loader } from "../../assets";
import FundCard from "../fundCard/fundCard";

export default function DisplayCampaign({
  title,
  isLoading = true,
  campaigns,
}) {
  const navigate = useNavigate();
  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}, {state : campaign}`);
  };

  return (
    <div>
      <h1 className="display-camp-title">{title}</h1>
      <div className="display-camp-div">
        {isLoading && (
          <img src={loader} alt="loader" className="display-loader" />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className="dc-p"> No Campaigns are created</p>
        )}
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.pId}
              {...campaign}
              handleClick={() => {
                handleNavigate(campaign);
              }}
            />
          ))}
      </div>
    </div>
  );
}
