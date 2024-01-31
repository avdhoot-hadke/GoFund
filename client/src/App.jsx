import { Route, Routes } from "react-router-dom";

import { SideBar, Navbar } from "./Components";
import { Home, Profile, CreateCampaign, CampaignDetail } from "./pages";

export default function App() {
  return (
    <div className="d-flex flex-row flex-grow-1">
      <SideBar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createCampaign" element={<CreateCampaign />} />
          <Route path="/campaignDetail" element={<CampaignDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
