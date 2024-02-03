import { Route, Routes } from "react-router-dom";

import { SideBar, Navbar } from "./Components";
import { Home, Profile, CreateCampaign, CampaignDetail } from "./pages";

export default function App() {
  return (
    <div className="">
      {/* <SideBar /> */}

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
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
