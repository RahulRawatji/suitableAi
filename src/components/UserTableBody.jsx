import { GiPartyPopper } from "react-icons/gi";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import user from "../assets/man21.png";
import moneySack from "../assets/moneySack.png";
import noResult from "../assets/noresult.png";
import { CANDIDATE_DATA } from "../utils/CANDIDATE_DATA";
import "./UserTableBody.css";
import Stages from "./Stages";

const UserTableBody = ({ searchText }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    filterDataHandler();
  }, [searchText]);

  const filterDataHandler = () => {
    let filteredData = CANDIDATE_DATA.filter((item) => {
      return searchText.toLowerCase() == ""
        ? item
        : item.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setData(filteredData);
  };

  if(data.length == 0){
    return (<div className="fallback_container">
      <img src={noResult} alt="No Result Found" width="280px"/> 
    </div>)
  }
  return (
    <>
      {data.map((info) => {
        const { name, role, stages, reward, current_stage, isActive, id } =
          info;
        const { amount, rewardStatus } = reward;
        return (
          <div key={id} className="user_container">
            <div
              className="flex"
              style={{ gap: ".9rem", alignItems: "center" }}
            >
              <div className="user_img">
                <img src={user} width="50px" />
              </div>
              <div>
                <h3>{name}</h3>
                <h4 style={{ color: "gray" }}>{role}</h4>
              </div>
              <div className="mobile-view">
                <BsChevronDown size={22} />
              </div>
            </div>

            <Stages
              stageData={stages}
              currentStage={current_stage}
              isActive={isActive}
            />

            <div className={"progress-item"}>
              <img src={moneySack} className="money_sack" />
              <h5
                className="reward "
                style={{ color: rewardStatus ? "" : "gray" }}
              >
                ${amount} {rewardStatus ? <GiPartyPopper size={22} /> : null}
              </h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserTableBody;
