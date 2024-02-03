import "./createCamp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { loader } from "../../assets";
import { checkIfImage } from "../../utils";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useStateContext } from "../../context";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2 col-sm-0"></div>
        <div className="col-lg-8  col-sm-12 ">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              {isLoading && (
                <img src={loader} alt="loader" className="cc-loader" />
              )}
              <h1 className="text-center py-3 form-title">
                Create Campaign 🚀
              </h1>
              <form onSubmit={handleSubmit} className="">
                <div className="row">
                  <div className="col-md-6  col-sm-12 ">
                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className="form-control border-0 bg-body-tertiary shadow-sm"
                        id="floatingInput"
                        placeholder=""
                        required
                        autoComplete="off"
                        name="name"
                        onChange={handleFormChange}
                        value={form.name}
                      />
                      <label htmlFor="floatingInput">Name </label>
                    </div>
                  </div>
                  <div className="col-md-6  col-sm-12 ">
                    <div className="form-floating mb-4 ">
                      <input
                        type="text"
                        className="form-control border-0 bg-body-tertiary shadow-sm"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        autoComplete="off"
                        name="title"
                        onChange={handleFormChange}
                        value={form.title}
                      />
                      <label htmlFor="floatingInput">Campaign Title</label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className="form-control border-0 bg-body-tertiary shadow-sm"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "150px" }}
                    required
                    autoComplete="off"
                    name="description"
                    onChange={handleFormChange}
                    value={form.description}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Story</label>
                </div>

                <div className="row">
                  <div className="col-md-6  col-sm-12 ">
                    <div className="mb-4">
                      <div className="input-group ">
                        <span className="input-group-text border-0 bg-body-secondary shadow-sm">
                          Goal Ether
                        </span>

                        <input
                          type="number"
                          className="form-control border-0 bg-body-tertiary shadow-sm"
                          aria-label="Dollar amount (with dot and two decimal places)"
                          required
                          autoComplete="off"
                          name="target"
                          step="0.1"
                          onChange={handleFormChange}
                          value={form.target}
                        />
                      </div>
                      <div id="" className="form-text text-body-tertiary ">
                        💰 You will get 100% of the raised amount.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  col-sm-12 ">
                    <div className="form-floating mb-4">
                      <input
                        type="date"
                        className="form-control border-0 bg-body-tertiary shadow-sm"
                        id="datePicker"
                        placeholder="2023-11-04"
                        required
                        autoComplete="off"
                        name="deadline"
                        onChange={handleFormChange}
                        value={form.deadline}
                      />
                      <label htmlFor="datePicker">Last Date</label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-4 ">
                  <input
                    type="text"
                    className="form-control border-0 bg-body-tertiary shadow-sm"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                    autoComplete="off"
                    name="image"
                    onChange={handleFormChange}
                    value={form.image}
                  />
                  <label htmlFor="floatingInput">Campaign Images URL</label>
                </div>
                <div className=" text-center">
                  <button
                    type="submit"
                    className="btn  btn-primary nav-btn text-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
