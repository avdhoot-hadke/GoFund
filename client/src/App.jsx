import { Route, Routes } from "react-router-dom";
import { SideBar, Navbar } from "./Components";
import { Home, Profile, CreateCampaign, CampaignDetail } from "./pages";
import Landing from "./pages/Landing/landing";
import Footer from "./Components/Footer/footer";

export default function App() {
  return (
    <div>
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
          <Route path="/campaign" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
