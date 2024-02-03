import "./campDet.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { ethers } from "ethers";
import { useStateContext } from "../../context";
import { calculateBarPercentage, daysLeft } from "../../utils";
import { loader, profile } from "../../assets";

export default function CampaignDetail() {
  const { state } = useLocation();
  const { donate, getDonations, contract, address } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const remainingDays = daysLeft(state.deadline);
  const navigate = useNavigate();

  // console.log("state router", state);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    console.log(data);
    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/");
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <div className="display-loader-div">
          <img src={loader} alt="loader" className="display-loader" />
        </div>
      )}

      <div className="row">
        <div className="col-md-1 col-sm-0"></div>
        <div className="col-lg-10 col-md-12">
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body pb-5">
              <div className="row cd-title">
                <h1>{state.title}</h1>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <img
                    src={state.image}
                    className="cd-img mx-auto"
                    alt="cd-img"
                  />
                </div>
                <div className="col-lg-4 col-md-12 cd-sideBox">
                  <div className="cd-img-sideBox">
                    <p>{remainingDays}</p>
                    <div className="cd-img-sideBoxIn">
                      <p>Days Left</p>
                    </div>
                  </div>
                  <div className="cd-img-sideBox">
                    <p> {state.amountCollected}</p>
                    <div className="cd-img-sideBoxIn">
                      <p>Raised of {state.target}</p>
                    </div>
                  </div>
                  <div className="cd-img-sideBox">
                    <p> {donators.length}</p>
                    <div className="cd-img-sideBoxIn">
                      <p>Total backer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 mt-3">
                <div
                  className="progress shadow-sm p-0 m-0"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{
                      width: `${calculateBarPercentage(
                        state.target,
                        state.amountCollected
                      )}%`,
                    }}
                  >
                    {`${calculateBarPercentage(
                      state.target,
                      state.amountCollected
                    )}%`}
                  </div>
                </div>
              </div>
              <div className="row px-0 py-3">
                <div className="col-lg-6 col-sm-12">
                  <div className="cd-cont-div">
                    <h4 className="m-0 ">Creator</h4>
                    <div className="creator-div">
                      <img src={profile} alt="owner" />
                      <p>{state.owner}</p>
                    </div>
                  </div>
                  <div className="cd-cont-div">
                    <h4 className="m-0 ">Story</h4>
                    <div className="desc-div">
                      <p>{state.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="cd-cont-div">
                    {/* <h4 className="m-0 ">Fund</h4> */}
                    <div className="fund">
                      <div className="card-body bg-body-secondary fund-div mx-auto">
                        <h3 className="text-center">Fund Campaign</h3>

                        <div className="input-group mb-3 shadow-sm">
                          <span
                            className="input-group-text border-0"
                            id="inputGroup-sizing-default"
                          >
                            Ether Amount
                          </span>
                          <input
                            type="number"
                            className="form-control border-0"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            step="0.1"
                            onChange={(e) => {
                              setAmount(e.target.value);
                            }}
                            value={amount}
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn donate-btn btn-primary"
                            type="submit"
                            onClick={handleDonate}
                          >
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="cd-cont-div">
                  <h4 className="m-0 ">Donators {`(${donators.length})`}</h4>
                  <div className="desc-div">
                    {donators.length === 0 ? (
                      <p>No donations yet. Be the first one.</p>
                    ) : (
                      donators.map((item, index) => (
                        <div className="d-flex flex-row">
                          <div key={index}>{item.donator}</div>
                          <div className="ms-5">{item.donation} ether</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
