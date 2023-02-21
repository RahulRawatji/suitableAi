import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineCircle } from "react-icons/md";

import user from "../assets/man21.png";

const Stages = ({stageData, currentStage, isActive}) =>{

    return (<>  {stageData.map((stage) => {
        const { name, status } = stage;
        return (
          <div key={name}
            className={
                currentStage == name
                ? "progress-item is_current"
                : status && isActive
                ? "progress-item active"
                : "progress-item"
            }
          >
              
            {currentStage == name ? (
              <div className="user_img user_progress_img">
              <img src={user} width="40px" style={{filter: isActive ? null : `grayscale(100%)`}}/>
            </div>
            ) : status && isActive? (
              <AiFillCheckCircle size={28} style={{ color: "green", zIndex:'1' }} />
            ) : (
              <MdOutlineCircle size={28} style={{ color: "gray", zIndex:'1' }} />
            )}

            <div className="mobile-view ">
              <h3>{name}</h3>
              <h4>20 July 2022</h4>
            </div>
          </div>
        );
      })}</>)
}

export default Stages;