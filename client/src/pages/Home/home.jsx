import "./home.css";
import { useEffect, useState } from "react";
import { useStateContext } from "../../context";
import { DisplayCampaign } from "../../Components";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);
  return (
    <div className="home-page">
      <DisplayCampaign
        title="Campaigns 🌐"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
}
