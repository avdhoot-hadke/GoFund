import "./profile.css";

import { useEffect, useState } from "react";
import { useStateContext } from "../../context";
import { DisplayCampaign } from "../../Components";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);
  return (
    <div className="profile-page">
      <DisplayCampaign
        title="Campaigns 🌏"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
}
